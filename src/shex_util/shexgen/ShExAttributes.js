const IRIManager = require ("../../managers/IRIManager.js");
const ShExCardinality = require("./ShExCardinality.js");
/**
 * Genera el equivalente a los atributos de UML en ShEx (TripleConstraint)
 */
class ShExAttributes {

    constructor(shext, shm, shexco, shexen) {
        this.shext = shext;
        this.shm = shm;
        this.shexco = shexco;
        this.shexcar = ShExCardinality;
        this.shexen = shexen;
    }

    /**
     *  Genera el equivalente a los atributos de UML en ShEx
     * @param attributes    Atributos
     * @param brs   Indica si crear llaves
     * @returns {{header: string, content: string, brackets: *}}
     */
    attributesToShEx(attributes, brs){

        let brackets = brs;
        let content = "";
        let header = "";

        //Generamos cada uno de los atributos
        for(let i = 0; i < attributes.length; i++) {
            let at = this.attributeToShEx(attributes[i], brackets);
            brackets = at.brackets;
            content += at.content;
            header += at.header;
        }

        return {
            brackets: brackets,
            content: content,
            header: header
        };

    }

    /**
     * Genera el ShEx correspondiente a un atributo UML
     * @param attr  Atributo
     * @param brs   Indica si la shape lleva llaves
     * @returns {{header: string, content: string, brackets: (boolean|*)}}
     */
    attributeToShEx(attr, brs) {
        let brackets = brs;
        let content = "";
        let header = "";

        //Asociación (ShapeRef)
        let shape = this.shm.getShape(attr.$.type);
        let subSet = this.shm.getSubSet(attr.$.type);
        if(attr.$.association           //Modelio ver.
            || shape !== undefined || subSet !== undefined) {   //VP ver.
            brackets = true;
            content += this.associationToShEx(attr);
        }
        //Restricción de tipo nodal
        else if(attr.$.name.toLowerCase() === "nodekind") {
            let nk = this.createNodeKind(attr, "AND", brackets);
            header += nk.header;
            brackets = nk.brackets;
        }
        //Restricción de tipo nodal bajo un OR
        else if(attr.$.name.toLowerCase() === "or nodekind") {
            let nk = this.createNodeKind(attr, "OR", brackets);
            header += nk.header;
            brackets = nk.brackets;
        }
        //Restricción datatype
        else if(attr.$.name.toLowerCase() === "datatype") {
            let dt = this.shext.getAttrType(attr);
            header += " " + dt;
            brackets = false;
        }
        else if(attr.$.name.toLowerCase() === "extra") {
            let values = this.shexen.getEnum(attr.$.type);
            let extravals = "";
            for(let value in values.values) {
                if(values.values.hasOwnProperty(value)) {
                    extravals += values.values[value].$.name + " ";
                }
            }
            header += " EXTRA " + extravals;
            brackets = true;
        }
        //Otro
        else {
            brackets = true;
            content += this.basicAttrToShex(attr);
        }

        return {
            brackets: brackets,
            content: content,
            header: header
        };
    }

    /**
     * Añade una restricción nodeKind
     * @param attr  Atributo XMI que especifica el nodeKind
     * @param lop   Operación lógica aplicada (AND, OR)
     * @param bks   Indica si se abren llaves
     * @returns {{header: string, brackets: (boolean|*)}}
     */
    createNodeKind(attr, lop, bks) {
        let brackets = bks;
        let kind = this.shext.getType(attr.$.type);
        kind = IRIManager.checkNodeKind(kind.name);
        let ajustedKind = kind + " " + lop;

        //Si es IRI, no es necesario el AND
        //La shape no llevará llaves salvo que se haya indicado positivamente
        if(kind === "IRI") {
            brackets = brackets || false;
            ajustedKind = kind;
        }
        else {
            brackets = true;
        }
        return {
            header: " " + ajustedKind,
            brackets: brackets
        };
    }

    /**
     * Genera el ShEx para un atributo básico de UML
     * @param attr  Atributo
     * @returns {string}    Equivalente ShEx
     */
    basicAttrToShex(attr) {
        let type = this.shext.getAttrType(attr);
        return "\n\t" + IRIManager.getShexTerm(attr.$.name)    //Nombre de la tripleta
            + this.shext.typeToShEx(type)                       //Tipo (xsd:string...)
            + this.shexco.getConstraints(attr)          //Restricciones
            + this.shexcar.cardinalityOf(attr) + ";";               //Cardinalidad
    }

    /**
     * Genera la ShapeRef para una asociación de UML
     * @param attr
     * @returns {string}
     */
    associationToShEx(attr) {
        //Busca si la asociación en UML está registrada como subconjunto
        let subSet = this.shm.getSubSet(attr.$.type);

        //Caso afirmativo
        if(subSet !== undefined) {
            //La clase a la que señala abarca el contenido de un OneOf
            if(attr.$.name === "OneOf") {
                return this.createOneOf(attr, subSet);
            }
            //Es una referencia a una expresión etiquetada
            else if(attr.$.name.includes("&:")) {
                return "\n\t" + attr.$.name + ";";
            }
            //Es una expresión etiquetada
            else if(/^([$]:[<]?[a-zA-Z]+[>]?)$/.test(attr.$.name)) {
                return this.createLabelled(attr, subSet);
            }
            //Shape anidada
            else if (attr.$.aggregation === "composite" &&
                /^_:[0-9]+(_[0-9]+)*$/.test(subSet.name)) {
                return this.createNestedShape(attr, subSet);
            }
            //Referencia a shape anónima
            else if (/^_:[0-9]+(_[0-9]+)*$/.test(subSet.name)) {
                this.shm.saveInShExShapes(attr.$.type, subSet.name);
            }
            //Conjunción
            else if(attr.$.name === "AND" && attr.$.aggregation === "composite") {
                return this.createLogicOperation(subSet, "AND");
            }
            else if(attr.$.name === "OR" && attr.$.aggregation === "composite") {
                return this.createLogicOperation(subSet, "OR");
            }
            //Es una expresión EachOf con cardinalidad
            else {
                return this.createEachOf(attr, subSet);
            }
        }

        let shape = this.shm.getShape(attr.$.type);
        //ShapeRef
        let shExName = IRIManager.getShexTerm(shape.name);

        return "\n\t" + attr.$.name + " @" + shExName
            + this.shexcar.cardinalityOf(attr)
            + ";"
    }

    /**
     * Crea un OneOf
     * @param attr  Atributo XMI que referencia al componente OneOf
     * @param subSet    Componente XMI que representa el OneOf
     * @returns {string}    ShEx OneOf
     */
    createOneOf(attr, subSet) {
        let conj = "";
        let card = this.shexcar.cardinalityOf(attr);
        if(card !== "") {
            conj = "\n (";
        }
        //Añadimos cada uno de los elementos de la clase subconjunto
        //Separados por | como elementos del OneOf
        for(let i = 0; i < subSet.attributes.length; i++) {
            if(subSet.attributes[i].$.aggregation === "composite") {
                conj += "\n("
            }
            conj += this.attributeToShEx(subSet.attributes[i]).content;
            if(subSet.attributes[i].$.aggregation === "composite") {
                conj += " );"
            }
            if(i < subSet.attributes.length - 1) {
                conj += " |"
            }
        }
        //Se añaden paréntesis si posee cardinalidad
        if(card !== "") {
            conj += ") " + card + ";";
        }

        return conj;
    }

    /**
     * Crea un EachOf
     * @param attr  Atributo XMI que referencia al componente EachOf
     * @param subSet    Componente XMI que representa el EachOf
     * @returns {string}    ShEx EachOf
     */
    createEachOf(attr, subSet) {
        let card = this.shexcar.cardinalityOf(attr);
        let conj = "";
        if(card !== "") {
            conj = "\n( ";
        }
        if(subSet.attributes) {
            conj += this.attributesToShEx(subSet.attributes, true).content;
        }
        if(subSet.generalization){
            conj += this.generalizationToShEx(subSet.generalization, true);
        }
        if(card !== "") {
            conj += " )" + card + " ;";
        }
        return conj;
    }

    /**
     * Crea una expresión etiquetada
     * @param attr  Atributo XMI que referencia al componente etiquetado
     * @param subSet    Componente XMI que representa la expresión etiquetada
     * @returns {string}    ShEx Labelled Expr
     */
    createLabelled(attr, subSet) {
        let conj = "\n\t" + attr.$.name +" (";
        let card = this.shexcar.cardinalityOf(attr);
        for(let i = 0; i < subSet.attributes.length; i++) {
            conj += this.attributeToShEx(subSet.attributes[i]).content;
        }
        conj += ") " + card + ";";
        return conj;
    }

    /**
     * Crea una shape Anidada
     * @param attr  Atributo XMI que referencia al componente
     * @param subSet    Componente XMI que representa la shape anidada
     * @returns {string}    ShEx Nested Shape
     */
    createNestedShape(attr, subSet) {
        let card = this.shexcar.cardinalityOf(attr);
        //La eliminamos de pendientes, puesto que es anidada
        this.shm.deletePendingShExShape(attr.$.type);
        let conj = "\n\t" + attr.$.name +" {";
        if(subSet.attributes) {
            conj += this.attributesToShEx(subSet.attributes, true).content;
        }
        if(subSet.gen){
            conj += "\t" + this.generalizationToShEx(subSet.gen, true);
        }
        conj += "\n}" + card + ";";
        return conj;
    }

    /**
     * Crea una operación lógica, conjunción/disyunción de shapes
     * @param subSet    Componente XMI que aúna las shapes
     * @param lop   Operación lógica, AND/OR
     * @returns {string}
     */
    createLogicOperation(subSet, lop) {
        let conj = "";
        if(subSet.attributes) {
            //Primera Shape
            conj += this.attributeToShEx(subSet.attributes[0]).content;
            //El resto son precedidas por la OPLog
            for(let i = 1; i < subSet.attributes.length; i++) {
                conj += " }\n" + lop + " {";
                conj += this.attributeToShEx(subSet.attributes[i]).content;
            }
        }
        return conj;
    }

    /**
     * Crea una relación de herencia
     * @param gen   Generalización
     * @param lop   Operación lógica: si es OR, se indica así en la gen.
     * @returns {string}    Equivalente en ShEx
     */
    generalizationToShEx(gen, lop) {
        let generalizations = "";
        for(let i = 0; i < gen.length; i++) {
            //Comprobamos si tiene una restricción Inverse
            let con = this.shexco.getConstraints(gen[i]);
            let inv = "";
            if(con === " Inverse" || gen[i].$.name === "^") {
                inv = "^";
            }
            //Buscamos la Shape padre
            let refClass = this.shm.getShape(gen[i].$.general);
            generalizations += this.createGeneralization(refClass.name, inv, lop);
        }
        return generalizations;
    }

    /**
     * Adapta una generalización XMI a ShEx
     * @param name  Nombre de clase referenciada (shape)
     * @param inv   Si es inversa
     * @param lop   Operación lógica
     * @returns {string}
     */
    createGeneralization(name, inv, lop) {
        switch(lop){
            case "AND":
                return " " + inv + "@" + IRIManager.getShexTerm(name) + " AND";
            case "OR":
                return " " + inv + "@" + IRIManager.getShexTerm(name) + " OR";
            default:
                return "\n\t" + inv + "a [" + IRIManager.getShexTerm(name) + "];";
        }
    }

}
module.exports = ShExAttributes;