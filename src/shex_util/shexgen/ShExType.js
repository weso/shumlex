const IRIManager = require ("../../managers/IRIManager.js");
/**
 * Genera el equivalente ShEx a los tipos UML
 */
class ShExType {

    constructor (irim, shexen) {
        this.irim = irim;
        this.types = new Map();
        this.shexen = shexen;
    }

    /**
     * Guarda un tipo UML, clave ID, valor nombre
     * @param element   Tipo
     */
    saveType(element) {
        this.types.set(element.$["xmi:id"], { name: element.$.name });
    }

    /**
     * Recupera un tipo, dado su ID
     * @param id    ID tipo
     * @returns {any}   Nombre en JSON
     */
    getType(id) {
        return this.types.get(id);
    }

    /**
     * Devuelve el tipo adecuado de un atributo
     * @param attr  Atributo a extraer el tipo
     * @returns {*} Equivalente ShEx
     */
    getAttrType(attr) {
        if(attr.type) {
            let href = attr.type[0].$.href.split("#");
            //Tipo XSD
            if(href[0] === "pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml") {
                return this.irim.findXSDPrefix() + href[1].substring(0,1).toLowerCase() + href[1].substring(1);
            }
            else {
                return href.pop();
            }

        }
        else if (attr.$.type) {
            if(attr.$.type === "Int_id") {
                return this.irim.findXSDPrefix() + "int";
            }
            let enumer = this.shexen.getEnum(attr.$.type);
            //Tipo enumeración
            if(enumer) {
                return this.shexen.enumerationToShEx(enumer);
            }
            let type = this.getType(attr.$.type);
            return type.name;
        }
        return "Any";
    }

    /**
     * Devuelve la representación adecuada de un tipo UML en Shex
     * @param type Tipo UML
     * @returns {string} Equivalente ShEx
     */
    typeToShEx(type) {
        if(type === "Any") {
            return " .";
        } else {
            return " " + IRIManager.getShexTerm(type);
        }
    }

    /**
     * Resetea el registro de tipos
     */
    clear () {
        this.types = new Map();
    }

}
module.exports = ShExType;