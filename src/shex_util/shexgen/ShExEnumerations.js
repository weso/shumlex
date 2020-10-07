const IRIManager = require ("../../managers/IRIManager.js");
/**
 * Genera el equivalente en ShEx a una enumeración UML
 */
class ShExEnumerations {

    constructor () {
        this.enumerations = new Map();
    }

    /**
     * Registra una enumeración con clave id, guardando nombre y valores
     * @param enm   Enumeración
     */
    saveEnum(enm) {
        this.enumerations.set(enm.$["xmi:id"], {
            name: enm.$.name,
            values: enm.ownedLiteral
        });
    }

    /**
     * Recupera la enumeración, dado el ID de referencia
     * @param id    ID
     * @returns {any}   JSON con nombre y valores { name: , values: }
     */
    getEnum(id) {
        return this.enumerations.get(id);
    }

    /**
     * Genera el equivalente en ShEx de una enumeración UML
     * @param enumer    Enumeración
     * @returns {string}    Conjunto de valores en formato [ ... ]
     */
    enumerationToShEx(enumer) {
        let base = "[";
        for(let i = 0; i < enumer.values.length; i++) {
            base += IRIManager.getShexTerm(enumer.values[i].$.name) + " ";
        }
        return base + "]";
    }

    /**
     * Resetea el registro de enumeraciones
     */
    clear() {
        this.enumerations = new Map();
    }

}
module.exports = ShExEnumerations;