const uniqid = require("uniqid");

const mermaid = require('../lib/mermaid/mermaid.min.js');
const $ = require('jquery');

class Eventos {

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
	
	asignarEventos(id) {
		let self = this;
				// Evento de ocultar todos los elementos y mostrar las relaciones vinculadas a un ID
		function resaltar(event) {
			
			let element = $( "#" + $.escapeSelector(event.data.idB) );
			
			if(!element.hasClass("highlighted")) {
				
				if($(".highlighted").length === 0) {
					//Ocultar todo
					$( "#" + id + " .node" ).each(function( index ) {
						$(this).css("opacity", "0.1");
					});

					$( "#" + id + " g.edgeLabel" ).each(function( index ) {
						$(this).css("opacity", "0.1");
					});

					$( "#" + id + " .edgeTerminals" ).each(function( index ) {
						$(this).css("opacity", "0.1");
					});
					
					$( "#" + id + " .edgePaths > path" ).each(function( index ) {
						$(this).css("opacity", "0.1");
					});
				}
				
				element.css("opacity", "1"); //Él mismo
				element.addClass("highlighted");  //Lo marcamos
				
				//A cada una de las relaciones les quitamos la opacidad
				let resaltados = $(".highlighted");
				//Para cada uno de los resaltados, mostrar sus relaciones
				for(let j = 0; j < resaltados.length; j++) {
					let idResaltado = resaltados[j].id;
					$("#" + $.escapeSelector(idResaltado)).css("opacity", "1");
					
					let relationships = self.relationships.get(idResaltado);
					if(!relationships) {
						continue;
					}
					for(let i = 0; i < relationships.length; i++) {
						$( "#" + $.escapeSelector(relationships[i]) ).css("opacity", "1");
						$( "#" + $.escapeSelector(relationships[i]) ).addClass("highlightOf-" + idResaltado);
						$( "#" + $.escapeSelector(relationships[i]) + "-label" ).css("opacity", "1");
						$( "#" + $.escapeSelector(relationships[i]) + "-edge" ).css("opacity", "1");
						$( "#" + $.escapeSelector(relationships[i]) + "-card" ).css("opacity", "1");
						let lv2relationships = self.relationships.get(relationships[i]);
						if(!lv2relationships) {
							continue;
						}
						for(let j = 0; j < lv2relationships.length; j++) {
							if(lv2relationships[j].match(/AND[0-9]*/) || lv2relationships[j].match(/OR[0-9]*/) || lv2relationships[j].match(/OneOf[0-9]*/)) {
								$( "#" + $.escapeSelector(lv2relationships[j]) + "-label" ).css("opacity", "1");
								$( "#" + $.escapeSelector(lv2relationships[j]) + "-edge" ).css("opacity", "1");
							}
						}
					}
				}
			}
			else {
				element.removeClass("highlighted");
				if($(".highlighted").length === 0) {	//Si no quedan elementos resaltados regresamos al estado primigenio
					$( "#" + id + " g" ).each(function( index ) {
						$(this).css("opacity", "1");
					});
					
					$( "#" + id + " path" ).each(function( index ) {
						$(this).css("opacity", "1");
					});
				}
				else {	//Si no, únicamente los tapamos de nuevo
					if(!$(this).is('[class*="highlightOf"]')) {	//Si no está ya resaltado por otra clase
						element.css("opacity", "0.1"); 
					}
					let relationships = self.relationships.get(event.data.idB);
					if(!relationships) {
						return;
					}
					for(let i = 0; i < relationships.length; i++) {
						$( "#" + $.escapeSelector(relationships[i]) ).removeClass("highlightOf-" + event.data.idB);
						if(!$( "#" + $.escapeSelector(relationships[i])).hasClass("highlighted")
								&& !$( "#" + $.escapeSelector(relationships[i])).is('[class*="highlightOf"]')) {
							$( "#" + $.escapeSelector(relationships[i]) ).css("opacity", "0.1");
						}
						$( "#" + $.escapeSelector(relationships[i]) + "-label" ).css("opacity", "0.1");
						$( "#" + $.escapeSelector(relationships[i]) + "-edge" ).css("opacity", "0.1");
						$( "#" + $.escapeSelector(relationships[i]) + "-card" ).css("opacity", "0.1");
					}
				}
				
			}
			
		}
		
		// Vincular a cada clase el evento de mostrar las relaciones
		$( "#" + id + " .node" ).each(function( index ) {
			$(this).css("cursor", "pointer");
			let idBase = $(this).attr("id");
			$(this).click({idB: idBase}, resaltar);
		});
		
		// Vincular el evento de mostrar el tooltip
		let checkEntity = async function (entity,endPoint){
			return $.get(
			  {
			
				url: endPoint+'api.php?action=wbgetentities&format=json&ids='+ entity,
				dataType: 'jsonp',
			
			  })
			   
		}

		let loadTooltip = function(data,wikiElement,posX,posY){
			if(!data.error){
		  
				var userLang;
				var entity = '';
				var description=''
				var theme;
				//Gets the preference language from the navigator
				userLang = (navigator.language || navigator.userLanguage).split("-")[0]
		  
		  
				var content = data.entities[wikiElement.toUpperCase()]
		  
				//Check if the property/entity exist
				if(!content.labels)return;
		  
				//Some properties and entities are only avalible in English
				//So if they do not exist we take it in English
				if(content.labels[userLang] && content.descriptions[userLang]){
				   
					entity = content.labels[userLang].value +' ('+wikiElement+')'
					description = content.descriptions[userLang].value
		  
				}else{
		  
					let lb = content.labels['en'];
					let desc = content.descriptions['en'];
					if(lb){
					  entity = lb.value +' ('+wikiElement+')';
					}
					if(desc){
					   description = desc.value
					}
					
				}

				const themeStyles ={
					default:{
					  'display': 'inline-block',
					  'justify-content': 'center',
					  'padding': '10px',
					  'border-radius': '8px',
					  'border': '1px solid #B8F5F3',
					  'background':'white',
					  'color':'#222',
					  'z-index':'1200'
					},
					dark:{
					  'display': 'inline-block',
					  'justify-content': 'center',
					  'padding': '5px',
					  'border-radius': '10px',
					  'border': '1px solid #70dbe9',
					  'background':'#222',
					  'color':'white',
					  'z-index':'1200'
					}
				  }

				  const styles ={
					title:{
					  'text-align': 'left',
					  'font-size':17,
					  'font-family': 'Arial, Helvetica, sans-serif'
					},
					description:{
					  'display': 'inline-block',
					  'line-height': '23px',
					  'text-align': 'left',
					  'margin-top': '3px',
					  'font-size':14,
					  'font-family': 'Arial, Helvetica, sans-serif'
					}   
				  }
		  
				let cssStyle = themeStyles['default'];
		  
				//Jquery in 2021 ahora mejor todavía
				$('<div class="CodeMirror cm-s-default CodeMirror-wrap">')
					.css( 'position', 'absolute' )
					.css( 'z-index', '1200' )
					.css( 'max-width', '200px' ).css( { 
					top: posY + 2,
					left: posX + 2
					} )
				  .addClass('wikidataTooltip').css('height','auto')
				  .append(
					$('<div class="wikidata_tooltip">').css(cssStyle)
					.append(
					  $('<div>').html(entity).css(styles.title))
					.append(
					  $('<div>').html(description).css(styles.description)))
				  .appendTo('body').fadeIn( 'slow' );
			  }
		  }

		let mouseOvers = new Map();
		let mouseActive = -1;
		let mouseOverId = 0;

		$( "#" + id + " span span.edgeLabel" ).each(function() {

			let targetId = mouseOverId;
			mouseOverId++;

			$(this).on( "mouseover", async function(e) {		
				let label = e.target.innerText;
				mouseOvers.set(targetId, true);

				let posX = e.clientX,
  					posY = e.clientY + $( window ).scrollTop();

				let prefixName = label.split(':')[0];
				let wikiElement = label.split(':')[1];

				if(wikiElement!== undefined  && wikiElement!== ''){
					let endpoint = "https://www.wikidata.org/w/"
					let data = await checkEntity(wikiElement,endpoint)
					if(mouseOvers.get(targetId) && mouseActive != targetId) {
						loadTooltip(data,wikiElement,posX,posY);
						mouseActive = targetId;
					}			
				  }
			});

			$(this).on( "mouseleave", function(e) {
				$(".wikidataTooltip").remove();
				mouseOvers.set(targetId, false);
				mouseActive = -1;
			});
		});

		$( "#" + id + " .nodeLabel" ).each(function() {

			let targetId = mouseOverId;
			mouseOverId++;

			$(this).on( "mouseover", async function(e) {
				mouseOvers.set(targetId, true);
				let label = e.target.innerText;

				let posX = e.clientX,
  					posY = e.clientY + $( window ).scrollTop();

				let members = label.split(" ");

				for(let i = 0; i < members.length; i++) {
					let prefixName = members[i].split(':')[0];
					let wikiElement = members[i].split(':')[1];		
	
					if(wikiElement!== undefined  && wikiElement!== ''){
						let endpoint = "https://www.wikidata.org/w/"
						let data = await checkEntity(wikiElement,endpoint);
						if(mouseOvers.get(targetId) && mouseActive != targetId) {
							loadTooltip(data,wikiElement,(posX),posY);
							if(i === members.length - 1) {
								mouseActive = targetId;
							}			
						}
					}
				}
		
			});

			$(this).on( "mouseleave", function(e) {
				$(".wikidataTooltip").remove();
				mouseOvers.set(targetId, false);
				mouseActive = -1;
			});
		});
	}

    
	
	clear() {
		this.blankCount = 1;
	}	

}
module.exports = Eventos;