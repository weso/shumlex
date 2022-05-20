const uniqid = require("uniqid");
const Cardinality = require ("./mumlgen/Cardinality.js");
const Constraint = require ("./mumlgen/Constraint.js");
const Enum = require ("./mumlgen/Enum.js");

class MUMLGen {

    constructor (pr) {
		this.muml = "";
		this.linkID = 0;
		this.pr = pr;
		this.enu = new Enum(pr);
		this.co = new Constraint(pr);
		this.blankID = 0;
		this.originalNames = new Map();
		this.relationships = new Map();
		this.rpTerms = new Map();
		this.rpNumber = 0;
    }
	
	createDiagram(shapes) {
		this.reset();
        this.muml = "classDiagram\n";
		for(let shape in shapes) {		
			let sh = shapes[shape];
			let newNode;		
			if(sh.type === "Shape") {
				newNode = this.checkExpressions(sh, shape)
			}
			else if (sh.type === "ShapeAnd" || sh.type === "ShapeOr" || sh.type === "ShapeNot") {
				let companions = [];
				let relationName = "Composed of";
				if(sh.type === "ShapeNot") {
					sh.shapeExprs = [sh.shapeExpr]; //Para que funcione igual que AND y OR
					relationName = "NOT"
				}
				for(let i = 0; i < sh.shapeExprs.length; i++) {
					let sha = sh.shapeExprs[i];
					let linkTarget;
					if(sha.type === "Shape") {
						let partialNode = this.checkExpressions(sha, "_" + ++this.blankID);
						linkTarget = "_" + this.blankID;
						this.muml += this.createClass(partialNode);
						
					}
					else if(sha.type === "ShapeRef") { // :Titanuser @:User AND
						linkTarget = this.pr.getPrefixed(sha.reference);
					}
					else if(sha.type === "NodeConstraint") {
						linkTarget = "_" + ++this.blankID;
					    let partialNode = {id: "_" + this.blankID, attributes: [], nodekind: this.checkNodeKind(sha.nodeKind)}
						this.muml += this.createClass(partialNode);
					}
					let newLink = { linkID: ++this.linkID, source: this.pr.getPrefixed(shape), target: linkTarget, 
							nname: relationName, cardinality: "", curvature: 0, diamond: 1}
					this.muml += this.createDiamond(newLink);
					companions.push(newLink.target);
					//Crear el diamante
				}
				for(let i = 0; i < companions.length - 1; i++) { //Recorrer los componentes del AND/OR y unirlos
				let lop;
				switch(sh.type) {
					case "ShapeAnd":
						lop = "AND";
						break;
					case "ShapeOr":
						lop = "OR";
						break;
				}
					let lopLink = { linkID: ++this.linkID, source: companions[i], target: companions[i + 1], 
					nname: lop, cardinality: "", rotation: 0, curvature: 0, noarrow: true};
					this.muml += this.createDashedLine(lopLink);
				}
				newNode = {id: this.pr.getPrefixed(shape), attributes: []}
			}
			else if (sh.type === "NodeConstraint") {
				newNode = {id: this.pr.getPrefixed(shape), attributes: [], nodekind: this.checkNodeKind(sh.nodeKind)}
			}		
			else if (sh.type === "ShapeExternal") {
				newNode = {id: this.pr.getPrefixed(shape), attributes: ["EXTERNAL"]}
			}
						
			if(sh.closed === true) newNode.closed = true;
			if(sh.extra !== undefined) {
				newNode.extra = this.co.getExtra(sh.extra);
			}
			this.muml += this.createClass(newNode);
		}
		return this.muml;
	}
	
	createClass(node) {
		if(!this.relationships.get(node.id)) {
			this.relationships.set(node.id, []);
		}
		let attrs = "";
		if(node.attributes && node.attributes.length > 0 || node.closed || node.extra || node.nodekind) {
			let closed = node.closed ? "CLOSED\n" : "";
			let extra = node.extra ? node.extra + "\n" : "";
			let nk = node.nodekind ? node.nodekind + "\n" : "";
			let end = (node.attributes.length > 0) ? " ;" : "";
			attrs = " {\n" + closed + extra + nk + node.attributes.join(" ;\n") + end + "\n}";
		}
		let sanitizedName = this.adaptPref(node.id);
		this.originalNames.set(sanitizedName, node.id);
		return "class " + sanitizedName + attrs + "\n";
	}
	
	createLine(s, t, n, c, line) {
		this.rpNumber++;
		if(!this.relationships.get(s)) {
			this.relationships.set(s, []);
		}
		let rList = this.relationships.get(s);
		rList.push(this.adaptPref(n) + this.rpNumber);
		rList.push(t);
		this.relationships.set(s, rList);
		
		let sanitizedName1 = this.adaptPref(s);
		let sanitizedName2 = this.adaptPref(t);
		let sanitizedName3 = this.adaptPref(n);
		
		this.originalNames.set(sanitizedName1, s);
		this.originalNames.set(sanitizedName2, t);
		this.originalNames.set(sanitizedName3, n);
		this.rpTerms.set(sanitizedName3 + this.rpNumber, sanitizedName3);
		
		return sanitizedName1 + line + "\"" + c + "\" "
            + sanitizedName2 + " : " + sanitizedName3 + this.rpNumber + "\n";
	}
	
	createArrow(link) {
		return this.createLine(link.source, link.target, link.nname, link.cardinality, " --> ");
	}
	
	createDiamond(link) {
		return this.createLine(link.source, link.target, link.nname, link.cardinality, " *-- ");
	}
	
	createDashedLine(link) {
		return this.createLine(link.source, link.target, link.nname, link.cardinality, " .. ");
	}
	
	checkExpressions(shape, name) {
		try {		
		let instanceOf = null;
		let attrs = [];
		if(shape.expression && shape.expression.type === "OneOf") {
			let card = Cardinality.cardinalityOf(shape.expression);
			this.createOneOf(shape.expression.expressions, name, card);
		}
		else if(shape.expression) {	
			let expressions = shape.expression.predicate ? [shape.expression] : shape.expression.expressions;
			
			for(let exp in expressions) {		
				let expression = expressions[exp]
				if(expression.type === "TripleConstraint") {
					if(expression.valueExpr && expression.valueExpr.type === "ShapeRef") {
						let card = Cardinality.cardinalityOf(expression);
						let newLink = { linkID: ++this.linkID, source: this.pr.getPrefixed(name), target:this.pr.getPrefixed(expression.valueExpr.reference), 
							nname: this.pr.getPrefixed(expression.predicate), cardinality: card}
						this.muml += this.createArrow(newLink);
						
					}
					else if(expression.valueExpr 
							&& (expression.valueExpr.type === "ShapeAnd"
								|| expression.valueExpr.type === "ShapeOr")) { // :productId xsd:string MinLength 5 AND MaxLength 10;
						let ncValue = this.checkNodeConstraint(expression.valueExpr.shapeExprs[0], name);
						let attr;
						if(ncValue) {
							let facets = this.co.checkFacets(expression.valueExpr.shapeExprs[0]);
							if(facets !== "") ncValue = ncValue.replace(".", "");
							let pred = expression.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" ? "a" : this.pr.getPrefixed(expression.predicate);
							let sanitizedName = this.adaptPref(pred);
							this.originalNames.set(sanitizedName, pred);
							attr = sanitizedName + " " + ncValue + " " + facets ;						
						}
						let lop = " AND ";
						if(expression.valueExpr.type === "ShapeOr") lop = " OR ";
						for(let i = 1; i < expression.valueExpr.shapeExprs.length; i++) {
							let morefacets = this.co.checkFacets(expression.valueExpr.shapeExprs[i]);
							attr += lop + morefacets;
						}
						attrs.push(attr);
					}
					else if (expression.valueExpr && expression.valueExpr.type === "Shape") {
						let newId = ++this.blankID;
						let partialNode = this.checkExpressions(expression.valueExpr, "_" + newId);
						let card = Cardinality.cardinalityOf(expression);
						this.muml += this.createClass(partialNode);
						let newLink = { linkID: ++this.linkID, source: this.pr.getPrefixed(name), target: "_" + newId, 
							nname: this.pr.getPrefixed(expression.predicate), cardinality: card}
						this.muml += this.createArrow(newLink);
					}
					else if (expression.valueExpr) {
						let ncValue = this.checkNodeConstraint(expression.valueExpr, name);
						let card = Cardinality.cardinalityOf(expression);
						if(ncValue) {
							let facets = this.co.checkFacets(expression.valueExpr);
							if(facets !== "") ncValue = ncValue.replace(".", "");
							let pred = expression.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" ? "a" : this.pr.getPrefixed(expression.predicate);
							let sanitizedName = this.adaptPref(pred);
							this.originalNames.set(sanitizedName, pred);
							let attr = sanitizedName + " \"" + ncValue + card + facets + "\"" ;
							attrs.push(attr);
						}	
					}
					else {
						let card = Cardinality.cardinalityOf(expression);
						let sanitizedName = this.adaptPref(this.pr.getPrefixed(expression.predicate));
						this.originalNames.set(sanitizedName, this.pr.getPrefixed(expression.predicate));
						let attr = sanitizedName + " . " + card;
						attrs.push(attr);
					}
				}
				else if(expression.type === "EachOf" && expression.id) {	//Etiquetada
					let partialNode = this.checkExpressions({expression: { expressions: expression.expressions }}, "$" + this.pr.getPrefixed(expression.id));
					this.muml += this.createClass(partialNode);
					let newLink = { linkID: ++this.linkID, source: this.pr.getPrefixed(name), target: "$" + this.pr.getPrefixed(expression.id), 
						nname: "Composed of", cardinality: "", curvature: 0, diamond: 1}
					this.muml += this.createDiamond(newLink);
				}
				else if(expression.type === "Inclusion") {	//Etiquetada
					let newLink = { linkID: ++this.linkID, source: this.pr.getPrefixed(name), target: "$" + this.pr.getPrefixed(expression.include), 
						nname: "&" + this.pr.getPrefixed(expression.include), cardinality: ""}
					this.muml += this.createDiamond(newLink);
				}
				else if(expression.type === "OneOf") {	//OneOf
					let card = Cardinality.cardinalityOf(expression);
					this.createOneOf(expression.expressions, name, card);
				}
			}
		}
		let newNode = {id: this.pr.getPrefixed(name), p31:instanceOf, attributes: attrs}
		return newNode;		
		} catch (ex) {
			throw new Error("At " + name + ": " + ex);
		}
	}
	
	createOneOf(exps, name, card) {
		let companions = [];
		let relationName = "Composed of";
		for(let i = 0; i < exps.length; i++) {
			let exp = exps[i]
			let newId = ++this.blankID;
			let partialNode = this.checkExpressions({expression: exp}, "_" + newId);
			this.muml += this.createClass(partialNode);	
			let newLink = { linkID: ++this.linkID, source: this.pr.getPrefixed(name), target: "_" + newId, 
				nname: relationName, cardinality: card, curvature: 0, diamond: 1}
			this.muml += this.createDiamond(newLink);
			companions.push(newLink.target);
		}
		for(let i = 0; i < companions.length - 1; i++) { //Recorrer los componentes del OneOf y unirlos
			let lopLink = { linkID: ++this.linkID, source: companions[i], target: companions[i + 1], 
			nname: "OneOf", cardinality: "", rotation: 0, curvature: 0, noarrow: true};
			this.muml += this.createDashedLine(lopLink);
		}
	}
	
	checkNodeConstraint(vex, name) {
        //Conjunto de valores -> enumeración
        if(vex.values) {
            //Relación de tipo "a" ( a [:User])
			let pValues = this.enu.createEnumeration(vex.values);
			
			return "[ " + pValues.join(",") + " ]";
        }
        //Tipo de nodo (Literal, IRI...) -> Atributo con tal tipo
        if(vex.nodeKind) {
			return this.checkNodeKind(vex.nodeKind);
        }
        //Tipo de dato -> atributo común
        if(vex.datatype) {
			let sanitizedName = this.adaptPref(this.pr.getPrefixed(vex.datatype));
			this.originalNames.set(sanitizedName, this.pr.getPrefixed(vex.datatype));
			return sanitizedName;
        }

        return ".";
	}
	
	checkNodeKind(nk) {
		if(nk === "literal") return "Literal"
		else if(nk === "iri") return "IRI"
		else if(nk === "bnode") return "BNode"
		else if(nk === "nonliteral") return "NonLiteral"
	}
	
	adaptPref(prefix) {
		if(prefix) return prefix.replace(/[\:<>\^\-\/\.]/g, "_").replace(/#/g, "_hash_").replace(/\$/g, "_dol_");
		else return prefix;
	}
 	
	reset() {
		this.muml = "";
		this.linkID = 0;
		this.blankID = 0;
		this.originalNames = new Map();
		this.relationships = new Map();
		this.rpTerms = new Map();
		this.rpNumber = 0;
	}



}
module.exports = MUMLGen;