const PostProcessing = require("./src/PostProcessing.js");
let umlgen = new PostProcessing();
const shexParser = require("./src/ShExParser.js");

function shexToUML(id, text, options) {
	
	let muml = "";
	let ops = options;
	if (!options) {
		ops = {};
	}
	
	try {
		muml = shexParser.parseShExToMUML(text);
	} catch(ex) {
		alert("An error has occurred when generating the diagram data: \n" + ex);
	}
		
	umlgen.originalNames = shexParser.mg.originalNames;
	umlgen.relationships = shexParser.mg.relationships;
	umlgen.rpTerms = shexParser.mg.rpTerms;
	
	try {
		umlgen.crearSVG(id, muml, ops);
		
	} catch(ex) {
		alert("An error has occurred when generating the visualization: \n" + ex);
	}
	}

function asignarEventos(id) {
	umlgen.asignarEventos(id);
}

function base64SVG(idsvg) {
	return umlgen.base64SVG(idsvg);
}

module.exports = {
	shexToUML,
	base64SVG,
	asignarEventos
}