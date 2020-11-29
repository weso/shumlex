const shexparser = require('./src/shex_util/ShExParser.js');
const xmiparser = require('./src/xmi_util/XMIParser.js');
const plantumlEncoder = require('./lib/plantuml-encoder/lib/puml.js');
const mermaid = require('./lib/mermaid/mermaid.min.js');
const $ = require('jquery');

const GrafoGen = require("./src/visual/GrafoGen.js");
const UMLGen = require("./src/visual/UMLGen.js");
let grgen = new GrafoGen();
let umlgen = new UMLGen();

function shExToXMI(text) {
	shexparser.resetParser();
    return shexparser.parseShExToXMI(text);
}

function XMIToShEx(text) {
    return xmiparser.parseXMIToShEx(text);
}

function crearGrafo(shex) {
	return grgen.shExAGrafo(shex);
}

function crearMUML(xmi) {
	return umlgen.generarCodigoMUML(xmi);
}

function crearDiagramaUML(id, xmi, options) {
	
	let ops = options;
	if (!options) {
		ops = {};
	}
	
	let maxheight = ops.max_height ? ops.max_height : "500px";
	let maxwidth = ops.max_width ? ops.max_width : "100vw";
			
	let umlgen = crearMUML(xmi);
	$("#output").text(umlgen);
	$("#" + id).removeAttr("data-processed");
	$("#" + id).css("max-height", maxheight);
	$("#" + id).css("max-width", maxwidth);
	$("#" + id).text(umlgen);
	mermaid.init({flowchart: { useMaxWidth: false }}, "#" + id);
	
	//Borrar caracteres empleados para la generación
	$( "#" + id + " tspan" ).each(function( index ) {
		let contenido = $(this).text();
		$(this).text(contenido.replace(/\\/g, "")
								.replace(/\"/g, "")
								.replace(/___inverse___/g, "^")
								.replace(/___anga___/g, "<")
								.replace(/___angc___/g, ">")
								.replace(/___dp___/g, ":")
								.replace(/:Blank/g, "_Blank")
								.replace(/\*(<|>)/g, "~")
								.replace(/CLOSED/g, " CLOSED")
								.replace(/_?:?<?[^prefix][A-Za-z0-9_]+>? : /g, "")
								)
	});
	
	$( "#" + id + " .label" ).each(function( index ) {
		let contenido = $(this).text();
		$(this).text(contenido.replace(/___dp___/g, ":"))
	});
	
	//Ajustar título
	$( "#" + id + " .title:contains(':')").each(function( index ) {
		$(this).attr("x", 20 + parseInt($(this).attr("x")));
	});
	
	$( "#" + id + " .title:contains('<')" ).each(function( index ) {
		$(this).attr("x", 40 + parseInt($(this).attr("x")));
	});
	
	$( "#" + id + " .title:contains('^')" ).each(function( index ) {
		$(this).attr("x", 20 + parseInt($(this).attr("x")));
	});
	
	//Añadir <> a los que carezcan de prefijo
	$( "#" + id + " .title" ).each(function( index ) {
		let contenido = $(this).text();
		if(contenido === "Prefixes" || contenido.includes(":") || contenido.includes("_Blank"))
			return;
		$(this).text("<" + contenido + ">")
	});
	
	//Eliminar repeticiones de enumeraciones
	$( "#" + id + " tspan[dy]:contains('«enumeration»')" ).each(function( index ) {
		let height = 10;
		let line = $(this).parent().next();
		let liney = line.attr("y1");
		line.attr("y1", liney - height);
		line.attr("y2", liney - height);
		let text = line.next();
		text.attr("y", text.attr("y") - height);
		let line2 = text.next();
		let liney2 = line2.attr("y1");
		line2.attr("y1", liney2 - height);
		line2.attr("y2", liney2 - height);
		let rect = $(this).parent().prev();
		rect.height(rect.height() - height);
		$(this).remove();	
	});
	
	$("#" + id + " svg").removeAttr("width");
	
	$(".cardinality text").attr("font-size", "12");
}

module.exports = {
    shExToXMI,
    XMIToShEx,
	crearGrafo,
	crearMUML,
	crearDiagramaUML
}