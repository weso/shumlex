const XMIAux = require("./XMIAux.js");
const unid = require("uniqid");
/**
 * Gestiona la cardinalidad de los elementos XMI
 */
class XMICardinality {

    constructor() {
        this.unid = unid;
        this.XMIAux = XMIAux;
    }

    /**
     * Crea cardinalidad en XMI
     * @param min   Valor cardinalidad mínima
     * @param max   Valor cardinalidad máxima
     * @returns {*} Cardinalidad XMI
     */
    createXMICardinality(min, max) {
        let minimum = min !== undefined ? min : 1;
        let maximum = max !== undefined ? max : 1;
        return this.getLowerCardinality(minimum) + this.getUpperCardinality(maximum);
    }

    /**
     * Crea la cardinalidad superior
     * @param cardinality   Valor cardinalidad máxima
     * @returns {*} Cardinalidad superior XMI
     */
    getUpperCardinality(cardinality) {
        if(cardinality === 1)
            return "";
        if(cardinality === -1)
            return this.XMIAux.getUpVal("*");
        return this.XMIAux.getUpVal(cardinality);
    }

    /**
     * Crea la cardinalidad inferior
     * @param cardinality   Valor cardinalidad mínima
     * @returns {*} Cardinalidad inferior XMI
     */
    getLowerCardinality(cardinality) {
        if(cardinality === 0)
            return this.XMIAux.getLowVal("Integer");
        else if(cardinality === 1)
            return "";
        return this.XMIAux.getLowVal("UnlimitedNatural", cardinality);
    }

}
module.exports = XMICardinality;