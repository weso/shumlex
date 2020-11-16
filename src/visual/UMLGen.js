const uniqid = require("uniqid");
const IRIManager = require("../../src/managers/IRIManager.js");
const xmiparser = require('../../src/xmi_util/XMIParser.js');
const ShExCardinality = require("../../src/shex_util/shexgen/ShExCardinality.js");
const ShapeManager = require("../managers/ShapeManager.js");
let XMISources = {0: "VisualParadigm", 1: "Modelio"};
let XMISource = XMISources[0];

class UMLGen {

    constructor() {
        this.irim = new IRIManager();
        this.shm = new ShapeManager(uniqid);

        this.classes = new Map();
        this.types = new Map();
        this.enums = new Map();
        this.constraints = new Map();
    }

    /**
     * Genera el código PlantUML
     * @param xmi   XMI fuente
     * @returns {string}    En formato PUML
     */
    generarCodigoPUML(xmi) {
        let puml = "classDiagram\n";
        puml += this.parseXMIToPUML(xmi);
        return puml;
    }

    /**
     * Parsea el valor XMI a código PUML
     * @param xmi   XMI a parsear
     * @returns {string}
     */
    parseXMIToPUML(xmi) {
        let pumlEquivalent = "";

        let source = xmiparser.parseXMI(xmi);

        let ownedRules;
        //Generado por Modelio
        if(source["uml:Model"]) {
            XMISource = XMISources[1];
            ownedRules = source["uml:Model"]["ownedRule"];
        }
        //Generado por VisualParadigm
        else if(source["xmi:XMI"]) {
            XMISource = XMISources[0];
            ownedRules = source["xmi:XMI"]["uml:Model"][0]["ownedRule"];
        }


        //Guardar en constraints las restricciones
        if(ownedRules !== undefined) {
            for (let i = 0; i < ownedRules.length; i++) {
                let idInComment = null;
                let consElement = ownedRules[i].$.constrainedElement;
                let oName = ownedRules[i].$.name;
                //Si hay comentario, buscamos el ID que guardamos
                if(ownedRules[i].ownedComment) {
                    idInComment = ownedRules[i].ownedComment[0].body[0];
                }
                //Si el id guardado en comentario es distinto del que se señala en constrained,
                //Es un error de exportación. Tomamos el del comentario.
                if(idInComment && idInComment !== consElement) {
                    consElement = idInComment;
                }
                if(this.constraints.get(consElement) === undefined) {
                    this.constraints.set(consElement, oName);
                }
                else {
                    this.constraints.set(consElement, this.constraints.get(consElement) + " "
                        + oName);
                }
            }
        }

        let packagedElements = [];

        if(XMISource === XMISources[0]) {
            packagedElements = source["xmi:XMI"]["uml:Model"][0]["packagedElement"];
        } else {
            packagedElements = source["uml:Model"]["packagedElement"];
        }

        try {

            for (let i = 0; i < packagedElements.length; i++) {
                let pe = packagedElements[i];
                let type = pe["$"]["xmi:type"];
                if (type === "uml:Class") {
                    this.shm.saveShape(pe);
                }
            }

            //Revisar cada PackagedElement
            for (let i = 0; i < packagedElements.length; i++) {
                let pe = packagedElements[i]["$"];
                let type = pe["xmi:type"];
                let name = pe.name;
                let id = pe["xmi:id"];
                //Guardamos las clases para futuras referencias
                if (type === "uml:Class") {
                    let cn = this.constraints.get(id);
                    name = name + (cn === undefined ? "" : " " + cn) ;
                    this.classes.set(id, name);
                }
                //Guardamos los tipos
                else if (type === "uml:PrimitiveType") {
                    this.types.set(id, name);
                }
                //Guardamos los prefijos
                else if (type === "uml:Enumeration" &&
                    name === "Prefixes") {
                    this.enums.set(id, name);
                    //Generamos la enumeración que contiene los prefijos
                    pumlEquivalent += "class " + name + " {\n<<enumeration>>\n";
                    for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
						let prefix = packagedElements[i].ownedLiteral[j].$.name;
						let fragments = prefix.split(" ");
						if(fragments[0] === "prefix") {
							prefix = `${fragments[0]} <${fragments[1]}> ${fragments[2]}`;
						}
                        pumlEquivalent +=  prefix + "\n";
                    }
                    pumlEquivalent += "}\n";

                }
                //Generamos las enumeraciones corrientes
                else if (type === "uml:Enumeration") {
                    this.enums.set(id, name);
                    pumlEquivalent += "class " + this.adaptPref(name) + " {\n<<enumeration>>\n";
                    for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
                        pumlEquivalent += packagedElements[i].ownedLiteral[j].$.name + "\n";
                    }
                    pumlEquivalent += "}\n";
                }
            }

            //Generamos las clases y su contenido
            for (let i = 0; i < packagedElements.length; i++) {
                if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                    pumlEquivalent += this.createUMLClass(packagedElements[i])
                }
            }

        } catch (ex) {
            console.log("Se ha producido un error durante la generación de UML.\n" +
                "El XMI está bien formado, pero faltan elementos o atributos clave para la generación.\n"
                + ex);
            return "";
        }

        return pumlEquivalent;
    }

    /**
     * Crea una clase en PUML
     * @param element   Clase
     * @returns {string}
     */
    createUMLClass(element) {

        //Extraemos las restricciones y se las asignamos al nombre, si existen
        let cn = this.constraints.get(element.$["xmi:id"]);
        let name = this.adaptPref(element.$.name) + (cn === undefined ? "" : " " + cn);
        let clase = "class " + name + " {\n";

        let attributes = element.ownedAttribute;
        if(!attributes) {
            attributes = [];
        }

        //Generamos los atributos de la clase
        let ats = this.createUMLAttributes(attributes, name);
		ats.ins.forEach(el => clase += el);
		clase += "}\n";
		if(ats.ins.length === 0) {
			clase = "";
		}
		ats.out.forEach(el => clase += el);
		
		//Relaciones de herencia
        if(element.generalization) {
            for(let i = 0; i < element.generalization.length; i++) {
                let hename = element.generalization[i].$.name ?
                    (" : " + element.generalization[i].$.name) : "";
                clase += this.adaptPref(this.classes.get(element.generalization[i].$.general)) + " <|-- " + this.adaptPref(name)
                    + hename + "\n";
            }
        }

        return clase;
    }

    /**
     * Crea los atributos de una clase en PUML
     * @param ats   Atributos
     * @param name  Nombre de la clase
     * @returns {string}    Listado de atributos
     */
    createUMLAttributes(ats, name) {
		let insideElements = [];
		let outsideElements = [];
        for(let i = 0; i < ats.length; i++) {
            let shape = this.shm.getShape(ats[i].$.type);
            let subSet = this.shm.getSubSet(ats[i].$.type);
            //Asociación entre clases
            if(ats[i].$.association                                 //Modelio ver.
                || shape !== undefined || subSet !== undefined) {   //VP ver.
                outsideElements.push(this.createUMLAsoc(ats[i], name));
            }
            //Restricción de tipo de nodo
            else if(ats[i].$.name.toLowerCase() === "nodekind") {
                let kind = this.types.get(ats[i].$.type);
                insideElements.push("nodeKind: " + kind + " \n");
            }
            //Atributo común
            else {
                insideElements.push(this.createUMLBasicAt(ats[i], name));
            }
        }
        return { out: outsideElements, ins: insideElements};
    }

    /**
     * Crea una asociación en PUML
     * @param at    Atributo
     * @param name  Nombre de la clase
     * @returns {string}    Asociación en PUML
     */
    createUMLAsoc(at, name) {

        //Obtenemos la cardinalidad de la asociación
        let card = ShExCardinality.cardinalityOf(at);
        let ccard = card === "" ? "" : "\"" + card + "\"";

        let relation = " --> ";
        if(at.$.aggregation === "composite") {
            relation = " *-- ";
        }

        //at.$.type indica el nombre de la clase
        //at.$.name indica el nombre de la relación
        return name + relation + ccard + " "
            + this.adaptPref(this.classes.get(at.$.type)) + " : " + this.adaptPref(at.$.name) + "\n";
    }

    /**
     * Crea un atributo básico en UML
     * Formato <clase> : <atributo>
     * @param at    Atributo
     * @param name  Nombre
     * @returns {string}    Atributo en PUML
     */
    createUMLBasicAt(at, name) {

        let card = ShExCardinality.cardinalityOf(at);
        let cn = this.constraints.get(at.$["xmi:id"]);

        return name + " : " + this.adaptPref(at.$.name) + " " + this.adaptPref(this.getType(at)) + " " + card
            + (cn === undefined ? "" : cn) + " \n";
    }

    /**
     * Extrae el tipo de un atributo
     * @param attr  Atributo
     * @returns {*} Tipo
     */
    getType(attr) {
        if(attr.type) {
            let href = attr.type[0].$.href.split("#");
            //Tipo XSD
            if(href[0] === "pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml") {
                return this.irim.findXSDPrefix() + href[1].substring(0,1).toLowerCase() + href[1].substring(1);
            }
            //Otro
            else {
                return href.pop();
            }
        }
        else if (attr.$.type) {
            if(attr.$.type === "Int_id") {
                return this.irim.findXSDPrefix() + "int";
            }
            let enumer = this.enums.get(attr.$.type);
            //Tipo enumeración
            if(enumer) {
                return enumer;
            }
            return this.types.get(attr.$.type);
        }
        return ".";
    }
	
	adaptPref(prefix) {
		return prefix.replace(":", "_").replace("<", "").replace(">", "");
	}

}
module.exports = UMLGen;