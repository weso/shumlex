const unid = require("uniqid");

/**
 * Abarca una serie de métodos para crear distintos elementos XMI de modo genérico
 */
class XMIAux {

    /**
     * Genera el header para XMI. No requiere parámetros
     * @returns {string}    Header XMI
     */
    static createXMIHeader() {
        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" ' +
            'xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"\n xmi:id="' + unid() + '" name="ShExGeneratedXMI">'
    }

    /**
     * Genera un comentario en XMI
     * @param comment   Comentario
     * @param anEl   AnnotatedElement
     * @returns {string}    Comentario XMI
     */
    static createXMIOwnedComment(comment, anEl) {
        return '<ownedComment annotatedElement="' + anEl + '" xmi:id="' + unid() + '" xmi:type="uml:Comment">\n' +
            '<body>' + comment + '</body>\n' +
            '</ownedComment>\n'
    }

    /**
     * Cierra el XMI.
     * @returns {string}    Cierre XMI
     */
    static closeXMI() {
        return '\n</uml:Model>';
    }

    /**
     * Crea un Packaged Element
     * @param type  XMI:Type
     * @param id    XMI:Id
     * @param ats   Otros atributos (name)
     * @param int   Interior del elemento
     * @returns {string}    XMI Packaged Element
     */
    static createPackEl(type, id, ats, int) {
        if(!int) {
            return '\n<packagedElement xmi:type="' + type + '" xmi:id="' + id + '" ' + ats + '/>';
        }
        return '\n<packagedElement xmi:type="' + type + '" xmi:id="' + id + '" ' + ats + '>'
            + int
            + '\n</packagedElement>';
    }

    /**
     * Crea un Owned Attribute
     * @param id    XMI:Id
     * @param name  Nombre
     * @param xmit  XMI:Type (uml:Property, uml:PrimitiveType)
     * @param type  Tipo
     * @param int   Interior del atributo
     * @returns {string}    XMI Owned Attribute
     */
    static createOwnAt(id, name, xmit, type, int) {
        if(xmit === "uml:Property") {
            return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + id + '" name="'
                + name + '" visibility="public" ' + 'type="'+ type + '" isUnique="true">\n'
                + int
                + '\t</ownedAttribute>'
        }
        else if (xmit === "uml:PrimitiveType")
        {
            return '\n\t<ownedAttribute xmi:id="' + id + '" name="' + name
                + '" visibility="public" isUnique="false">\n' +
                '\t\t<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
                + type.substring(0, 1).toUpperCase() + type.substring(1) + '">\n'
                + '\t\t</type>' +
                int
                + '\n\t</ownedAttribute>'
        }
    }

    /**
     * Crea un Owned Attribute especializado para asociación
     * @param id    XMI:ID
     * @param name  Nombre
     * @param type  Tipo
     * @param idas  ID asociación referenciada
     * @param int   Interior Owned Attribute
     * @param ats   Otros atributos
     * @returns {string}    XMI Owned Attribute para at. asociación
     */
    static createAsocAt(id, name, type, idas, int, ats) {
        return '\n\t<ownedAttribute xmi:id="' + id + '" name="' + name
        + '" visibility="public" ' +
        'type="' + type + '" association="' + idas + '" ' + ats + '>'
        + int
        + '</ownedAttribute>';
    }

    /**
     * Crea un Member End
     * @param idat  ID Atributo
     * @param idown ID Dueño (Owner)
     * @returns {string}    XMI Member End
     */
    static createMemEnd(idat, idown) {
        return 'memberEnd="' + idat
            + ' '  + idown + '"';
    }

    /**
     * Crea un Owned End
     * @param id    XMI:ID
     * @param type  Tipo
     * @param idas  ID asociación referenciada
     * @returns {string}    XMI Owned End
     */
    static createOwEnd(id, type, idas) {
        return '\n\t<ownedEnd xmi:id="' + id + '" visibility="public" type="' + type + '" association="'
        + idas + '"/>';
    }

    /**
     * Crea un UpperValue para cardinalidad
     * @param card  Cardinalidad
     * @returns {string}    XMI Upper Value
     */
    static getUpVal(card) {
        return '\n\t\t<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + unid() + '" value="' + card + '"/>';
    }

    /**
     * Crea un LowerValue para cardinalidad
     * @param type  Tipo de Literal (Integer o UnlimitedNatural)
     * @param card  Cardinalidad
     * @returns {string}    XMI Lower Value
     */
    static getLowVal(type, card) {
        if(!card) {
            return '\n\t\t<lowerValue xmi:type="uml:Literal' + type + '" xmi:id="' + unid() + '" />';
        }
        return '\n\t\t<lowerValue xmi:type="uml:Literal' + type + '" xmi:id="' + unid() + '" value="' + card + '"/>';
    }

    /**
     * Crea un Owned Rule
     * @param name  Nombre
     * @param id    ID del elemento restringido
     * @returns {string}    XMI Owned Rule
     */
    static createXMIOwnedRule(name, id) {
        let orid = unid();
        return "\n<ownedRule xmi:id=\"" + orid + "\" name=\"" + name + "\" " +
            "constrainedElement=\"" + id + "\">\n" +
            "<specification body=\"" + name + "\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            XMIAux.createXMIOwnedComment(id, orid) +
            "\n</ownedRule>"
    }

    /**
     * Crea un Owned Literal
     * @param value Valor del literal
     * @returns {string}    XMI Owned Literal
     */
    static createOwnLit(value) {
        return "\n\t<ownedLiteral xmi:id=\"" + unid() + "\" name=\""
        + value + "\"/>";
    }

    /**
     * Crea una Generalization
     * @param id    XMI:ID
     * @param idgen ID General (Padre)
     * @param name Nombre de la generalización
     * @returns {string}    XMI Generalization
     */
    static createGen(id, idgen, name) {
        return "\n\t<generalization xmi:id=\"" + id + "\" general=\"" + idgen + "\" name=\"" + name + "\"/>";
    }

}
module.exports = XMIAux;