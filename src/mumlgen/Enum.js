class Enum {

    constructor (pr) {
		this.pr = pr;
    }
	
	createEnumeration(values) {
        let pValues = [];
        //Comprobamos cada uno de los valores
        for(let j = 0; j < values.length; j++) {
            //Valor común: "1453", 12, IRI
            if(values[j].value !== undefined) {
                if(values[j].type === undefined) {
                    pValues.push("&cita;" + values[j].value + "&cita;");
                }
                else {
                    pValues.push(values[j].value);
                }

            }
            //LiteralStem - "1453"~
            else if(values[j].type === "LiteralStem") {
                pValues.push("&cita;" + values[j].stem + "&cita;" + "*>");
            }
            //IRIStem - wo:~
            else if(values[j].type === "IriStem") {
                pValues.push(this.pr.getPrefixed(values[j].stem) + "*>");
            }
            //IRIStemRange - wo:~ - wo:lo
            else if(values[j].type === "IriStemRange") {
                pValues.push(this.checkStemRange(values[j], "IriStem"));
            }
            //LiteralStemRange - "aa"~ - "aab"
            else if(values[j].type === "LiteralStemRange") {
                pValues.push(this.checkStemRange(values[j], "LiteralStem"));
            }
            //Etiqueta de lenguaje: @es
            else if(values[j].type === "Language") {
                pValues.push("@" + values[j].languageTag + " ");
            }
            //LanguageStem: @es~
            else if(values[j].type === "LanguageStem") {
                pValues.push("@" + values[j].stem + "*> ");
            }
            //LanguageStemRange: @es~ - @es-AR
            else if(values[j].type === "LanguageStemRange") {
                pValues.push(this.checkStemRange(values[j], "LanguageStem"));
            }
            //vl de tipo IRI
            else {
                pValues.push(this.pr.getPrefixed(values[j]));
            }
        }
        return pValues;
    }
	
	checkStemRange(vl, type) {
        let value = "";
        // Stem del tipo . - wo:lolo "14"
        if(vl.stem.type === "Wildcard") {
            value = ". ";
        }
        else {
            switch(type) {
                //Obtenemos el término prefijado de la IRI
                case "IriStem":
                    value =  this.pr.getPrefixed(vl.stem) + "*> ";
                    break;
                //Representamos el literal sin cambios
                case "LiteralStem":
                    value = this.checkLiteralStem(vl.stem) + "*> ";
                    break;
                //Añadimos @
                case "LanguageStem":
                    value = "@" + vl.stem + "*> ";
                    break;
            }
        }

        //Generamos las exclusiones, como nodos hijos del stem
        //La relación se llama "-"
        for(let k = 0; k < vl.exclusions.length; k++) {
            let excl = vl.exclusions[k];
            //La exclusión es asimismo un stem (- codes:bad.~)
            //El valor está en excl.stem y se añade un ~
            if(excl.type === type) {
                switch(type) {
                    case "IriStem":
                        value += "- " + this.pr.getPrefixed(excl.stem) + "*> ";
                        break;
                    case "LiteralStem":
                        value += "- " + this.checkLiteralStem(excl.stem) + "*> ";
                        break;
                    case "LanguageStem":
                        value += "- @" + excl.stem + "*> ";
                        break;
                }
            }
            //La exclusión es un valor simple; el valor es excl
            else {
                switch(type) {
                    case "IriStem":
                        value += "- " + this.pr.getPrefixed(excl) + " ";
                        break;
                    case "LiteralStem":
                        value += "- " + this.checkLiteralStem(excl) + " ";
                        break;
                    case "LanguageStem":
                        value += "- @" + excl + " ";
                        break;
                }
            }
        }
        return value;
    }
	
	checkLiteralStem(txt) {
        if(/^([0-9]+(\.[0-9]+)?)$/.test(txt)) {
            return txt;
        }
        else {
            return "&cita;" + txt+ "&cita;";
        }
    }
	
	reset() {
	}
	

}
module.exports = Enum;