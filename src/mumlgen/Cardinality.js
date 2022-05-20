class Cardinality {
	
	static cardinalityOf(expr) {
        let lowerValue = expr.min !== undefined ? expr.min : 1;
        let upperValue = expr.max !== undefined ? expr.max : 1;
        switch(lowerValue){
            case 1:
                if(upperValue === 1) {
                    return ""
                }
                else if (upperValue === Infinity || upperValue === -1) {
                    return " +"
                }
                else {
                    return " -//1," + upperValue + "//-"
                }
            case 0:
                if(upperValue === 1) {
                    return " ?"
                }
                else if (upperValue === Infinity || upperValue === -1) {
                    return " *"
                }
                else {
                    return " -//0, " + upperValue + "//-"
                }
            default:    //Mayor de 1
                if(upperValue === lowerValue) {
                    return " -//" + lowerValue + "//-"
                }
                else if (upperValue === Infinity || upperValue === -1) {
                    return " -//" + lowerValue + ",//-"
                }
                else {
                    return " -//" + lowerValue + ", " + upperValue + "//-"
                }
        }
    }

}
module.exports = Cardinality;