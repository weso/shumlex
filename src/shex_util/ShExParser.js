const shexp = require('shex').Parser;
const XMIGenerator = require ("../xmi_util/xmigen/XMIGenerator.js");

/**
 * Parsea ShEx para la generación del grafo o de XMI
 */
class ShExParser {

  constructor () {
    this.source = "";

    this.shexparser = shexp.construct();
    this.shexparser._setBase("http://example.org/");
    this.shexparser._setFileName("Shapes.shex");

    this.xmigen = new XMIGenerator();
  }
  
  resetParser() {
	  this.shexparser.reset();
  }

  /**
   * Parsea ShEx y convoca la generación de XMI a partir del JSON obtenido
   * @param shex  ShEx a parsear
   * @returns {string}  Equivalente XMI
   */
  parseShExToXMI(shex) {
    let xmiEquivalent = "";

    let source = this.parseShEx(shex);

    xmiEquivalent += XMIGenerator.createXMIHeader();

    let prefixes = this.xmigen.createPrefixes(source.prefixes, source.base);
    for (let shape in source.shapes){
      if(source.shapes.hasOwnProperty(shape)) {
        this.xmigen.checkAnon(shape);
        this.xmigen.saveShape(shape);
      }
    }
    for (let shape in source.shapes){
      if(source.shapes.hasOwnProperty(shape)) {
        xmiEquivalent += this.xmigen.createXMIClass(shape, source.shapes[shape]);
      }
    }

    xmiEquivalent += prefixes;
    xmiEquivalent += this.xmigen.createXMIFooter();

    this.xmigen.clear();

    return xmiEquivalent;
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