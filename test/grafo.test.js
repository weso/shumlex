const GrafoGen = require('../src/visual/GrafoGen.js');
const ShExRep = require('../src/repo/shexrepository.js');
const GrafoRep = require('../src/repo/graforepository.js');
let gr = new GrafoGen();

describe('Pruebas de la representación de ShEx como grafo', () => {

    test('ShEx básico', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex0());
        let grafoObj = GrafoRep.getGrafo1();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }

    });

    test('Herencia simple', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex5());
        let grafoObj = GrafoRep.getGrafo2();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Tipos de Nodo', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex7());
        let grafoObj = GrafoRep.getGrafo3();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Facetas de literales', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex9());
        let grafoObj = GrafoRep.getGrafo4();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Rangos y exclusiones', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex10());
        let grafoObj = GrafoRep.getGrafo5();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex11());
        let grafoObj = GrafoRep.getGrafo6();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Etiquetas de lenguaje', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex13());
        let grafoObj = GrafoRep.getGrafo7();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex14());
        let grafoObj = GrafoRep.getGrafo8();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Operador OneOf', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex15());
        let grafoObj = GrafoRep.getGrafo9();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Formas anidadas', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex16());
        let grafoObj = GrafoRep.getGrafo10();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Formas cerradas', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex17());
        let grafoObj = GrafoRep.getGrafo11();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Restricción triple inversa', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex19());
        let grafoObj = GrafoRep.getGrafo12();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('EXTRA', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex20());
        let grafoObj = GrafoRep.getGrafo13();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Expresiones etiquetadas', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex21());
        let grafoObj = GrafoRep.getGrafo14();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Conjunciones', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex22());
        let grafoObj = GrafoRep.getGrafo15();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

    test('Disyunciones', () => {
        let grafo = gr.shExAGrafo(ShExRep.getShex23());
        let grafoObj = GrafoRep.getGrafo16();
        expect(grafo.length)
            .toEqual(grafoObj.length);
        for(let i= 0; i< grafo.length; i++) {
            expect(grafo[i].data.id)
                .toEqual(parseInt(grafoObj[i].data.id));
            expect(grafo[i].data.name)
                .toEqual(grafoObj[i].data.name);
            if(grafo[i].data.source) {
                expect(grafo[i].data.source)
                    .toEqual(parseInt(grafoObj[i].data.source));
            }
            if(grafo[i].data.target) {
                expect(grafo[i].data.target)
                    .toEqual(parseInt(grafoObj[i].data.target));
            }
        }
    });

});