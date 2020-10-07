const idioma = require("../web/js/lang/alertloc.js");
const es = require('../web/js/lang/langrepo.js').es;
const en = require('../web/js/lang/langrepo.js').en;

describe('Pruebas de las alertas internacionalizadas', () => {

    test('Alertas ShEx', () => {
        expect(idioma.getLocalizedAlert("shexerror1"))
            .toEqual(es.shexerror1);
        expect(idioma.getLocalizedAlert("shexerror2"))
            .toEqual(es.shexerror2);
        sessionStorage.setItem("lang", JSON.stringify(en));
        expect(idioma.getLocalizedAlert("shexerror1"))
            .toEqual(en.shexerror1);
        expect(idioma.getLocalizedAlert("shexerror2"))
            .toEqual(en.shexerror2);
        sessionStorage.clear();
    });

    test('Alertas XMI', () => {
        expect(idioma.getLocalizedAlert("xmierror1"))
            .toEqual(es.xmierror1);
        expect(idioma.getLocalizedAlert("xmierror2"))
            .toEqual(es.xmierror2);
        sessionStorage.setItem("lang", JSON.stringify(en));
        expect(idioma.getLocalizedAlert("xmierror1"))
            .toEqual(en.xmierror1);
        expect(idioma.getLocalizedAlert("xmierror2"))
            .toEqual(en.xmierror2);
        sessionStorage.clear();
    });


});