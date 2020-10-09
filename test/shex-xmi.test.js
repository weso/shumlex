const shexparser = require('../src/shex_util/ShExParser.js');
const XMIRep = require('../src/repo/xmirepository.js');
const ShExRep = require('../src/repo/shexrepository.js');

/**
 * Comprueba que no se generen ID null
 * @param xmi
 * @returns {boolean}
 */
function checkId(xmi) {
    return !xmi.includes("xmi:id=\"null\"");
}

/**
 * Realiza las comprobaciones estándar para los test
 * @param shex
 * @param xmi
 */
function checkGen(shex, xmi) {
    let xml = shexparser.parseShExToXMI(shex);
    expect(checkId(xml)).toBe(true);
    expect(XMIRep.removeUniqueIDs(xml))
        .toEqual(XMIRep.removeUniqueIDs(xmi));
}

describe('Pruebas de la transformación ShEx-XMI', () => {

    test('Shape', () => {
        checkGen(ShExRep.getShex1(), XMIRep.getXMI1());
    });

    test('Atributos básicos', () => {
        checkGen(ShExRep.getShex2(), XMIRep.getXMI2());
    });

    test('ShapeRef', () => {
        checkGen(ShExRep.getShex3(), XMIRep.getXMI3());
    });

    test('Herencia simple', () => {
        checkGen(ShExRep.getShex5(), XMIRep.getXMI5());
    });

    test('Herencia múltiple', () => {
        checkGen(ShExRep.getShex6(), XMIRep.getXMI6());
    });

    test('Tipos de Nodo', () => {
        checkGen(ShExRep.getShex7(), XMIRep.getXMI7());
    });

    test('Facetas de literales', () => {
        checkGen(ShExRep.getShex9(), XMIRep.getXMI9());
    });

    test('Rangos y exclusiones', () => {
        checkGen(ShExRep.getShex10(), XMIRep.getXMI10());
    });

    test('Conjuntos genéricos con exclusiones', () => {
        checkGen(ShExRep.getShex11(), XMIRep.getXMI11());
    });

    test('Restricciones nodales como formas de máximo nivel', () => {
        checkGen(ShExRep.getShex12(), XMIRep.getXMI12());
    });

    test('Etiquetas de lenguaje', () => {
        checkGen(ShExRep.getShex13(), XMIRep.getXMI13());
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        checkGen(ShExRep.getShex14(), XMIRep.getXMI14());
    });

    test('Operador OneOf', () => {
        checkGen(ShExRep.getShex15(), XMIRep.getXMI15());
    });

    test('Formas anidadas', () => {
        checkGen(ShExRep.getShex16(), XMIRep.getXMI16());
    });

    test('Formas cerradas', () => {
        checkGen(ShExRep.getShex17(), XMIRep.getXMI17());
    });

    test('Propiedades repetidas', () => {
        checkGen(ShExRep.getShex18(), XMIRep.getXMI18());
    });

    test('Restricción triple inversa', () => {
        checkGen(ShExRep.getShex19(), XMIRep.getXMI19());
    });

    test('EXTRA', () => {
        checkGen(ShExRep.getShex20(), XMIRep.getXMI20());
    });

    test('Expresiones etiquetadas', () => {
        checkGen(ShExRep.getShex21(), XMIRep.getXMI21());
    });

    test('Conjunciones', () => {
        checkGen(ShExRep.getShex22(), XMIRep.getXMI22());
    });

    test('Disyunciones', () => {
        checkGen(ShExRep.getShex23(), XMIRep.getXMI23());
    });

});