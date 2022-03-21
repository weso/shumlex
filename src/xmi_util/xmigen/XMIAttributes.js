const XMIPrimitiveAttributes = require("./XMIPrimitiveAttributes.js");
const XMIComposition = require("./XMIComposition.js");
const XMIAssociations = require("./XMIAssociations.js");
const XMIAux = require("./XMIAux.js");
const IRIManager = require("../../managers/IRIManager");
const unid = require("uniqid");
/**
 * Genera los atributos XMI a partir del JSON de ShEx
 */
class XMIAttributes {

    constructor (xmienum, xmitype, irim, xmicon, shm, xmisub) {
        this.unid = unid;
        this.irim = irim;
        this.shm = shm;
        this.xmienum = xmienum;
        this.xmiasoc = new XMIAssociations(this.shm, this.irim);
        this.xmicon = xmicon;
        this.xmiprim = new XMIPrimitiveAttributes(xmitype, irim, xmicon);

        this.XMIAux = XMIAux;
        this.IRIManager = IRIManager;
        this.xmisub = xmisub;
        this.xmisub.xmiats = this;

        this.depth = 0;
    }

    /**
     * Genera los atributos XMI a partir de una expresión
     * @param expr  Expresión
     * @param className Nombre de la clase poseedora
     * @returns {string}    Atributos XMI
     */
    createXMIAttributes(expr, className) {
        let attrs = "";
        //Si no hay expresión, no se genera nada
        if(!expr) {
            return attrs;
        }
        //Si existe un atributo id, se trata de una expresión etiquetada.
        else if(expr.id !== undefined) {
            attrs = this.createLabelled(expr);
        }
        //Si es un tipo Inclusion, se trata de una referencia a una expresión etiquetada.
        else if(expr.type === "Inclusion") {
            attrs = this.createLabelRef(expr);
        }
        //Una TripleConstraint alberga múltiples alternativas. Redirigimos a un método especializado.
        else if(expr.type === "TripleConstraint") {
            attrs = this.determineTypeOfExpression(expr, undefined, undefined, className);
        }
        //Expresión OneOf.
        else if(expr.type === "OneOf") {
            attrs = this.createOneOf(expr, className);
        }
        //Expresión EachOf.
        else if (expr.type === "EachOf") {
            attrs = this.createEachOf(expr, className);
        }
		//AND, OR con un elemento, o NOT
		else if(expr.length === 1) {	
            return this.createXMIAttributes(expr[0].expression, className);
        }
        //ShapeExprs: atributos de una clase que representa un AND
        else if(expr.length > 1) {
            for(let i = 0; i < expr.length; i++) {
                attrs += this.createComponent("Shape", this.xmisub.getComponentNumber(),
                    expr[i].expression, expr[i].min,expr[i].max);
            }
            return attrs;
        }
        //Reducimos la profundidad antes de ascender en la llamada
        this.decrementDepth();
        return attrs;
    }

    /**
     * Crea una expresión etiquetada
     * @param expr  Expresión
     * @returns {*} Equivalente XMI
     */
    createLabelled(expr) {
        let labelRef = "$" + this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(expr.id));
        let subExpr = JSON.parse(JSON.stringify(expr));
        //Eliminamos el id para que no lo identifique como expresión etiquetada de nuevo
        subExpr.id = undefined;
        let compName = this.xmisub.getComponentNumber();
        this.xmisub.saveLabel(labelRef, compName);
        return this.createComponent(labelRef, compName, subExpr, expr.min, expr.max);
    }

    /**
     * Crea una referencia a una expresión etiquetada
     * @param expr  Expresión
     * @returns {*} Equivalente XMI
     */
    createLabelRef(expr) {
        let labelRef = this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(expr.include));
        return this.xmiasoc.createXMIAsocAttribute("&#38;" + labelRef, this.xmisub.getLabelled("$" + labelRef),
            expr.min, expr.max);
    }

    /**
     * Crea un OneOf
     * @param expr  Expresión
     * @param className Nombre de la clase
     * @returns {*} Equivalente XMI
     */
    createOneOf(expr, className) {
        let ats = "";
		for(let i = 0; i < expr.expressions.length; i++) {
				let componentName = this.xmisub.getComponentNumber();
				let next;
				let lopAsoc;
				if(i < expr.expressions.length - 1) {
					next = "_Blank" + (parseInt(componentName.replace("_Blank", "")) + 1);
					lopAsoc = { lope: "OneOf", target: next};
				}
                ats += this.createComponent("Shape", componentName,
                    expr.expressions[i], expr.min,expr.max, lopAsoc);
        }
        return ats;
    }

    /**
     * Crea un EachOf
     * @param expr  Expresión
     * @param className Nombre de la clase
     * @returns {string}    Equivalente XMI
     */
    createEachOf(expr, className) {
        let attrs = "";
        //Creamos una subclase si:
        //Si la profundidad es mayor de 0 - Por ejemplo, es una de las expressiones de un OneOf.
        //Si tiene cardinalidad distinta de 1 - Empleamos el EachOf para indicar la cardinalidad del conjunto de sus expr.
        if( this.depth > 0 || expr.min !== undefined || expr.max !== undefined) {
            let subClassName = this.xmisub.getComponentNumber();
            let subExpr = JSON.parse(JSON.stringify(expr));
            attrs = this.createComponent("EachOf", subClassName, subExpr, expr.min, expr.max);
        }
        else {
            for(let attr in expr.expressions) {
                if(expr.expressions.hasOwnProperty(attr)) {
                    this.incrementDepth();
                    attrs += this.createXMIAttributes(expr.expressions[attr], className);
                }
            }
        }
        return attrs;
    }

    /**
     * Genera el XMI correspondiente a una expresión de tipo TripleConstraint
     * @param expr  Expresión
     * @param id    ID
     * @param lop   Si se aplica operación lógica (OR...)
     * @returns {*}
     */
    determineTypeOfExpression(expr, id, lop, cn) {
        //Si tiene predicado, lo prefijamos, añadimos inverso -si existe- y cardinalidad
        let inverse = (expr.inverse === true ? "^" : "");
        let name = inverse + this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(expr.predicate));

        if(!expr.valueExpr) {
            //Cualquier tipo: . (Wildcard)
            return this.createXMIPrimAttribute(name, "Any", expr.min, expr.max);
        }
        else if(expr.valueExpr.type === "NodeConstraint") {
            return this.checkNCValueExpr(expr, name, id, lop, cn);
        }
        //Referencia a otra Shape
        else if (expr.valueExpr.type === "ShapeRef") {
            return this.checkSRValueExpr(expr, name);
        }
        //Shape anidada -> subconjunto
        else if (expr.valueExpr.type === "Shape") {
            return this.checkShValueExpr(expr, name);
        }
        //ShapeAnd anidada
        else if (expr.valueExpr.type === "ShapeAnd" || expr.valueExpr.type === "ShapeOr") {
            return this.checkNSValueExpr(expr, cn);
        }
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo NodeConstraint
     * @param expr  Expresión
     * @param name  Nombre del futuro atributo XMI
     * @param id    ID
     * @param lop   Operación logica (AND, OR)
     * @returns {*} Equivalente XMI
     */
    checkNCValueExpr(expr, name, id, lop, cn) {
		if(lop === "OR") {
			expr.min = 0; //El atributo sera opcional si formaba parte de una ShapeOR
		}
        //Conjunto de valores -> enumeración
        if(expr.valueExpr.values) {
            //Relación de tipo "a" ( a [:User]) -> generalización XMI
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.values[0]}];
                return this.createXMIGeneralization(list, expr.inverse, null, "a");
            }
			else if (expr.valueExpr.values.length === 1 && !expr.valueExpr.values[0].type) {
				return this.createXMIPrimAttribute(name, expr.valueExpr.values[0], expr.min, expr.max,
                expr.valueExpr, id);
			}
            return this.xmienum.createXMIEnumAttribute(name, expr.valueExpr.values, expr.min, expr.max, id, cn);
        }
        //Tipo de nodo (Literal, IRI...) -> Atributo con tal tipo
        if(expr.valueExpr.nodeKind) {
            return this.xmiprim.createXMIKindAttribute(name, expr.valueExpr.nodeKind, expr.min, expr.max, id);
        }
        //Tipo de dato -> atributo común
        if(expr.valueExpr.datatype) {
            return this.createXMIPrimAttribute(name, expr.valueExpr.datatype, expr.min, expr.max,
                expr.valueExpr, id);
        }
		if(expr.valueExpr.pattern) {
			return this.createXMIPrimAttribute(name, "any", expr.min, expr.max,
                expr.valueExpr, id);
		}
        //Comprobamos las facetas, que generan restricciones
        if(lop !== "OR") { //Si es una operacion lógica, se generará un atributo aparte, asi que hemos de evitar que se replique innecesariamente
			this.xmicon.checkFacets(expr.valueExpr, id, lop);
		}
		
		if(lop === "AND") {
			return "";
		}
        return this.createXMIPrimAttribute(name, "any", expr.min, expr.max,
                expr.valueExpr, id);;
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo ShapeRef
     * @param expr  Expresión
     * @param name  Nombre del futuro atributo XMI
     * @returns {*} Equivalente XMI
     */
    checkSRValueExpr(expr, name) {
        //Generalización
        if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            let list = [{reference: expr.valueExpr.reference}];
            return this.createXMIGeneralization(list, expr.inverse, null, "a");
        }
        //Asociación
        return this.xmiasoc.createXMIAsocAttribute(name, expr.valueExpr.reference, expr.min, expr.max);
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo Shape
     * @param expr  Expresión
     * @param name  Nombre del futuro atributo XMI
     * @returns {*} Equivalente XMI
     */
    checkShValueExpr(expr, name) {
        this.shm.incrementBlank();
        let ref = "_:" + this.shm.getCurrentBlank();
        return this.createComponent(name, ref, expr.valueExpr.expression, expr.min, expr.max);
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo ShapeAnd o ShapeOr
     * @param expr  Expresión
	 * @param cn  Nombre de la clase
     * @returns {*} Equivalente XMI
     */
    checkNSValueExpr(expr,cn) {
        let and = "";
		let id = this.unid();
        for(let i = 0; i < expr.valueExpr.shapeExprs.length; i++) {
            let xp = {
                predicate: expr.predicate,
                valueExpr: expr.valueExpr.shapeExprs[i]
            };
            if(expr.valueExpr.type === "ShapeOr") {
				id = this.unid();
                and += this.determineTypeOfExpression(xp, id, "OR", cn);
            }
            else {
                and += this.determineTypeOfExpression(xp, id, "AND");
            }
        }
        return and;
    }

    /**
     * Refiere a XMIPrimAttributes para generar un atributo primitivo
     * @param name  Nombre
     * @param type  Tipo
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @param valueExpr Valor de la expresión
     * @param id    ID
     * @returns {*} Atributo XMI
     */
    createXMIPrimAttribute(name, type, min, max, valueExpr, id) {
        return this.xmiprim.createXMIPrimAttribute(name, type, min, max, valueExpr, id);
    }

    /**
     * Refiere a XMIPrimAttributes para generar un atributo de tipo nodal
     * @param name  Nombre
     * @param kind  Tipo -IRI, Literal...-
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @param id    ID
     * @returns {*} Atributo XMI
     */
    createXMIKindAttribute(name, kind, min, max, id) {
        return this.xmiprim.createXMIKindAttribute(name, kind, min, max, id);
    }

    /**
     * Crea una generalización -relación de herencia- en XMI
     * @param parents   Padres de la clase
     * @param inv   Relación inversa
     * @param idF   ID del padre
     * @param nm   Nombre de la generalización
     * @returns {string}    Generalización XMI
     */
    createXMIGeneralization(parents, inv, idF, nm) {
        let gens = "";
        let name = (inv ? "^" : "") + (nm === undefined ? "" : nm);
        for(let parent in parents) {
            if(parents.hasOwnProperty(parent)) {
                //Restricción tipo IRI, Literal...
                if(parents[parent].type === "NodeConstraint"){
                    //:CanVoteAge xsd:integer
                    if(parents[parent].datatype) {
                        gens += this.createXMIPrimAttribute("datatype", parents[parent].datatype,
                            undefined, undefined,
                            parents[parent], idF);
                    }
                    //Nodekind: :HomePage IRI
                    else if (parents[parent].nodeKind){
                        let nkName = nm === "OR" ? "OR nodeKind" : "nodeKind";
                        gens += this.createXMIKindAttribute(nkName,
                            parents[parent].nodeKind)
                    }
                    //Comprobar facetas
                    else {
                        this.xmicon.checkFacets(parents[parent], idF, nm);
                    }
                }
                //Generalización común
                else if(parents[parent].reference){
                    gens += this.createGenGivenShape(parents[parent].reference, true, name);
                }
                else {
                    for(let i = 0; i < parents[parent].length; i++) {
                        gens += this.createGenGivenShape(parents[parent][i], false, name);
                    }
                }

            }
        }
        return gens;
    }

    createGenGivenShape(shape, save, name) {
        let sh = this.shm.findShape(shape, save);
        let id = this.unid();
        return this.XMIAux.createGen(id, sh.id, name);
    }

    /**
     * Aumenta la profundidad en la operación
     */
    incrementDepth(){
        this.depth++;
    }

    /**
     * Disminuye la profundidad en la operación
     */
    decrementDepth() {
        if(this.depth > 0) {
            this.depth--;
        }
    }

    /**
     * Genera componente dependientes en XMI.
     * @returns {string}    XMI de componentes
     */
    createDependentComponents() {
        return this.xmisub.createDependentComponents();
    }

    /**
     * Obtiene el número pertinente para un componente
     * @returns {string}    Nombre de la clase con número
     */
    getComponentNumber() {
        return this.xmisub.getComponentNumber();
    }

    createComponent(asocName, subClassName, expr, min, max, lop) {
        return this.xmisub.createComponent(asocName, subClassName, expr, min, max, lop);
    }

    /**
     * Resetea los registros
     */
    clear() {
        this.xmisub.clear();
    }

    /**
     * Crea las asociaciones pendientes para la clase que se acaba de generar
     * Acto seguido, resetea las pendientes
     * @param idcl  ID Clase actual
     * @returns {string}    Asociaciones XMI
     */
    createDependentAssociations(id) {
        return this.xmiasoc.createDependentAssociations(id);
    }

}
module.exports = XMIAttributes;