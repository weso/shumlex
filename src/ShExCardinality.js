/**
 * Utilidades relativas a la cardinalidad para la generación de ShEx
 */
class ShExCardinality {

    /**
     * Devuelve la cardinalidad de un atributo XMI en formato Shex
     * @param attr  Atributo
     * @returns {string}    Cardinalidad
     */
    static cardinalityOf(attr) {
        let min = attr.min !== undefined ? attr.min : 1;
        let max = attr.max !== undefined ? attr.max : 1;
        let lowerValue = attr.lowerValue !== undefined ? ShExCardinality.checkCardinalityValue(attr.lowerValue) : min;
        let upperValue = attr.upperValue !== undefined ? ShExCardinality.checkCardinalityValue(attr.upperValue) : max;
        switch(lowerValue){
            case 1:
                if(upperValue === 1) {
                    return ""
                }
                else if (upperValue === Infinity || upperValue === -1) {
                    return " +"
                }
                else {
                    return " {1," + upperValue + "}"
                }
            case 0:
                if(upperValue === 1) {
                    return " ?"
                }
                else if (upperValue === Infinity || upperValue === -1) {
                    return " *"
                }
                else {
                    return " {0, " + upperValue + "}"
                }
            default:    //Mayor de 1
                if(upperValue === lowerValue) {
                    return " {" + lowerValue + "}"
                }
                else if (upperValue === Infinity || upperValue === -1) {
                    return " {" + lowerValue + ",}"
                }
                else {
                    return " {" + lowerValue + ", " + upperValue + "}"
                }
        }
    }

    /**
     * Devuelve el valor correspondiente a una cardinalidad expresada en XMI
     * @param attr  Atributo
     * @returns {number}
     */
    static checkCardinalityValue(attr) {
        //Si no se expresa nada, es 1
        if (!attr) {
            return 1
        }
        //LiteralInteger es 0
        else if (attr[0].$["xmi:type"] === "uml:LiteralInteger") {
            return 0
        }
        //UnlimitedNatural puede ser >1 o Infinito
        else {
            let value = attr[0].$.value;
            if(value === "*")
                return Infinity;
            return parseInt(value)
        }
    }

}
module.exports = ShExCardinality;