class Prefix {

    constructor () {
		this.prefixes = null;
		this.base = "http://example.org/";
    }
	
	getPrefixed(iri) {
		let res = iri;
		this.prefixes.forEach((value,key) => {
			if(iri.includes(key)) {
                res = value + ":" + iri.replace(key, "");
            }
		});
		let keyChars = ['_', '$', '&'];
		if(res === iri && !keyChars.includes(res.charAt(0))) { //No existe en los registros, sea base pues
			res = "<" + iri.replace(this.base, "") + ">";
		}
        return res;
	}
	
	reset() {
		this.prefixes = null;
	}
	

}
module.exports = Prefix;