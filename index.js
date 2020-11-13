const $ = require('jquery');

const uml = require('./main.js');
const mermaid = require('./lib/mermaid/mermaid.min.js');

let shxtx = $('#mostraruml');

shxtx.click(mostraruml);

function mostraruml() {
	let val = $("#xmitext").val();
	let umlgen = uml.crearPUML(val);
	$("#output").text(umlgen);
	mermaid.init({}, "#uml");
}