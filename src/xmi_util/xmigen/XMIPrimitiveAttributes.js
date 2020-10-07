const XMICardinality = require("./XMICardinality.js");
const unid = require("uniqid");
const XMIAux = require("./XMIAux.js");
/**
 * Genera atributos XMI de carácter simple
 */
class XMIPrimitiveAttributes {

    constructor (xmitype, irim, xmicon) {
        this.unid = unid;
        this.xmitype = xmitype;
        this.irim = irim;
        this.xmicon = xmicon;
        this.xmicard = new XMICardinality();
        this.XMIAux = XMIAux;
    }

    /**
     * Crea un atributo XMI básico
     * @param name  Nombre
     * @param type  Tipo
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @param valueExpr Valor expresión
     * @param id    ID
     * @returns {string|*}  Atributo XMI
     */
    createXMIPrimAttribute(name, type, min, max, valueExpr, id) {
        let xmiType = this.xmitype.createXMIType(type);
        let card = this.xmicard.createXMICardinality(min, max);
        let atId = this.unid();
        if(id !== undefined) {
            atId = id;
        }

        this.xmicon.checkFacets(valueExpr, atId);
        //Tipo primitivo
        if(xmiType.primitive) {
            let tName = xmiType.name.split(":").pop();
            return this.XMIAux.createOwnAt(atId, name, "uml:PrimitiveType", tName, card);
        }
        //Cualquiera: Wildcard
        if(xmiType.name === "Any") {
            if(!this.xmitype.getAny()) {
                this.xmitype.setAny();
            }
            return this.XMIAux.createOwnAt(atId, name, "uml:Property", this.xmitype.getAny(), card);
        }

        //Datatype
        let dtype = this.xmitype.findDataType(xmiType.name, xmiType.iri);
        return this.XMIAux.createOwnAt(atId, name, "uml:Property", dtype.id, card);
    }

    /**
     * Genera un atributo de tipo de nodo
     * IRI, Literal, BNode...
     * @param name  Nombre
     * @param kind  Tipo de nodo
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @param id    ID
     * @returns {string|*}  Atributo XMI
     */
    createXMIKindAttribute(name, kind, min, max, id) {
        let nkind = this.xmitype.findNodeKind(kind);
        let card = this.xmicard.createXMICardinality(min, max);
        let atId = this.unid();
        if(id !== undefined) {
            atId = id;
        }
        return this.XMIAux.createOwnAt(atId, name, "uml:Property", nkind.id, card);
    }

}
module.exports = XMIPrimitiveAttributes;