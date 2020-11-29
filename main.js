const shexparser = require('./src/shex_util/ShExParser.js');
const xmiparser = require('./src/xmi_util/XMIParser.js');
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
			
	let umlcr = crearMUML(xmi);
	umlgen.crearSVG(id, umlcr, ops);
}

module.exports = {
    shExToXMI,
    XMIToShEx,
	crearGrafo,
	crearMUML,
	crearDiagramaUML
}