class Constraint {
	
	constructor (pr) {
		this.pr = pr;
    }

    checkFacets(vex) {
        let facets = [];
        if(!vex) {
            return "";
        }
        if(vex.mininclusive) {
            facets.push(",MinInclusive," + vex.mininclusive);
        }
        if(vex.minexclusive) {
            facets.push(",MinExclusive," + vex.minexclusive);
        }
        if(vex.totaldigits) {
			facets.push(",TotalDigits," + vex.totaldigits);
        }
        if(vex.fractiondigits) {
			facets.push(",FractionDigits," + vex.fractiondigits);
        }
        if(vex.length) {
			facets.push(",Length," + vex.length);
        }
        if(vex.minlength) {
			facets.push(",MinLength," + vex.minlength);
        }
        if(vex.maxlength) {
			facets.push(",MaxLength," + vex.maxlength);
        }
        if(vex.pattern) {
			facets.push(",/" + vex.pattern + "/");
        }
		return facets.join("");
    }
	
	getExtra(values) {
        let vals = [];
        for(let i = 0; i < values.length; i++) {
            if(values[i] === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                vals.push("a");
            }
            else {
                vals.push(this.pr.getPrefixed(values[i]));
            }
        }
		return "EXTRA [ " + vals.join(" ") + " ]";
    }
	

}
module.exports = Constraint;