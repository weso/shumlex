const $ = require('jquery');

const shexparser = require('../../src/shex_util/ShExParser.js');
const xmiparser = require('../../src/xmi_util/XMIParser.js');

const repo = require('../../src/repo/shexrepository.js');

const grafo = require('./GrafoController.js');
const uml = require('./UMLController.js');
const lang = require('./lang/webloc.js');

let shExEditor;
let xmiEditor;

/**
 * Comprueba la existencia de parámetros en la URL y actúa en consecuencia.
 * Concretamente, permite cargar diversos ejemplos en el editor, o el último código generado por el usuario.
 */
$(document).ready(function() {
    let ref = window.location.href;
    if(ref.includes("?basic")) {
        shExEditor.setValue(repo.getShex0());
    }
    else if(ref.includes("?herencia")) {
        shExEditor.setValue(repo.getShex5());
    }
    else if(ref.includes("?resnod")) {
        shExEditor.setValue(repo.getShex7());
    }
    else if(ref.includes("?facetas")) {
        shExEditor.setValue(repo.getShex9());
    }
    else if(ref.includes("?rexcl")) {
        shExEditor.setValue(repo.getShex10());
    }
    else if(ref.includes("?cgen")) {
        shExEditor.setValue(repo.getShex11());
    }
    else if(ref.includes("?leng")) {
        shExEditor.setValue(repo.getShex13());
    }
    else if(ref.includes("?card")) {
        shExEditor.setValue(repo.getShex14());
    }
    else if(ref.includes("?oneof")) {
        shExEditor.setValue(repo.getShex15());
    }
    else if(ref.includes("?anid")) {
        shExEditor.setValue(repo.getShex16());
    }
    else if(ref.includes("?closed")) {
        shExEditor.setValue(repo.getShex17());
    }
    else if(ref.includes("?rti")) {
        shExEditor.setValue(repo.getShex19());
    }
    else if(ref.includes("?extra")) {
        shExEditor.setValue(repo.getShex20());
    }
    else if(ref.includes("?etiq")) {
        shExEditor.setValue(repo.getShex21());
    }
    else if(ref.includes("?conj")) {
        shExEditor.setValue(repo.getShex22());
    }
    else if(ref.includes("?disy")) {
        shExEditor.setValue(repo.getShex23());
    }
    else if(ref.includes("?load")) {
        let shv = sessionStorage.getItem("shexvalue");
        let xmv = sessionStorage.getItem("xmivalue");
        if(shv && shExEditor) {
            shExEditor.setValue(sessionStorage.getItem("shexvalue"));
        }
        if(xmv && xmiEditor) {
            xmiEditor.setValue(sessionStorage.getItem("xmivalue"));
        }

    }
    lang.checkLang();
});

//Almacenamos el valor de "tema" almacenado en sesión
let theme = sessionStorage.getItem("theme");

/**
 * Creamos el editor de ShEx
 */
if(document.getElementById("shextext") !== null) {
    shExEditor = CodeMirror.fromTextArea(document.getElementById("shextext"), {
        mode: "shex",
        lineNumbers: true
    });
    let theme = sessionStorage.getItem("theme");
    //Si el tema no se ha indicado, por defecto toma el oscuro
    shExEditor.setOption("theme", theme === null ? "ayu-mirage" : theme);
}

/**
 * Creamos el editor de XMI (XML)
 */
if(document.getElementById("xmitext") !== null) {
    xmiEditor = CodeMirror.fromTextArea(document.getElementById("xmitext"), {
        mode: "xml",
        lineNumbers: true
    });
    xmiEditor.setOption("theme", theme === null ? "ayu-mirage" : theme);
}

let xmtsh = $('#xmitoshex');
let shxtx = $('#shextoxmi');

shxtx.click(shExToXMI);
xmtsh.click(XMIToShEx);
shxtx.keypress(function (e) {
    if(e.which === 13)
    {
        shxtx.click();
    }
});
xmtsh.keypress(function (e) {
    if(e.which === 13)
    {
        xmtsh.click();
    }
});

/**
 * Toma el valor del editor de ShEx y genera el XMI correspondiente.
 * Establece el valor del editor de XMI con el generado.
 */
function shExToXMI() {
	let text = shExEditor.getValue();

    let parsedToXML = shexparser.parseShExToXMI(text);
    xmiEditor.setValue(parsedToXML);
}

/**
 * Toma el valor del editor de XMI y genera el ShEx correspondiente.
 * Establece el valor del editor de ShEx con el generado.
 */
function XMIToShEx() {
    let text = xmiEditor.getValue();
    shExEditor.setValue(xmiparser.parseXMIToShEx(text));
}
let borrarshex = $('#borrarshex');
borrarshex.click(borrarShex);
borrarshex.keypress(function (e) {
    if(e.which === 13)
    {
        borrarshex.click();
    }
});

/**
 * Borrar el contenido del editor de ShEx
 */
function borrarShex() {
    shExEditor.setValue("");
}
let borrarxmi = $('#borrarxmi');
borrarxmi.click(borrarXMI);
borrarxmi.keypress(function (e) {
    if(e.which === 13)
    {
        borrarxmi.click();
    }
});

/**
 * Borrar el contenido del editor de XMI
 */
function borrarXMI() {
    xmiEditor.setValue("");
}

let insx = $('#isx');
let inxs = $('#ixs');
insx.click(intercambiarsx);
inxs.click(intercambiarxs);
insx.keypress(function (e) {
    if(e.which === 13)
    {
        insx.click();
    }
});

inxs.keypress(function (e) {
    if(e.which === 13)
    {
        inxs.click();
    }
});

/**
 * Partiendo de la ventana de generación de XMI, nos traslada a la generación de ShEx.
 * Manteniendo los valores contenidos en ambos editores.
 */
function intercambiarsx() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./xmitoshex.html?load";
}

/**
 * Partiendo de la ventana de generación de ShEx, nos traslada a la generación de XMI.
 * Manteniendo los valores contenidos en ambos editores.
 */
function intercambiarxs() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./shextoxmi.html?load";
}

let cc = $('#cambiarClaro');
let co = $('#cambiarOscuro');
cc.click(cambiarTemaClaro);
co.click(cambiarTemaOscuro);
cc.keypress(function (e) {
    if(e.which === 13)
    {
        cc.click();
    }
});
co.keypress(function (e) {
    if(e.which === 13)
    {
        co.click();
    }
});

/**
 * Cambia el tema de los editores a oscuro
 */
function cambiarTemaOscuro() {
    if(shExEditor) {
        shExEditor.setOption("theme", "ayu-mirage");
    }
    if(xmiEditor) {
        xmiEditor.setOption("theme", "ayu-mirage");
    }
    sessionStorage.setItem("theme", "ayu-mirage");
}

/**
 * Cambia el tema de los editores a claro
 */
function cambiarTemaClaro() {
    if(shExEditor) {
        shExEditor.setOption("theme", "xq-light");
    }
    if(xmiEditor) {
        xmiEditor.setOption("theme",  "xq-light");
    }
    sessionStorage.setItem("theme", "xq-light")
}

let cShexXMI = $('#cargarShexXMI');
let cXMIShex = $('#cargarXMIShex');
cShexXMI.click(cargarShexXMI);
cXMIShex.click(cargarXMIShex);
cShexXMI.keypress(function (e) {
    if(e.which === 13)
    {
        cShexXMI.click();
    }
});
cXMIShex.keypress(function (e) {
    if(e.which === 13)
    {
        cXMIShex.click();
    }
});


/**
 * Guarda en sesión el contenido de los editores y carga el generador de XMI con el contenido actual
 */
function cargarShexXMI() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", "");
    window.location = "./shextoxmi.html?load";
}

/**
 * Guarda en sesión el contenido de los editores y carga el generador de ShEx con el contenido actual
 */
function cargarXMIShex() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    sessionStorage.setItem("shexvalue", "");
    window.location = "./xmitoshex.html?load";
}

/// GRAFO ///
let cGrafo = $('#cargarGrafo');
cGrafo.click(cargarGrafo);
cGrafo.keypress(function (e) {
    if(e.which === 13)
    {
        cGrafo.click();
    }
});

/**
 * Carga la página de generación de grafo con el valor del editor de ShEx
 */
function cargarGrafo() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    window.location = "./grafo.html?load";
}

let msgr = $('#mostrargrafo');
/**
 * Genera el grafo a partir del contenido del editor de ShEx
 */
msgr.click(function() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    grafo.generarGrafo(shExEditor.getValue());
});

/// UML ///
let cUML = $('#cargarUML');
cUML.click(cargarUML);
cUML.keypress(function (e) {
    if(e.which === 13)
    {
        cUML.click();
    }
});

/**
 * Carga la página de generación de UML con el valor del editor de XMI
 */
function cargarUML() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./uml.html?load";
}

let msum = $('#mostraruml');
/**
 * Genera el UML a partir del contenido del editor de XMI
 */
msum.click(function() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    uml.generarUML(xmiEditor.getValue());
});

//DESCARGA

/**
 * Genera un archivo dado un texto y lo descarga
 * @param filename  Nombre del archivo
 * @param text  Contenido
 */
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

/**
 * Descarga el contenido del editor de ShEX.
 */
if(document.getElementById("dwnshex-btn")) {
    document.getElementById("dwnshex-btn").addEventListener("click", function(){
        let text = shExEditor.getValue();
        let filename = "shumlex.shex";

        download(filename, text);
    }, false);
}

let dwnshexbtn = $('#dwnshex-btn');

/**
 * Descarga el contenido del editor de XMI.
 */
if(document.getElementById("dwnxmi-btn")) {
    document.getElementById("dwnxmi-btn").addEventListener("click", function(){
        let text = xmiEditor.getValue();
        let filename = "shumlex.xmi";

        download(filename, text);
    }, false);
}

let dwnxmibtn = $('#dwnxmi-btn');

//Carga

window.onload = function() {
    let shexInput = document.getElementById('shexInput');
	let xmiInput = document.getElementById('xmiInput');

	if(shexInput) {
		shexInput.addEventListener('change', function(e) {
			console.log('Oi');
			let file = shexInput.files[0];
			var regex = /^(.)+(.shex)$/;

			if (regex.test(file.name)) {
				console.log(file.name);
				let reader = new FileReader();

				reader.onload = function(e) {
					shExEditor.setValue(reader.result);
				}
				reader.readAsText(file)

			} else {
				alert("Por favor, cargue un archivo .shex válido.");
			}
		});
	}
	
	if(xmiInput) {
		xmiInput.addEventListener('change', function(e) {
			let file = xmiInput.files[0];
			var regex = /^(.)+(.xmi)$/;

			if (regex.test(file.name)) {
				let reader = new FileReader();

				reader.onload = function(e) {
					xmiEditor.setValue(reader.result);
				}
				reader.readAsText(file)

			} else {
				alert("Por favor, cargue un archivo .xmi válido.");
			}
		});
	}
}


//IDIOMA
let uk = $('#uk');
uk.click(cambiarIngles);
uk.keypress(function (e) {
    if(e.which === 13)
    {
        uk.click();
    }
});

let es = $('#es');
es.click(cambiarEsp);
es.keypress(function (e) {
    if(e.which === 13)
    {
        es.click();
    }
});

/**
 * Cambia el idioma de la página a inglés
 */
function cambiarIngles() {
    sessionStorage.setItem("lang", JSON.stringify(lang.en));
    lang.checkLang();
}

/**
 * Cambia el idioma de la página a español
 */
function cambiarEsp() {
    sessionStorage.setItem("lang", JSON.stringify(lang.es));
    lang.checkLang();
}

//HOME

let shlogo = $('#shlogo');
shlogo.click(home);
//Enter
shlogo.keypress(function (e) {
    if(e.which === 13)
    {
        shlogo.click();
    }
});

/**
 * Nos devuelve a la página inicial
 */
function home() {
    window.location = "../../index.html";
}

// Navegación por teclado

let snb = $('.subnavbtn');

snb.focus(function() {
    $('.dropdown-content').css("display", "none");
    $('.subnav-content').css("display", "block");
    snb.css("background-color", "darkred");
    snb.css("color", "white");
});

snb.focusout(function() {
    snb.css("background-color", "#333");
    snb.css("color", "white");
});

let dpb = $('.dropbtn');

dpb.focus(function() {
    $('.subnav-content').css("display", "none");
    $('.dropdown-content').css("display", "block");
    dpb.css("background-color", "darkred");
    dpb.css("color", "white");
});

dpb.focusout(function() {
    dpb.css("background-color", "#333");
    dpb.css("color", "white");
});

es.focus(function() {
    $('.dropdown-content').css("display", "none");
    es.css("background-color", "darkred");
    es.css("color", "white");
});

let shb = $('#shb');

shb.focus(function() {
    shb.css("background-color", "darkred");
    shb.css("color", "white");
});

shb.focusout(function() {
    shb.css("background-color", "#ddd");
    shb.css("color", "black");
});

let her = $('#her');

her.focus(function() {
    her.css("background-color", "darkred");
    her.css("color", "white");
});

her.focusout(function() {
    her.css("background-color", "#ddd");
    her.css("color", "black");
});

let rtn = $('#rtn');

rtn.focus(function() {
    rtn.css("background-color", "darkred");
    rtn.css("color", "white");
});

rtn.focusout(function() {
    rtn.css("background-color", "#ddd");
    rtn.css("color", "black");
});

let fct = $('#fct');

fct.focus(function() {
    fct.css("background-color", "darkred");
    fct.css("color", "white");
});

fct.focusout(function() {
    fct.css("background-color", "#ddd");
    fct.css("color", "black");
});

let rex = $('#rex');

rex.focus(function() {
    rex.css("background-color", "darkred");
    rex.css("color", "white");
});

rex.focusout(function() {
    rex.css("background-color", "#ddd");
    rex.css("color", "black");
});

let cgn = $('#cgn');

cgn.focus(function() {
    cgn.css("background-color", "darkred");
    cgn.css("color", "white");
});

cgn.focusout(function() {
    cgn.css("background-color", "#ddd");
    cgn.css("color", "black");
});

let etq = $('#etq');

etq.focus(function() {
    etq.css("background-color", "darkred");
    etq.css("color", "white");
});

etq.focusout(function() {
    etq.css("background-color", "#ddd");
    etq.css("color", "black");
});

let crd = $('#crd');

crd.focus(function() {
    crd.css("background-color", "darkred");
    crd.css("color", "white");
});

crd.focusout(function() {
    crd.css("background-color", "#ddd");
    crd.css("color", "black");
});

let one = $('#one');

one.focus(function() {
    one.css("background-color", "darkred");
    one.css("color", "white");
});

one.focusout(function() {
    one.css("background-color", "#ddd");
    one.css("color", "black");
});

let and = $('#and');

and.focus(function() {
    and.css("background-color", "darkred");
    and.css("color", "white");
});

and.focusout(function() {
    and.css("background-color", "#ddd");
    and.css("color", "black");
});

let cer = $('#cer');

cer.focus(function() {
    cer.css("background-color", "darkred");
    cer.css("color", "white");
});

cer.focusout(function() {
    cer.css("background-color", "#ddd");
    cer.css("color", "black");
});

let rti = $('#rti');

rti.focus(function() {
    rti.css("background-color", "darkred");
    rti.css("color", "white");
});

rti.focusout(function() {
    rti.css("background-color", "#ddd");
    rti.css("color", "black");
});

let ext = $('#ext');

ext.focus(function() {
    ext.css("background-color", "darkred");
    ext.css("color", "white");
});

ext.focusout(function() {
    ext.css("background-color", "#ddd");
    ext.css("color", "black");
});

let exe = $('#exe');

exe.focus(function() {
    exe.css("background-color", "darkred");
    exe.css("color", "white");
});

exe.focusout(function() {
    exe.css("background-color", "#ddd");
    exe.css("color", "black");
});

let cnj = $('#cnj');

cnj.focus(function() {
    cnj.css("background-color", "darkred");
    cnj.css("color", "white");
});

cnj.focusout(function() {
    cnj.css("background-color", "#ddd");
    cnj.css("color", "black");
});

let disy = $('#disy');

disy.focus(function() {
    disy.css("background-color", "darkred");
    disy.css("color", "white");
});

disy.focusout(function() {
    disy.css("background-color", "#ddd");
    disy.css("color", "black");
});



cc.focus(function() {
    cc.css("background-color", "darkred");
    cc.css("color", "white");
});

cc.focusout(function() {
    cc.css("background-color", "#ddd");
    cc.css("color", "black");
});

co.focus(function() {
    co.css("background-color", "darkred");
    co.css("color", "white");
});

co.focusout(function() {
    co.css("background-color", "#ddd");
    co.css("color", "black");
});


let stx = $('#stx');

stx.focus(function() {
    stx.css("background-color", "darkred");
    stx.css("color", "white");
});

stx.focusout(function() {
    stx.css("background-color", "#333");
    stx.css("color", "white");
});

let xts = $('#xts');

xts.focus(function() {
    xts.css("background-color", "darkred");
    xts.css("color", "white");
});

xts.focusout(function() {
    xts.css("background-color", "#333");
    xts.css("color", "white");
});

let guml = $('#guml');

guml.focus(function() {
    guml.css("background-color", "darkred");
    guml.css("color", "white");
});

guml.focusout(function() {
    guml.css("background-color", "#333");
    guml.css("color", "white");
});

let ggr = $('#ggr');

ggr.focus(function() {
    $('.subnav-content').css("display", "none");
    ggr.css("background-color", "darkred");
    ggr.css("color", "white");
});

ggr.focusout(function() {
    ggr.css("background-color", "#333");
    ggr.css("color", "white");
});

es.focusout(function() {
    es.css("background-color", "#333");
    es.css("color", "white");
});

uk.focus(function() {
    uk.css("background-color", "darkred");
    uk.css("color", "white");
});

uk.focusout(function() {
    uk.css("background-color", "#333");
    uk.css("color", "white");
});

shxtx.focus(function() {
    shxtx.css("background-color", "darkred");
    shxtx.css("color", "white");
});

shxtx.focusout(function() {
    shxtx.css("background-color", "#333");
    shxtx.css("color", "white");
});



xmtsh.focus(function() {
    xmtsh.css("background-color", "darkred");
    xmtsh.css("color", "white");
});

xmtsh.focusout(function() {
    xmtsh.css("background-color", "#333");
    xmtsh.css("color", "white");
});



msgr.focus(function() {
    msgr.css("background-color", "darkred");
    msgr.css("color", "white");
});

msgr.focusout(function() {
    msgr.css("background-color", "#333");
    msgr.css("color", "white");
});

msum.focus(function() {
    msum.css("background-color", "darkred");
    msum.css("color", "white");
});

msum.focusout(function() {
    msum.css("background-color", "#333");
    msum.css("color", "white");
});



borrarshex.focus(function() {
    borrarshex.css("background-color", "#000");
});

borrarshex.focusout(function() {
    borrarshex.css("background-color", "#555");
});

let isx = $('#isx');

isx.focus(function() {
    isx.css("background-color", "#000");
});

isx.focusout(function() {
    isx.css("background-color", "#555");
});



cGrafo.focus(function() {
    cGrafo.css("background-color", "#000");
});

cGrafo.focusout(function() {
    cGrafo.css("background-color", "#555");
});



dwnshexbtn.focus(function() {
    dwnshexbtn.css("background-color", "#000");
});

dwnshexbtn.focusout(function() {
    dwnshexbtn.css("background-color", "#555");
});

borrarxmi.focus(function() {
    borrarxmi.css("background-color", "#000");
});

borrarxmi.focusout(function() {
    borrarxmi.css("background-color", "#555");
});

let ixs = $('#ixs');

ixs.focus(function() {
    ixs.css("background-color", "#000");
});

ixs.focusout(function() {
    ixs.css("background-color", "#555");
});



cUML.focus(function() {
    cUML.css("background-color", "#000");
});

cUML.focusout(function() {
    cUML.css("background-color", "#555");
});



dwnxmibtn.focus(function() {
    dwnxmibtn.css("background-color", "#000");
});

dwnxmibtn.focusout(function() {
    dwnxmibtn.css("background-color", "#555");
});

cShexXMI.focus(function() {
    cShexXMI.css("background-color", "#000");
});

cShexXMI.focusout(function() {
    cShexXMI.css("background-color", "#555");
});

cXMIShex.focus(function() {
    cXMIShex.css("background-color", "#000");
});

cXMIShex.focusout(function() {
    cXMIShex.css("background-color", "#555");
});