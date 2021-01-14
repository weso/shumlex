const uniqid = require("uniqid");
const IRIManager = require("../../src/managers/IRIManager.js");
const xmiparser = require('../../src/xmi_util/XMIParser.js');
const ShExCardinality = require("../../src/shex_util/shexgen/ShExCardinality.js");
const ShapeManager = require("../managers/ShapeManager.js");
let XMISources = {0: "VisualParadigm", 1: "Modelio"};
let XMISource = XMISources[0];

const mermaid = require('../../lib/mermaid/mermaid.min.js');
const $ = require('jquery');

class UMLGen {

    constructor() {
        this.irim = new IRIManager();
        this.shm = new ShapeManager(uniqid);

        this.classes = new Map();
        this.types = new Map();
        this.enums = new Map();
        this.constraints = new Map();
		
		this.noSymbolNames = new Map(); //dado que la librería no se digna a aceptar apenas ningún símbolo, y resulta que se emplean muchos más de los que cabría esperar,
										//voy a emplear un Map que guarde el nombre sanitizado y el original para recuperarlo al instante. Mejor que andar sustituyendo in situ
										//ya que se alargan mucho los términos y me joden la anchura de los recuadros.
    }
	
	crearSVG(id, umlcr, ops) {
		
		let maxheight = ops.max_height ? ops.max_height : "500px";
		let maxwidth = ops.max_width ? ops.max_width : "100vw";
		$("#output").text(umlcr);
		$("#" + id).removeAttr("data-processed");
		$("#" + id).css("max-height", maxheight);
		$("#" + id).css("max-width", maxwidth);
		$("#" + id).text(umlcr);
		mermaid.init({flowchart: { useMaxWidth: false }}, "#" + id);
		
		let self = this;
		//Borrar caracteres empleados para la generación
		$( "#" + id + " tspan" ).each(function( index ) {
			
			let contenido = $(this).text().replace(/\\/g, "")
									.replace(/\"/g, "")
									.replace(/\*(<|>)/g, "~")
									.replace(/CLOSED/g, " CLOSED")
									.replace(/_?:?<?[^prefix][A-Za-z0-9_]+>? : /g, "")
									.replace(/«/g, "<<")
									.replace(/»/g, ">>");
									
			$(this).text(contenido);
			
			let elements = contenido.split(" ");
			for(let i = 0; i < elements.length; i++) {
				let originalName = self.noSymbolNames.get(elements[i]);	
				if(originalName) {
					let newText = $(this).text().replace(elements[i], originalName);
					$(this).text(newText);
				}
			}
			
			
			
			
		});
		
		$( "#" + id + " .label" ).each(function( index ) {
			let contenido = $(this).text();
			let originalName = self.noSymbolNames.get(contenido);
			if(originalName) {
				$(this).text($(this).text().replace(contenido, originalName));
			}
		});
		
		//Añadir <> a los que carezcan de prefijo
		$( "#" + id + " .title" ).each(function( index ) {
			let contenido = $(this).text();
			if(contenido === "Prefixes" || contenido.includes(":") || contenido.includes("<") || contenido.includes("_Blank"))
				return;
			$(this).text("<" + contenido + ">")
		});
		
		//Eliminar repeticiones de enumeraciones
		$( "#" + id + " tspan[dy]:contains('<<enumeration>>')" ).each(function( index ) {
			let height = 10;
			let line = $(this).parent().next();
			let liney = line.attr("y1");
			line.attr("y1", liney - height);
			line.attr("y2", liney - height);
			let text = line.next();
			text.attr("y", text.attr("y") - height);
			let line2 = text.next();
			let liney2 = line2.attr("y1");
			line2.attr("y1", liney2 - height);
			line2.attr("y2", liney2 - height);
			let rect = $(this).parent().prev();
			rect.height(rect.height() - height);
			$(this).remove();	
		});
		
		$("#" + id + " svg").removeAttr("width");
		
		$(".cardinality text").attr("font-size", "12");	
	}

    /**
     * Genera el código Mermaid
     * @param xmi   XMI fuente
     * @returns {string}    En formato MUML
     */
    generarCodigoMUML(xmi) {
        let muml = "classDiagram\n";
        muml += this.parseXMIToMUML(xmi);
        return muml;
    }

    /**
     * Parsea el valor XMI a código MUML
     * @param xmi   XMI a parsear
     * @returns {string}
     */
    parseXMIToMUML(xmi) {
        let mumlEquivalent = "";

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
                    mumlEquivalent += "class " + name + " {\n<<enumeration>>\n";
                    for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
						let prefix = packagedElements[i].ownedLiteral[j].$.name;
						let fragments = prefix.split(" ");
						if(fragments[0] === "prefix") {
							prefix = `${fragments[0]} \\${fragments[1]} ${fragments[2]}`;
						}
                        mumlEquivalent +=  prefix + "\n";
                    }
                    mumlEquivalent += "}\n";

                }
                //Generamos las enumeraciones corrientes
                else if (type === "uml:Enumeration") {
                    this.enums.set(id, name);
					let sanitizedName = this.adaptPref(name);
					this.noSymbolNames.set(sanitizedName, name);
                    mumlEquivalent += "class " + sanitizedName + " {\n<<enumeration>>\n";
                    for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
                        mumlEquivalent += packagedElements[i].ownedLiteral[j].$.name.replace(/~/g, "*~") + "\n";
                    }
                    mumlEquivalent += "}\n";
                }
            }

            //Generamos las clases y su contenido
            for (let i = 0; i < packagedElements.length; i++) {
                if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                    mumlEquivalent += this.createUMLClass(packagedElements[i])
                }
            }

        } catch (ex) {
            console.log("Se ha producido un error durante la generación de UML.\n" +
                "El XMI está bien formado, pero faltan elementos o atributos clave para la generación.\n"
                + ex);
            return "";
        }
		
		function removeClosed(str, p1, p2, offset, s)
		{
			return str.replace("CLOSED ", "");
		}
		
		mumlEquivalent = mumlEquivalent
							.replace(/[\r\n]+(_)?[A-Za-z0-9_]+(_)? CLOSED :/g, removeClosed);

        return mumlEquivalent;
    }
	
	base64SVG(idsvg) {
		let bs = btoa($("#" + idsvg).html());
		return `data:image/svg+xml;base64,${bs}`;
	}

    /**
     * Crea una clase en PUML
     * @param element   Clase
     * @returns {string}
     */
    createUMLClass(element) {

        //Extraemos las restricciones y se las asignamos al nombre, si existen
        let cn = this.constraints.get(element.$["xmi:id"]);
		let sanitizedName = this.adaptPref(element.$.name);
		this.noSymbolNames.set(sanitizedName, element.$.name);
        let name = sanitizedName + (cn === undefined ? "" : " " + cn);
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
				let gname = this.classes.get(element.generalization[i].$.general);
				let gsanitizedName = this.adaptPref(gname);
				this.noSymbolNames.set(gsanitizedName, gname);
                clase += gsanitizedName + " <|-- " + name
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
		let tyName = this.classes.get(at.$.type);
		let relName = at.$.name;
		let tysanitizedName = this.adaptPref(tyName);
		this.noSymbolNames.set(tysanitizedName, tyName);
		let relsanitizedName = this.adaptPref(relName);
		this.noSymbolNames.set(relsanitizedName, relName);
        return name + relation + ccard + " "
            + tysanitizedName + " : " + relsanitizedName + "\n";
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
		if (cn !== undefined) {
			cn = cn.split(" ").join(" \\");
		}

		let tyName = this.getType(at);
		let atName = at.$.name;
		let tysanitizedName = this.adaptPref(tyName);
		this.noSymbolNames.set(tysanitizedName, tyName);
		let atsanitizedName = this.adaptPref(atName);
		this.noSymbolNames.set(atsanitizedName, atName);
        return atsanitizedName + " \"" + tysanitizedName + "\\" + card
            + (cn === undefined ? "" : " \\" +  cn) + "\" \n";
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
			let type = this.types.get(attr.$.type);
			if(type) {
				return type;
			}
        }
        return ".";
    }
	
	adaptPref(prefix) {
		return prefix.replace(/[\:<>\^\-\/\.]/g, "_");
	}

}
module.exports = UMLGen;