const uniqid = require("uniqid");
/**
 * Gestor de shapes.
 */
class ShapeManager {

    constructor () {
        this.XMIshapes = [];            //Shapes almacenadas para la generación de XMI
        this.ShExshapes = new Map();    //Shapes almacenadas para la generación de ShEx
        this.subSet = new Map();        //Subconjuntos
        this.pendingXMIShapes = [];        //Shapes pendientes (generación futura)
        this.unid = uniqid;
        this.blankCounter = 0;          //Contador de nodos anónimos
        this.pendingShExShapes = new Map();

    }

    /**
     * Dado un nombre de Shape, la devuelve si existe.
     * Para las shapes almacenadas de cara a generar XMI.
     * @param name  Nombre de la Shape
     * @param pending  Indica si debe marcarse como pendiente, en caso de que no existe
     * @returns {*}
     */
    findShape(name, pending) {
        for(let i = 0; i < this.XMIshapes.length; i++) {
            if(name === this.XMIshapes[i].name) {
                return this.XMIshapes[i];
            }
        }

        //Si no existe, la guarda
        let shape = {id: this.unid(), name: name};
        this.XMIshapes.push(shape);

        //Marcar como pendiente
        if(pending) {
            this.pendingXMIShapes.push(shape);
        }
        return shape;
    }

    /**
     * Incrementa el contador de nodos anónimos
     */
    incrementBlank() {
        this.blankCounter++;
    }

    /**
     * Devuelve el nodo anónimo actual
     * @returns {number}
     */
    getCurrentBlank() {
        return this.blankCounter;
    }

    /**
     * Devuelve el listado de Shapes pendientes
     * @returns {Array}
     */
    getPendingShapes() {
        return this.pendingXMIShapes;
    }

    /**
     * Limpia el listado de Shapes pendientes
     */
    clearPendingShapes() {
        this.pendingXMIShapes = [];
    }

    /**
     * Limpia aquellos listados relativos a la generación de XMI
     */
    clearXMIShapes() {
        this.XMIshapes = [];
        this.pendingXMIShapes = [];
        this.blankCounter = 0;
    }

    /**
     * Guarda una Shape
     * Si está marcada como componente, se introduce en el listado de componentes
     * En caso contrario, se guarda en el listado de shapes para ShEx
     * @param element   Shape a guardar (formato XMI)
     */
    saveShape(element) {
        if(/^_Blank[0-9]+(_[0-9]+)*$/.test(element.$.name)) {
            this.subSet.set(element.$["xmi:id"], {
                attributes: element.ownedAttribute,
                name: element.$.name,
                gen: element.generalization
            });
        }
        else if (/^_:[0-9]+$/.test(element.$.name)) {
            this.subSet.set(element.$["xmi:id"], {
                attributes: element.ownedAttribute,
                name: element.$.name,
                gen: element.generalization
            });
            this.pendingShExShapes.set(element.$["xmi:id"], element);
        }
        else {
            this.saveInShExShapes(element.$["xmi:id"], element.$.name);
        }
    }

    saveInShExShapes(id, name) {
        this.ShExshapes.set(id, {
            name: name
        });
    }

    deletePendingShExShape(id) {
        this.pendingShExShapes.delete(id);
    }

    getPendingShExShapes() {
        return this.pendingShExShapes;
    }

    /**
     * Devuelve una shape del listado ShEx, dado el ID de la misma
     * @param id
     * @returns {any}
     */
    getShape(id) {
        return this.ShExshapes.get(id);
    }

    /**
     * Devuelve una shape subconjunto, dado su nombre
     * @param name
     * @returns {any}
     */
    getSubSet(name) {
        return this.subSet.get(name);
    }

    /**
     * Resetea los subconjuntos
     */
    clearSubSet() {
        this.subSet = new Map();
    }

    clearPendingShExShapes() {
        this.pendingShExShapes = new Map();
    }

    /**
     * Resetea las estructuras de datos empleadas para la generación de ShEx
     */
    clearShExShapes() {
        this.ShExshapes = new Map();
        this.clearSubSet();
    }

    clear() {
        this.clearShExShapes();
        this.clearPendingShExShapes();
        this.clearXMIShapes();
    }


}
module.exports = ShapeManager;