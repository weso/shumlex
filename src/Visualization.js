const uniqid = require("uniqid");

const mermaid = require('../lib/mermaid/mermaid.min.js');
const $ = require('jquery');

class Visualization {

    constructor() {	
		this.blankCount = 1;
    }
	
	crearSVG(id, umlcr, ops) {	
		this.clear();		
		let maxheight = ops.max_height ? ops.max_height : "500px";
		let maxwidth = ops.max_width ? ops.max_width : "100vw";
		$("#output").text(umlcr);
		$("#" + id).css("max-height", maxheight);
		$("#" + id).css("max-width", maxwidth);
		$("#" + id).text(umlcr);
		mermaid.init({flowchart: { useMaxWidth: false }}, "#" + id);

		$("#" + id).removeAttr("data-processed");
		
		let self = this;
		//Borrar caracteres empleados para la generación
		$( "#" + id + " .nodeLabel" ).each(function( index ) {
			
			let contenido = $(this).text().replace(/\\/g, "")
									.replace(/\"/g, "")
									.replace(/\*(<|>)/g, "~")
									.replace(/-\/\//g, "{")
									.replace(/\/\/-/g, "}")
									.replace(/CLOSED/g, " CLOSED")
									.replace(/_?:?<?[^prefix][A-Za-z0-9_]+>? : /g, "")
									.replace(/,/g, " ")
									.replace(/&cita;/g, "\"");
									
			if(contenido.match(/_Blank[0-9]+/)) contenido = "";
									
			$(this).text(contenido);
			
			let elements = contenido.split(" ");
			for(let i = 0; i < elements.length; i++) {
				let originalName = self.originalNames.get(elements[i]);	
				if(originalName) {
					let newText = $(this).text().replace(elements[i], originalName);
					$(this).text(newText);
				}
			}		
			
			contenido = $(this).text().replace(/ ;/g, ";");
			$(this).text(contenido);
			
		});

		//ID adecuado
		$( "#" + id + " .classTitle .nodeLabel" ).each(function( index ) {
			
			let id = $(this).text();
			if(id === "") id = "_Blank" + self.blankCount++;
									
			$(this).parent().parent().parent().parent().attr("id", id);
							
		});

		let edgeID = 1;
		
		 
		$( "#" + id + " span span.edgeLabel" ).each(function( index ) {

			let id = $(this).text();

			let lroot = $(this).parent().parent().parent().parent().parent();

			lroot.attr("id", id + "-label");
			$("#id" + edgeID).attr("id", id + "-edge");
			edgeID++;
			if(lroot.next() 
				&& lroot.next().attr("class") === "edgeTerminals") {
				lroot.next().attr("id", id + "-card");
			}
			
			let sanitizedName = self.rpTerms.get(id);
			if(sanitizedName) {
				$(this).text(sanitizedName);
				let originalName = self.originalNames.get(sanitizedName);
				if(originalName) {
					$(this).text(originalName);
				}
			}
			
			
		});
		
		$( "#" + id + " div span.edgeLabel" ).each(function( index ) {
			let contenido = $(this).text();
			$(this).text(contenido.replace(/-\/\//g, "{")
								  .replace(/\/\/-/g, "}")
								  .replace(/_hash_/g, "#"));
		});
		
		
		//Añadir <> a los que carezcan de prefijo
		$( "#" + id + " .title" ).each(function( index ) {
			let contenido = $(this).text();
			if(!(contenido === "Prefixes" || contenido.includes(":") || contenido.includes("<") || contenido.includes("_Blank")))
				$(this).text("<" + contenido + ">");	
			$(this).parent().parent().attr("id", $(this).text()); //El nombre de la clase como ID del elemento
		});
		
		$("#" + id + " svg").removeAttr("width");
		
		$(".edgeTerminals span").attr("font-size", "12");	
		
	} 
	
	clear() {
		this.blankCount = 1;
	}	

}
module.exports = Visualization;