const $ = require('jquery');
const uml = require('./main.js');


let shxtx = $('#mostraruml');

shxtx.click(mostraruml);

function mostraruml() {
	let val = $("#xmitext").val();
	uml.crearDiagramaUML(val);
}