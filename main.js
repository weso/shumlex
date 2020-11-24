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

function crearDiagramaUML(id, xmi) {
			
	let umlgen = crearMUML(xmi);
	$("#output").text(umlgen);
	$("#" + id).removeAttr("data-processed");
	$("#" + id).css("max-height", "500px");
	$("#" + id).css("max-width", "100vw");
	$("#" + id).text(umlgen);
	mermaid.init({flowchart: { useMaxWidth: false }}, "#" + id);
	
	function replacer(str, p1, p2, offset, s)
		{
			return "<" + str.replace(/_/g, "") + ">";
		}
	
	//Borrar caracteres empleados para la generación
	$( "#" + id + " tspan" ).each(function( index ) {
		let contenido = $(this).text();
		$(this).text(contenido.replace(/\\/g, "")
								.replace(/\"/g, "")
								.replace(/_inverse_/g, "^")
								.replace(/_[A-Za-z0-9]+_/g, replacer)
								.replace(/ _/g, " :")
								.replace(/::/g, "_:")
								.replace(/:Blank/g, "_Blank")
								.replace(/\*(<|>)/g, "~")
								.replace(/CLOSED/g, " CLOSED")
								.replace(/_?:?<?[^prefix][A-Za-z0-9]+>? : /g, "")
								)
	});
	
	$( "#" + id + " .label" ).each(function( index ) {
		let contenido = $(this).text();
		$(this).text(contenido.replace(/_/g, ":"))
	});
	
	//Añadir <> a los que carezcan de prefijo
	$( "#" + id + " .title" ).each(function( index ) {
		let contenido = $(this).text();
		if(contenido === "Prefixes")
			return;
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
}

module.exports = {
    shExToXMI,
    XMIToShEx,
	crearGrafo,
	crearMUML,
	crearDiagramaUML
}