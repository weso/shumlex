const PostProcessing = require("./src/PostProcessing.js");
let pps = new PostProcessing();
const Visualization = require("./src/Visualization.js");
let vis = new Visualization();
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
		
	vis.originalNames = shexParser.mg.originalNames;
	vis.relationships = shexParser.mg.relationships;
	vis.rpTerms = shexParser.mg.rpTerms;
	
	try {
		vis.crearSVG(id, muml, ops);
		
	} catch(ex) {
		alert("An error has occurred when generating the visualization: \n" + ex);
	}
	}

function asignarEventos(id) {
	pps.asignarEventos(id);
}

function base64SVG(idsvg) {
	return pps.base64SVG(idsvg);
}

module.exports = {
	shexToUML,
	base64SVG,
	asignarEventos
}