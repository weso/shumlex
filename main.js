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

function crearPUML(xmi) {
	return umlgen.generarCodigoPUML(xmi);
}

function crearDiagramaUML(xmi) {
	let umlgen = crearPUML(xmi);
	$("#output").text(umlgen);
	$("#outputtoshow").text(umlgen);
	mermaid.init({}, "#outputtoshow");
	
	//Borrar caracteres empleados para la generación
	$( "#outputtoshow tspan" ).each(function( index ) {
		let contenido = $(this).text();
		$(this).text(contenido.replace(/\\/g, "")
								.replace(/\"/g, "")
								.replace(/_/g, ":")
								.replace(/:?[A-Za-z0-9]+ : /g, ""))
	});
	$( "#outputtoshow .label" ).each(function( index ) {
		let contenido = $(this).text();
		$(this).text(contenido.replace(/_/g, ":"))
	});
	//Añadir <> a los que carezcan de prefijo
	$( "#outputtoshow .title" ).each(function( index ) {
		let contenido = $(this).text();
		if(contenido === "Prefixes")
			return;
		function replacer(str, p1, p2, offset, s)
		{
			return "<" + str + ">";
		}
		$(this).text(contenido.replace(/^[^:][A-Za-z0-9]+$/g, replacer))
	});
}

module.exports = {
    shExToXMI,
    XMIToShEx,
	crearGrafo,
	crearPUML,
	crearDiagramaUML
}