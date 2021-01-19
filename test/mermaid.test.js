const UMLGen = require('../src/visual/UMLGen.js');
const XMIRep = require('../src/repo/xmirepository.js');
const MermaidRep = require('../src/repo/mermaidrepository.js');
let um = new UMLGen();

describe('Pruebas de la representación de UML mediante Mermaid', () => {

    test('Atributos básicos', () => {
        let muml = um.generarCodigoMUML(XMIRep.getXMI2());
        expect(muml)
            .toEqual(MermaidRep.getMUML0());
    });

    test('ShapeRef', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI3());
        expect(muml)
            .toEqual(MermaidRep.getMUML1());
    });

    test('Herencia simple', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI5());
        expect(muml)
            .toEqual(MermaidRep.getMUML2());
    });

    test('Tipos de Nodo', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI7());
        expect(muml)
            .toEqual(MermaidRep.getMUML3());
		
    });

    test('Facetas de literales', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI9());
        expect(muml)
            .toEqual(MermaidRep.getMUML4());
    });

    test('Rangos y exclusiones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI10());
        expect(muml)
            .toEqual(MermaidRep.getMUML5());	
    });

    test('Conjuntos genéricos con exclusiones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI11());
        expect(muml)
            .toEqual(MermaidRep.getMUML6());
    });

    test('Etiquetas de lenguaje', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI13());
        expect(muml)
            .toEqual(MermaidRep.getMUML7());
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI14());
        expect(muml)
            .toEqual(MermaidRep.getMUML8());
    });

    test('Operador OneOf', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI15());
        expect(muml)
            .toEqual(MermaidRep.getMUML9());
		
    });

    test('Formas anidadas', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI16());
        expect(muml)
            .toEqual(MermaidRep.getMUML10());
    });

    test('Formas cerradas', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI17());
        expect(muml)
            .toEqual(MermaidRep.getMUML11());	
    });

    test('Restricción triple inversa', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI19());
        expect(muml)
            .toEqual(MermaidRep.getMUML12());
    });

    test('EXTRA', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI20());
        expect(muml)
            .toEqual(MermaidRep.getMUML13());	
    });

    test('Expresiones etiquetadas', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI21());
        expect(muml)
            .toEqual(MermaidRep.getMUML14());
    });

    test('Conjunciones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI22());
        expect(muml)
            .toEqual(MermaidRep.getMUML15());
    });

    test('Disyunciones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI23());
        expect(muml)
            .toEqual(MermaidRep.getMUML16());
    });
	
	test('Negaciones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI24());
        expect(muml)
            .toEqual(MermaidRep.getMUML17());
    });

    test('VP: Atributos básicos', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI2());
        expect(muml)
            .toEqual(MermaidRep.getMUML0());
    });

	//El XMI3VP está desactualizado
    //test('VP: ShapeRef', () => {
    //    let muml = um.generarCodigoMUML(XMIRep.getXMI3VP());
    //    expect(muml)
    //        .toEqual(MermaidRep.getMUML1());
    //});

	//El XMI5VP está desactualizado
    //test('VP: Herencia simple', () => {
    //    let muml = um.generarCodigoMUML(XMIRep.getXMI5VP());
    //    expect(muml)
    //        .toEqual(MermaidRep.getMUML2());
    //});

	//Hay que adecuar el XMI de VP para que no genere más de 1 blanco aquí
    //test('VP: Tipos de Nodo', () => {
    //    let muml = um.generarCodigoMUML(XMIRep.getXMI7VP());
    //    expect(muml)
    //        .toEqual(MermaidRep.getMUML3VP());
    //});

    test('VP: Facetas de literales', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI9VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML4());
    });

    test('VP: Rangos y exclusiones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI10VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML5());
    });

    test('VP: Conjuntos genéricos con exclusiones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI11VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML6());
    });

    test('VP: Etiquetas de lenguaje', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI13VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML7());	
    });

    test('VP: Cardinalidades aplicadas a conjuntos', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI14VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML8());
    });

    test('VP: Operador OneOf', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI15VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML9());
    });

    test('VP: Formas anidadas', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI16VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML10());
    });

	//Hay que adecuar el XMI de VP para que no genere más de 1 blanco aquí
    //test('VP: Formas cerradas', () => {
    //    let muml = um.generarCodigoMUML(XMIRep.getXMI17VP());
    //    expect(muml)
    //        .toEqual(MermaidRep.getMUML11VP());
    //});

    test('VP: Restricción triple inversa', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI19VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML12());
    });

    test('VP: EXTRA', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI20VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML13());
		
    });

    test('VP: Expresiones etiquetadas', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI21VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML14());
    });

    test('VP: Conjunciones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI22VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML15());
    });

    test('VP: Disyunciones', () => {
		um.clear();
        let muml = um.generarCodigoMUML(XMIRep.getXMI23VP());
        expect(muml)
            .toEqual(MermaidRep.getMUML16());
    });

});