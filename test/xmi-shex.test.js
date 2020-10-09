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
        checkGen(XMIRep.getXMI5(), ShExRep.getGenShex5());
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
        checkGen(XMIRep.getXMI23(), ShExRep.getShex23());
    });

    test('VP: ShapeRef', () => {
        checkGen(XMIRep.getXMI3VP(), ShExRep.getShex3());
    });

    test('VP: Herencia simple', () => {
        checkGen(XMIRep.getXMI5VP(), ShExRep.getGenShex5());
    });

    test('VP: Tipos de Nodo', () => {
        checkGen(XMIRep.getXMI7VP(), ShExRep.getShex7());
    });

    test('VP: Facetas de literales', () => {
        checkGen(XMIRep.getXMI9VP(), ShExRep.getShex9());
    });

    test('VP: Rangos y exclusiones', () => {
        checkGen(XMIRep.getXMI10VP(), ShExRep.getShex10());
    });

    test('VP: Conjuntos genéricos con exclusiones', () => {
        checkGen(XMIRep.getXMI11VP(), ShExRep.getShex11());
    });

    test('VP: Etiquetas de lenguaje', () => {
        checkGen(XMIRep.getXMI13VP(), ShExRep.getShex13());
    });

    test('VP: Cardinalidades aplicadas a conjuntos', () => {
        checkGen(XMIRep.getXMI14VP(), ShExRep.getGenShex14());
    });

    test('VP: Operador OneOf', () => {
        checkGen(XMIRep.getXMI15VP(), ShExRep.getShex15());
    });

    test('VP: Formas anidadas', () => {
        checkGen(XMIRep.getXMI16VP(), ShExRep.getShex16());
    });

    test('VP: Formas cerradas', () => {
        checkGen(XMIRep.getXMI17VP(), ShExRep.getShex17());
    });

    test('VP: Restricción triple inversa', () => {
        checkGen(XMIRep.getXMI19VP(), ShExRep.getShex19());
    });

    test('VP: EXTRA', () => {
        checkGen(XMIRep.getXMI20VP(), ShExRep.getShex20());
    });

    test('VP: Expresiones etiquetadas', () => {
        checkGen(XMIRep.getXMI21VP(), ShExRep.getGenShex21());
    });

    test('VP: Conjunciones', () => {
        checkGen(XMIRep.getXMI22VP(), ShExRep.getShex22());
    });

    test('VP: Disyunciones', () => {
        checkGen(XMIRep.getXMI23VP(), ShExRep.getShex23());
    });

});