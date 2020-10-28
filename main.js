const shexparser = require('./src/shex_util/ShExParser.js');
const xmiparser = require('./src/xmi_util/XMIParser.js');
const plantumlEncoder = require('./lib/plantuml-encoder/lib/puml.js');

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
    let puml = crearPUML(xmi);
    let encoded = plantumlEncoder.encode(puml);
    return "http://www.plantuml.com/plantuml/img/" + encoded
}

module.exports = {
    shExToXMI,
    XMIToShEx,
	crearGrafo,
	crearPUML,
	crearDiagramaUML
}