const ShapeManager = require("../../managers/ShapeManager.js");
const IRIManager = require("../../managers/IRIManager");
const XMIClass = require("./XMIClass.js");
const XMIConstraints = require("./XMIConstraints.js");
const XMIEnumerations = require("./XMIEnumerations.js");
const XMIPrimitiveAttributes = require("./XMIPrimitiveAttributes.js");
const XMITypes = require("./XMITypes.js");
const XMIAux = require("./XMIAux.js");

/**
 * Clase aunadora y centralizadora de todos los elementos necesarios para generar XMI
 */
class XMIGenerator {

    constructor () {
        this.shm = new ShapeManager();
        this.irim = new IRIManager();

        this.xmienum = new XMIEnumerations(this.irim);
        this.xmicon = new XMIConstraints(this.irim, this.xmienum);	
        this.xmitype = new XMITypes(this.irim);
		this.xmicon.xmiprim = new XMIPrimitiveAttributes(this.xmitype, this.irim, this.xmicon);

        this.xmicl = new XMIClass(this.shm, this.xmitype, this.irim, this.xmicon, this.xmienum);

    }

    /**
     * Refiere a la creación del header XMI
     * @returns {string}    Header XMI
     */
    static createXMIHeader() {
        return XMIAux.createXMIHeader();
    }

    /**
     * Refiere a la creación de una clase XMI
     * @param name  Nombre de la clase
     * @param shape Shape a analizar
     * @returns {string|*}  Clase XMI
     */
    createXMIClass(name, shape) {
        return this.xmicl.createXMIClass(name, shape);
    }

    /**
     * Refiere a la creación de los prefijos en XMI
     * @param prefixes  Prefijos
     * @param base  Prefijo base
     * @returns {string}    Prefijos en XMI
     */
    createPrefixes (prefixes, base) {
        return this.irim.createXMIPrefixes(prefixes, base);
    }

    /**
     * Crea el final del XMI. Incluye enumeraciones, tipos y cierre.
     * @returns {string}    Footer XMI
     */
    createXMIFooter() {
        let base = "";
        base += this.xmitype.getAnyTypeXMI();

        base += this.xmienum.createXMIEnumerations();

        base += this.xmitype.getDatatypesXMI();

        base += this.xmitype.getNodeKindsXMI();

        base += XMIAux.closeXMI();

        return base;
    }

    /**
     * Comprueba si una shape es anónima e incrementa el correspondiente contador
     * @param shape Shape
     */
    checkAnon(shape) {
        if (/^_:[0-9]+$/.test(shape)) {
            this.shm.incrementBlank();
        }
    }

    /**
     * Guarda una shape
     * @param shape Shape
     */
    saveShape(shape) {
        this.shm.findShape(shape, false);
    }

    /**
     * Resetea todas las clases empleadas para la generación de XMI
     */
    clear() {
        this.shm.clearXMIShapes();
        this.xmicon.clear();
        this.xmienum.clear();
        this.irim.clear();
        this.xmitype.clear();
        this.xmicl.clear();
    }

}
module.exports = XMIGenerator;