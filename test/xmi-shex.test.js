const xmiparser = require('../src/xmi_util/XMIParser.js');
const XMIRep = require('../src/repo/xmirepository.js');
const ShExRep = require('../src/repo/shexrepository.js');

/**
 * Realiza las comprobaciones estándar para los test
 * @param shex
 * @param xmi
 */
function checkGen(xmi, shex) {
    let gshex = xmiparser.parseXMIToShEx(xmi);
    expect(gshex)
        .toEqual(shex);
}

describe('Pruebas de la transformación XMI-ShEx', () => {

    test('Shape', () => {
        checkGen(XMIRep.getXMI1(), ShExRep.getShex1());
    });

    test('Atributos básicos', () => {
        checkGen(XMIRep.getXMI2(), ShExRep.getShex2());
    });

    test('ShapeRef', () => {
        checkGen(XMIRep.getXMI3(), ShExRep.getShex3());
    });

    test('Herencia simple', () => {
        checkGen(XMIRep.getXMI5(), ShExRep.getShex5());
    });

    test('Herencia múltiple', () => {
        checkGen(XMIRep.getXMI6(), ShExRep.getGenShex6());
    });

    test('Tipos de Nodo', () => {
        checkGen(XMIRep.getXMI7(), ShExRep.getShex7());
    });

    test('Facetas de literales', () => {
        checkGen(XMIRep.getXMI9(), ShExRep.getShex9());
    });

    test('Rangos y exclusiones', () => {
        checkGen(XMIRep.getXMI10(), ShExRep.getShex10());
    });

    test('Conjuntos genéricos con exclusiones', () => {
        checkGen(XMIRep.getXMI11(), ShExRep.getShex11());
    });

    test('Restricciones nodales como formas de máximo nivel II', () => {
        checkGen(XMIRep.getXMI12(), ShExRep.getShex12());
    });

    test('Etiquetas de lenguaje', () => {
        checkGen(XMIRep.getXMI13(), ShExRep.getShex13());
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        checkGen(XMIRep.getXMI14(), ShExRep.getShex14());
    });

    test('Operador OneOf', () => {
        checkGen(XMIRep.getXMI15(), ShExRep.getShex15());
    });

    test('Formas anidadas', () => {
        checkGen(XMIRep.getXMI16(), ShExRep.getShex16());
    });

    test('Formas cerradas', () => {
        checkGen(XMIRep.getXMI17(), ShExRep.getShex17());
    });

    test('Propiedades repetidas', () => {
        checkGen(XMIRep.getXMI18(), ShExRep.getShex18());
    });

    test('Restricción triple inversa', () => {
        checkGen(XMIRep.getXMI19(), ShExRep.getShex19());
    });

    test('EXTRA', () => {
        checkGen(XMIRep.getXMI20(), ShExRep.getShex20());
    });

    test('Expresiones etiquetadas', () => {
        checkGen(XMIRep.getXMI21(), ShExRep.getShex21());
    });

    test('Conjunciones', () => {
        checkGen(XMIRep.getXMI22(), ShExRep.getShex22());
    });

    test('Disyunciones', () => {
        checkGen(XMIRep.getXMI23(), ShExRep.getGenShex23());
    });
	
	test('Negaciones', () => {
        checkGen(XMIRep.getXMI24(), ShExRep.getShex24());
    });
	
	test('Suzaku', () => {
        checkGen(XMIRep.getXMI25(), ShExRep.getGenShex25());
    });

});