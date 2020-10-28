const xmlparser = require('xml2js');
const shexgen = require ("../shex_util/shexgen/ShExGenerator.js");
let XMISources = {0: "VisualParadigm", 1: "Modelio"};
let XMISource = XMISources[0];

/**
 * Parsea XMI para la generación de UML o ShEx
 */
class XMIParser {

    constructor () {
        this.source = "";
    }

    /**
     * Parsea XMI y devuelve un JSON con la información
     * @param xmi XMI
     * @returns {string|*}  JSON con la información extraída
     */
    parseXMI(xmi) {
        const self = this;
        xmlparser.parseString(xmi, function (err, result) {
            self.source = result;
            if(err) {
                console.log(err.toString().replace("Error: ", ""));
            }
        });

        if(!this.source) {
            return;
        }

        return this.source;

    }

    /**
     * Parsea XMI e invoca la generación de ShEx a partir del JSON obtenido
     * @param xmi   XMI
     * @returns {string}    Equivalente ShEx
     */
    parseXMIToShEx(xmi) {

        let shExEquivalent = "";

        this.parseXMI(xmi);

        let packagedElements = [];
        //Generado por Modelio
        if(this.source["uml:Model"]) {
            XMISource = XMISources[1];
            packagedElements = this.source["uml:Model"]["packagedElement"];
        }
        //Generado por VisualParadigm
        if(this.source["xmi:XMI"]) {
            XMISource = XMISources[0];
            packagedElements = this.source["xmi:XMI"]["uml:Model"][0]["packagedElement"];
        }

        try {
            //Hacemos un barrido preliminar para guardar elementos de cara a su uso futuro
            for (let i = 0; i < packagedElements.length; i++) {
                let pe = packagedElements[i];
                let type = pe["$"]["xmi:type"];
                if (type === "uml:Class") {
                    shexgen.saveClass(pe)
                }
                else if (type === "uml:PrimitiveType") {
                    shexgen.saveType(pe)
                }
                else if (type === "uml:Enumeration" &&
                    pe["$"]["name"] === "Prefixes") {
                    shexgen.savePrefixes(pe)
                }
                else if (type === "uml:Enumeration") {
                    shexgen.saveEnum(pe)
                }
            }

            //Registramos las restricciones
            let ownedRules;
            if(XMISource === XMISources[0]) {
                ownedRules = this.source["xmi:XMI"]["uml:Model"][0]["ownedRule"];
            } else {
                ownedRules = this.source["uml:Model"]["ownedRule"];
            }
            if(ownedRules !== undefined) {
                for (let i = 0; i < ownedRules.length; i++) {
                    shexgen.saveConstraint(ownedRules[i]);
                }
            }

            //Generamos el equivalente a las clases y su contenido
            for (let i = 0; i < packagedElements.length; i++) {
                if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                    shExEquivalent += shexgen.classToShEx(packagedElements[i])
                }
            }

            //Generamos Shapes pendientes
            let pending = shexgen.getPendingShapes();
            for (const [key, value] of pending.entries()) {
                shExEquivalent += shexgen.classToShEx(value)
            }

            //Añadimos los prefijos
            shExEquivalent = shexgen.createShExHeader() + shExEquivalent;

        } catch (ex) {
            console.log(ex);
            return "";
        } finally {
            //Reseteamos el generador
            shexgen.clear();
        }

        return shExEquivalent;
    }


}

module.exports = new XMIParser();