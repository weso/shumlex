const shexparser = require('./src/shex_util/ShExParser.js');
const xmiparser = require('./src/xmi_util/XMIParser.js');
const UMLGen = require("./src/visual/UMLGen.js");
let umlgen = new UMLGen();

function shExToXMI(text) {
	shexparser.resetParser();
    return shexparser.parseShExToXMI(text);
}

function XMIToShEx(text) {
    return xmiparser.parseXMIToShEx(text);
}

function crearMUML(xmi) {
	return umlgen.generarCodigoMUML(xmi);
}

function crearDiagramaUML(id, xmi, options) {
	
	let ops = options;
	if (!options) {
		ops = {};
	}
			
	let umlcr = crearMUML(xmi);
	umlgen.crearSVG(id, umlcr, ops);
}

function asignarEventos(id) {
	umlgen.asignarEventos(id);
}

function base64SVG(idsvg) {
	return umlgen.base64SVG(idsvg);
}

module.exports = {
    shExToXMI,
    XMIToShEx,
	crearMUML,
	crearDiagramaUML,
	base64SVG,
	asignarEventos
}