const shexp = require('shex').Parser;
const MUMLGen = require ("./MUMLGen.js");
const Prefix = require ("./mumlgen/Prefix.js");

class ShExParser {

  constructor () {
    this.source = "";

    this.shexparser = shexp.construct();
    this.shexparser._setBase("http://example.org/");
    this.shexparser._setFileName("Shapes.shex");

	this.pr = new Prefix();
	this.mg = new MUMLGen(this.pr);
	
	this.prefixes = new Map();
  }
  
  resetParser() {
	  this.shexparser.reset();
	  this.mg.reset();
  }

  parseShExToMUML(shex) {
    
    let source = this.parseShEx(shex);
    
    //Guardar prefijos
	if(source.base) this.pr.base = source.base;
    for(let prefix in source.prefixes) {
		this.prefixes.set(source.prefixes[prefix], prefix);
    }

	this.pr.prefixes = this.prefixes;
	
  
	return this.mg.createDiagram(source.shapes);
  }

  /**
   * Parsea ShEx y devuelve un JSON
   * @param shex ShEx
   * @returns {JSON}  ShEx parseado
   */
  parseShEx(shex) {
    try {
      this.source = this.shexparser.parse(shex);
    } catch (ex) {
      console.log(ex);
      return null;
    }
    return this.source;
  }
}

module.exports = new ShExParser();