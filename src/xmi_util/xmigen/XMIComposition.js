const XMIAux = require("./XMIAux.js");
/**
 * Genera componentes en XMI
 */
class XMIComposition {

    constructor (shm, irim, xmiasoc) {
        this.componentsCounter = 1;
        this.components = [];
        this.labels = new Map();
        this.xmiats = null;
        this.shm = shm;
        this.irim = irim;
        this.XMIAux = XMIAux;
        this.xmiasoc = xmiasoc;
    }

    /**
     * Genera componente dependientes en XMI.
     * @returns {string}    XMI de componentes
     */
    createDependentComponents() {
        let classXMI = "";
        for(let i = 0; i < this.components.length; i++) {
            let shape = this.shm.findShape(this.components[i].name);
            classXMI += this.XMIAux.createPackEl("uml:Class", shape.id, 'name="' + this.components[i].name + '"',
                this.xmiats.createXMIAttributes(this.components[i].expr, shape.name));
            classXMI += this.xmiasoc.createDependentAssociations(shape.id);
        }
        //Crear shapes pendientes de realización
        let pendingShapes = this.shm.getPendingShapes();
        for(let i = 0; i < pendingShapes.length; i++) {
            let ps = pendingShapes[i];
            classXMI += this.XMIAux.createPackEl("uml:Class", ps.id, 'name="' + this.irim.getPrefixedTermOfIRI(ps.name)+ '"',
                "");
        }
        this.shm.clearPendingShapes();
        this.components = [];
        return classXMI;
    }

    /**
     * Obtiene el número pertinente para un componente
     * @returns {string}    Nombre de la clase con número
     */
    getComponentNumber() {
            return "_Blank" + this.componentsCounter++;
    }

    /**
     * Guarda un componente en el registro
     * @param sub   componente
     */
    saveComponent(sub) {
        this.components.push(sub);
    }

    /**
     * Crea una subclase que contiene parte de la clase actual.
     * Esto puede ser necesario si hemos de asignar cardinalidad a un oonjunto de elementos,
     * o aplicar operaciones como OneOf.
     * @param asocName  Nombre de la asociación
     * @param subClassName  Nombre de la subclase
     * @param expr  Expresión
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @returns {*} Subclase XMI
     */
    createComponent(asocName, subClassName, expr, min, max) {
        let subClass = {
            name: subClassName,
            expr: expr
        };
        if(subClass.expr && subClass.expr.type !== "TripleConstraint") {
            subClass.expr.min = undefined;
            subClass.expr.max = undefined;
        }

        this.saveComponent(subClass);
        return this.xmiasoc.createXMICompAsocAttribute(asocName, subClassName, min, max);
    }

    /**
     * Guarda una referencia a expresión etiquetada
     * @param labelRef  Referencia
     * @param comp  Componente referenciado
     */
    saveLabel(labelRef, comp) {
        this.labels.set(labelRef, comp);
    }

    /**
     * Retorna un componente etiquetado según referencia
     * @param labelRef  Etiqueta
     * @returns {any}
     */
    getLabelled(labelRef) {
        return this.labels.get(labelRef);
    }

    /**
     * Resetea los registros
     */
    clear() {
        this.componentsCounter = 1;
        this.components = [];
        this.labels = new Map();
    }

}
module.exports = XMIComposition;