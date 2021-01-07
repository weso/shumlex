const XMIAux = require("./XMIAux.js");
const XMITypes = require("./XMITypes.js");
const XMIAttributes = require("./XMIAttributes.js");
const IRIManager = require("../../managers/IRIManager");
/**
 * Genera el XMI correspondiente a una clase UML
 */
class XMIClass {

    constructor (shm, xmitype, irim, xmicon, xmienum) {
        this.shm = shm;
        this.XMITypes = XMITypes;
        this.irim = irim;
        this.xmiatt = new XMIAttributes(xmienum, xmitype,
            this.irim, xmicon, this.shm);
        this.xmicon = xmicon;
        this.XMIAux = XMIAux;
        this.IRIManager = IRIManager;
    }

    /**
     * Crea una clase XMI
     * @param name  Nombre de la clase
     * @param shape Shape cuyo equivalente XMI ha de ser hallado
     * @returns {string|*}  Clase XMI
     */
    createXMIClass(name, shape) {
        let sh = this.shm.findShape(name);
        let expression = shape.expression;
        let nodekind = shape.nodeKind;
        let generalizations = "";
        let nk = nodekind === undefined ? "" : this.xmiatt.createXMIKindAttribute("nodeKind", nodekind);
        let dt = shape.datatype === undefined ? "" : this.xmiatt.createXMIPrimAttribute("datatype",
            shape.datatype);

        //Nombre de la clase prefijado
        let prName = this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(name));
        //Shape anónima
        if(prName.includes("_:")) {
            this.shm.incrementBlank();
        }
        let ats = "";

        if(shape.type === "ShapeAnd") {
            let shAnAt = this.checkLOPShape(shape, sh, "AND");
            ats = shAnAt.ats;
            generalizations = shAnAt.generalizations;
        }
        else if(shape.type === "ShapeOr") {
            let shOrAt = this.checkLOPShape(shape, sh, "OR");
            ats = shOrAt.ats;
            generalizations = shOrAt.generalizations;
        }
		else if(shape.type === "ShapeNot") {
			let shNotAt = this.checkShapeNot(shape, sh);
            ats = shNotAt.ats;
            generalizations = shNotAt.generalizations;
		}
        //Si no es una ShapeAnd, generar atributos de modo corriente
        else {
            ats = this.xmiatt.createXMIAttributes(expression, prName);
        }

        //Comprobar facetas ShEx: restricciones
        this.xmicon.checkFacets(shape, sh.id);

        let extra = "";
        //Comprobar si tiene Extra
        if(shape.extra !== undefined) {
            extra = this.xmicon.markAsExtra(sh.id, shape.extra, prName);
        }

        //El interior de la clase está conformado por:
        let int = ats               //Atributos
            + nk                    //Atributos tipo nodo (IRI, Literal...)
            + dt                    //Atributos datatype
            + generalizations       //Generalizaciones
            + extra;

        let classXMI = this.XMIAux.createPackEl("uml:Class", sh.id, 'name="' + prName + '"', int);

        //Comprobar si es una shape cerrada
        if(shape.closed === true) {
            this.xmicon.markAsClosed(sh.id);
        }

        //Crear elementos dependientes de esta clase
        classXMI += this.xmicon.createDependentOwnedRules();
        classXMI += this.xmiatt.createDependentAssociations(sh.id);
        classXMI += this.xmiatt.createDependentComponents();

        return classXMI;
    }

    /**
     * Genera XMI para Shapes de tipo And o OR
     * @param shape Shape
     * @param sh    Shape recuperada
     * @param lop   Operación lógica, AND o OR
     * @returns {{ats: string, generalizations: string}}
     */
    checkLOPShape(shape, sh, lop) {
        let nOfShapes = 0;
        //Contar el número de Shapes en la conjunción
        let exprsForGen = [];
        let exprsForComp = [];

        let ats = "";
        let generalizations = "";
        for (let i = 0; i < shape.shapeExprs.length; i++) {
            if(shape.shapeExprs[i].type === "ShapeRef"      // Herencia - :User :Person AND {}
                || shape.shapeExprs[i].type === "NodeConstraint") { // Restricción Nodal - :Thing Literal AND {}
                exprsForGen.push(shape.shapeExprs[i]);
            }
            else if (shape.shapeExprs[i].type === "Shape" && shape.shapeExprs[i].expression
                && shape.shapeExprs[i].expression.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                exprsForGen.push(shape.shapeExprs[i].expression.valueExpr.values);
            }
            else {
                nOfShapes++;
                exprsForComp.push(shape.shapeExprs[i]);
                //:User IRI CLOSED {...}
                if(shape.shapeExprs[i].closed === true) {
                    this.xmicon.markAsClosed(sh.id);
                }
            }
        }
        if(nOfShapes > 0) {
            let subClassName = this.xmiatt.getComponentNumber();
            ats = this.xmiatt.createComponent(lop, subClassName, exprsForComp);
        }
        switch(lop) {
            case "AND":
                generalizations = this.xmiatt.createXMIGeneralization(exprsForGen, false, sh.id);
                break;
            case "OR":
                generalizations = this.xmiatt.createXMIGeneralization(exprsForGen, false, sh.id, "OR");
                break;
        }

        return {
            ats: ats,
            generalizations: generalizations
        };
    }
	
	checkShapeNot(shape, sh) {
		let exprsForGen = [];
		let exprsForComp = [];
		let ats = "";
        let generalizations = "";
		if(shape.shapeExpr.type === "ShapeRef") {      // :NoUser Not @:User
			exprsForGen.push(shape.shapeExpr);
			generalizations = this.xmiatt.createXMIGeneralization(exprsForGen, false, sh.id, "NOT");
       }
	   else if (shape.shapeExpr.type === "Shape" && shape.shapeExpr.expression
                && shape.shapeExpr.expression.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
			exprsForGen.push(shape.shapeExpr.expression.valueExpr.values);
			generalizations = this.xmiatt.createXMIGeneralization(exprsForGen, false, sh.id, "NOT");
       }
		else {
			exprsForComp.push(shape.shapeExpr);
			if(shape.shapeExpr.closed === true) {
				this.xmicon.markAsClosed(sh.id);
			}
			let subClassName = this.xmiatt.getComponentNumber();
			ats = this.xmiatt.createComponent("NOT", subClassName, exprsForComp);
		}
		return {
            ats: ats,
            generalizations: generalizations
        };
	}

    clear() {
        this.xmiatt.clear();
    }

}
module.exports = XMIClass;