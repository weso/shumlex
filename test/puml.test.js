const UMLGen = require('../src/visual/UMLGen.js');
const XMIRep = require('../src/repo/xmirepository.js');
const PUMLRep = require('../src/repo/pumlrepository.js');
let um = new UMLGen();

describe('Pruebas de la representación de UML como diagrama PlantUML', () => {

    test('Atributos básicos', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI2());
        expect(puml)
            .toEqual(PUMLRep.getPUML0());
    });

    test('ShapeRef', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI3());
        expect(puml)
            .toEqual(PUMLRep.getPUML1());
    });

    test('Herencia simple', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI5());
        expect(puml)
            .toEqual(PUMLRep.getPUML2());
    });

    test('Tipos de Nodo', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI7());
        expect(puml)
            .toEqual(PUMLRep.getPUML3());
    });

    test('Facetas de literales', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI9());
        expect(puml)
            .toEqual(PUMLRep.getPUML4());
    });

    test('Rangos y exclusiones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI10());
        expect(puml)
            .toEqual(PUMLRep.getPUML5());
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI11());
        expect(puml)
            .toEqual(PUMLRep.getPUML6());
    });

    test('Etiquetas de lenguaje', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI13());
        expect(puml)
            .toEqual(PUMLRep.getPUML7());
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI14());
        expect(puml)
            .toEqual(PUMLRep.getPUML8());
    });

    test('Operador OneOf', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI15());
        expect(puml)
            .toEqual(PUMLRep.getPUML9());
    });

    test('Formas anidadas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI16());
        expect(puml)
            .toEqual(PUMLRep.getPUML10());
    });

    test('Formas cerradas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI17());
        expect(puml)
            .toEqual(PUMLRep.getPUML11());
    });

    test('Restricción triple inversa', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI19());
        expect(puml)
            .toEqual(PUMLRep.getPUML12());
    });

    test('EXTRA', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI20());
        expect(puml)
            .toEqual(PUMLRep.getPUML13());
    });

    test('Expresiones etiquetadas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI21());
        expect(puml)
            .toEqual(PUMLRep.getPUML14());
    });

    test('Conjunciones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI22());
        expect(puml)
            .toEqual(PUMLRep.getPUML15());
    });

    test('Disyunciones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI23());
        expect(puml)
            .toEqual(PUMLRep.getPUML16());
    });

    test('VP: Atributos básicos', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI2());
        expect(puml)
            .toEqual(PUMLRep.getPUML0());
    });

    test('VP: ShapeRef', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI3VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML1());
    });

    test('VP: Herencia simple', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI5VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML2());
    });

    test('VP: Tipos de Nodo', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI7VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML3VP());
    });

    test('VP: Facetas de literales', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI9VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML4());
    });

    test('VP: Rangos y exclusiones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI10VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML5());
    });

    test('VP: Conjuntos genéricos con exclusiones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI11VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML6());
    });

    test('VP: Etiquetas de lenguaje', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI13VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML7());
    });

    test('VP: Cardinalidades aplicadas a conjuntos', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI14VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML8VP());
    });

    test('VP: Operador OneOf', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI15VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML9());
    });

    test('VP: Formas anidadas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI16VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML10());
    });

    test('VP: Formas cerradas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI17VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML11VP());
    });

    test('VP: Restricción triple inversa', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI19VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML12());
    });

    test('VP: EXTRA', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI20VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML13VP());
    });

    test('VP: Expresiones etiquetadas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI21VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML14VP());
    });

    test('VP: Conjunciones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI22VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML15());
    });

    test('VP: Disyunciones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI23VP());
        expect(puml)
            .toEqual(PUMLRep.getPUML16());
    });

});