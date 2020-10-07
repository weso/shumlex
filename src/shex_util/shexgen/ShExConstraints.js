/**
 * Se genera el equivalente ShEx a restricciones UML
 */
class ShExConstraints {

    constructor () {
        this.constraints = new Map();
    }

    /**
     * Guarda una restricción si no existe, o añade a la ya existente
     * @param cst   Restricción
     */
    saveConstraint(cst) {
        let idInComment = null;
        let consElement = cst.$.constrainedElement;
        //Si hay comentario, buscamos el ID que guardamos
        if(cst.ownedComment) {
            idInComment = cst.ownedComment[0].body[0];
        }
        //Si el id guardado en comentario es distinto del que se señala en constrained,
        //Es un error de exportación. Tomamos el del comentario.
        if(idInComment && idInComment !== consElement) {
            consElement = idInComment;
        }
        if(this.constraints.get(consElement) === undefined) {
            this.constraints.set(consElement, cst.$.name);
        }
        else {
            let op = cst.$.name.toLowerCase().includes("or ") ? " " : " AND ";
            this.constraints.set(consElement, this.constraints.get(consElement) + op
                + cst.$.name);
        }

    }

    /**
     * Devuelve una restricción por el ID del elemento restringido
     * @param element    Elemento restringido
     * @returns {string}    Restricción o vacío
     */
    getConstraints(element) {
        let cst = this.constraints.get(element.$["xmi:id"]);
        return cst === undefined ? "" : (" " + cst);
    }

    /**
     * Resetea las restricciones almacenadas
     */
    clear() {
        this.constraints = new Map();
    }

}
module.exports = ShExConstraints;