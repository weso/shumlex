const uniqid = require("uniqid");
const XMIAux = require("./XMIAux.js");
const IRIManager = require("../../managers/IRIManager");
/**
 * Genera restricciones XMI
 */
class XMIConstraints {

    constructor (irim, xmienum) {
        this.ownedRules = [];
        this.unid = uniqid;
        this.irim = irim;
        this.XMIAux = XMIAux;
        this.xmienum = xmienum;
        this.IRIManager = IRIManager;
    }

    createConstraint(name, id) {
        this.ownedRules.push(this.XMIAux.createXMIOwnedRule(name, id));
    }

    /**
     * Genera el XMI correspondiente a las restricciones pendientes en el estado actual
     * @returns {string}
     */
    createDependentOwnedRules(){
        let constraints = "";
        for(let i = 0; i < this.ownedRules.length; i++) {
            constraints += this.ownedRules[i];
        }
        this.clear();
        return constraints;
    }

    /**
     * Comprueba si existen facetas y genera las restricciones pertinentes
     * @param vex   ValueExpr
     * @param id    ID Shape
     * @param addon    Añadido a la faceta: OR...
     */
    checkFacets(vex, id, addon) {
        let add = addon !== undefined ? (addon + " ") : "";
        if(!vex) {
            return;
        }
        if(vex.mininclusive) {
            this.createConstraint(add + "MinInclusive " + vex.mininclusive, id);
        }
        if(vex.minexclusive) {
            this.createConstraint(add + "MinExclusive " + vex.minexclusive, id);
        }
        if(vex.totaldigits) {
            this.createConstraint("TotalDigits " + vex.totaldigits, id);
        }
        if(vex.fractiondigits) {
            this.createConstraint(add + "FractionDigits " + vex.fractiondigits, id);
        }
        if(vex.length) {
            this.createConstraint(add + "Length " + vex.length, id);
        }
        if(vex.minlength) {
            this.createConstraint(add + "MinLength " + vex.minlength, id);
        }
        if(vex.maxlength) {
            this.createConstraint(add + "MaxLength " + vex.maxlength, id);
        }
        if(vex.pattern) {
            this.createConstraint(add + "/" + vex.pattern + "/", id);
        }
    }

    /**
     * Introduce restricción "Cerrada"
     * @param id    ID Shape
     */
    markAsClosed(id) {
        this.createConstraint("CLOSED", id);
    }

    /**
     * Introduce restricción extra
     * @param id    ID Shape
     * @param values    Valores Extra
     * @param name  Nombre clase
     */
    markAsExtra(id, values, name) {
        let vals = [];
        for(let i = 0; i < values.length; i++) {
            let value = this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(values[i]));
            if(value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                vals.push("a");
            }
            else {
                vals.push(value);
            }
        }
        return this.xmienum.createXMIEnumAttribute("Extra", vals, undefined, undefined, undefined, name);
    }

    /**
     * Resetea los registros de restricciones
     */
    clear() {
        this.ownedRules = [];
    }

}
module.exports = XMIConstraints;