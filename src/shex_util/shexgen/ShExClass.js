const IRIManager = require ("../../managers/IRIManager.js");
const ShExAttributes = require("./ShExAttributes.js");
/**
 * Genera el equivalente en ShEx de una clase UML (Shape)
 */
class ShExClass {

    constructor (shexco, shm, shext, shexen) {
        this.shexco = shexco;
        this.shm = shm;
        this.shexat = new ShExAttributes(shext, this.shm, this.shexco, shexen);
    }

    /**
     * Genera el equivalente ShEx dada una clase
     * @param element   Clase XMI
     * @returns {string}    Equivalente ShEx
     */
    classToShEx(element) {
        //Si está registrada como componente, no hacemos nada
        //Se generará dentro de la pertinente clase
        if(this.shm.getSubSet(element.$["xmi:id"]) !== undefined) {
            return "";
        }
        let header = IRIManager.getShexTerm(element.$.name);
        let content = "";
        let brackets = false;

        //Se crea herencia
        if(element.generalization) {
            brackets = true;
            //En el caso de que sea una shapeAnd
            let created = false;
            if(element.ownedAttribute) {
                for(let i = 0; i < element.ownedAttribute.length; i++) {
                    if(element.ownedAttribute[i].$.name === "AND") {
                        header += this.shexat.generalizationToShEx(element.generalization, "AND");
                        created = true;
                        break;
                    }
                    else if(element.ownedAttribute[i].$.name === "OR") {
                        header += this.shexat.generalizationToShEx(element.generalization, "OR");
                        created = true;
                        break;
                    }
                }
            }
            if(!element.ownedAttribute || !created) {
                content += this.shexat.generalizationToShEx(element.generalization);
            }
        }

        let attributes = element.ownedAttribute;
        if(!attributes) {
            brackets = true;
            attributes = [];
        }
        //Se crean los atributos de la clase
        let ats = this.shexat.attributesToShEx(attributes, brackets);

        content += ats.content;
        header += ats.header;
        //Durante la generación de atributos se determina si son necesarias lalves
        brackets = ats.brackets;
        //Añadimos a la cabecera restricciones encontradas
        header += this.shexco.getConstraints(element);
        if(brackets) {
            return header + " {" + content + "\n}\n\n"
        }
        else {
            return header + content + "\n\n"
        }
    }

}
module.exports = ShExClass;