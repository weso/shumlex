const $ = require('jquery');
const es = require('./langrepo.js').es;
const en = require('./langrepo.js').en;

/**
 * Comprueba el idioma establecido en sesión. Por defecto, se toma español.
 * Llama a la función localizadora con el conjunto linguístico apropiado.
 */
function checkLang() {
    let lang = sessionStorage.getItem("lang");
    if(!lang) {
        console.log(es);
        lang = es;
        sessionStorage.setItem("lang", JSON.stringify(lang));
        localize(lang);
    }
    else {
        localize(JSON.parse(lang));
    }
}

/**
 * Localiza la aplicación web al idioma deseado.
 * @param lang  JSON con los recursos linguísticos necesarios.
 */
function localize(lang) {
    setContentByID("stx", lang.stx);
    setContentByID("xts", lang.xts);
    setContentByID("guml", lang.guml);
    setContentByID("ggr", lang.ggr);
    setContentByID("cej", lang.cej);
    setContentByID("shb", lang.shb);
    setContentByID("her", lang.her);
    setContentByID("rtn", lang.rtn);
    setContentByID("fct", lang.fct);
    setContentByID("rex", lang.rex);
    setContentByID("cgn", lang.cgn);
    setContentByID("etq", lang.etq);
    setContentByID("crd", lang.crd);
    setContentByID("one", lang.one);
    setContentByID("and", lang.and);
    setContentByID("cer", lang.cer);
    setContentByID("rti", lang.rti);
    setContentByID("ext", lang.ext);
    setContentByID("exe", lang.exe);
    setContentByID("cnj", lang.cnj);
    setContentByID("disy", lang.disy);
    setContentByID("cfg", lang.cfg);
    setContentByID("cambiarClaro", lang.cambiarClaro);
    setContentByID("cambiarOscuro", lang.cambiarOscuro);
    setContentByID("int", lang.int);
    setContentByID("p1", lang.p1);
    setContentByID("p2", lang.p2);
    setContentByID("mostrargrafo", lang.mostrargrafo);
    setTitleByID("borrarshex", lang.borrarshex);
    setContentByID("cargarShexXMI", lang.cargarShexXMI);
    setTitleByID("dwnshex-btn", lang["dwnshex-btn"]);
    setTitleByID("upshex-btn", lang["upshex-btn"]);
    setContentByID("shextoxmi", lang.shextoxmi);
    setTitleByID("isx", lang.isx);
    setTitleByID("ixs", lang.isx);
    setContentByID("xmitoshex", lang.xmitoshex);
    setContentByID("cargarGrafo", lang.cargarGrafo);
    setTitleByID("borrarxmi", lang.borrarxmi);
    setContentByID("cargarUML", lang.cargarUML);
    setTitleByID("dwnxmi-btn", lang["dwnxmi-btn"]);
    setTitleByID("upxmi-btn", lang["upxmi-btn"]);
    setContentByID("mostraruml", lang.mostraruml);
    setContentByID("cargarXMIShex", lang.cargarXMIShex);
    setContentByID("fullSize", lang.fullSize);

    setContentByClass("ggen", lang.ggen);
    setContentByClass("shxm", lang.shxm);
    setContentByClass("umlg", lang.umlg);
    setContentByClass("xmsh", lang.xmsh);
}

/**
 * Busca un elemento HTML por id y establece su contenido.
 * @param id    ID del elemento.
 * @param co    Contenido.
 */
function setContentByID(id, co) {
    if(document.getElementById(id)) {
        $("#"+id).html(co);
    }
}

/**
 * Busca un elemento HTML por id y establece su título.
 * @param id    ID del elemento.
 * @param co    Título.
 */
function setTitleByID(id, co) {
    if(document.getElementById(id)) {
        $("#"+id).attr("title", co);
    }
}

/**
 * Busca un elemento HTML por clase y establece su contenido.
 * @param id    ID del elemento.
 * @param co    Contenido
 */
function setContentByClass(id, co) {
    if(document.getElementsByClassName(id).length > 0) {
        $("."+id).text(co);
    }
}

/**
 * Busca un elemento HTML por clase y establece su título.
 * @param id    ID del elemento.
 * @param co    Título
 */
function setTitleByClass(id, co) {
    if(document.getElementsByClassName(id).length > 0) {
        $("."+id).attr("title", co);
    }
}

exports.checkLang = checkLang;
exports.en = en;
exports.es = es;