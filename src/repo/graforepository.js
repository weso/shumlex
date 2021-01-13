class GrafoRepository {

    /**
     * Caso "relaciones y otros atributos"
     */
    static getGrafo1() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": ":name",
                    "source": "1",
                    "target": "7"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": ":age ?",
                    "source": "1",
                    "target": "10"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ":gender",
                    "source": "1",
                    "target": "13"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": ":Male"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "",
                    "source": "13",
                    "target": "15"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": ":Female"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "",
                    "source": "13",
                    "target": "17"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": ":knows",
                    "source": "1",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": ":worksFor",
                    "source": "1",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": ":buys {1,10}",
                    "source": "1",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Ultrauser"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": "a",
                    "source": "2",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":Titanuser"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "a",
                    "source": "3",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "",
                    "source": "3",
                    "target": "25"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": "",
                    "source": "25",
                    "target": "24"
                }
            },
            {
                "data": {
                    "id": "28",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "30",
                    "name": ":titancode",
                    "source": "24",
                    "target": "28"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": ":Company"
                }
            },
            {
                "data": {
                    "id": "31",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "33",
                    "name": ":name",
                    "source": "4",
                    "target": "31"
                }
            },
            {
                "data": {
                    "id": "34",
                    "name": ":hasEmployee *",
                    "source": "4",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "35",
                    "name": ":possess {5,}",
                    "source": "4",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "<Product>"
                }
            },
            {
                "data": {
                    "id": "36",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "37",
                    "name": ":name",
                    "source": "5",
                    "target": "36"
                }
            },
            {
                "data": {
                    "id": "38",
                    "name": "xsd:boolean"
                }
            },
            {
                "data": {
                    "id": "40",
                    "name": ":sku",
                    "source": "5",
                    "target": "38"
                }
            },
            {
                "data": {
                    "id": "41",
                    "name": ":manufacturer +",
                    "source": "5",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "<Organization>"
                }
            },
            {
                "data": {
                    "id": "42",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "44",
                    "name": ":name",
                    "source": "6",
                    "target": "42"
                }
            },
            {
                "data": {
                    "id": "45",
                    "name": ":isPartOf ?",
                    "source": "6",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "46",
                    "name": ":hasDirectives {5}",
                    "source": "6",
                    "target": "1"
                }
            }
        ];
    }

    /**
     * Caso "herencia simple"
     */
    static getGrafo2() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": ":name",
                    "source": "1",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": ":age ?",
                    "source": "1",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Ultrauser"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "a",
                    "source": "2",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":Titanuser"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "a",
                    "source": "3",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "",
                    "source": "3",
                    "target": "14"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "",
                    "source": "14",
                    "target": "13"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": ":titancode",
                    "source": "13",
                    "target": "17"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": ":VIPUser"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "EXTRA"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "",
                    "source": "4",
                    "target": "20"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": "a"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "",
                    "source": "20",
                    "target": "22"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": "a",
                    "source": "4",
                    "target": "1"
                }
            }
        ];
    }

    /**
     * Caso "tipos de nodo"
     */
    static getGrafo3() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "IRI"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "",
                    "source": "1",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "",
                    "source": "1",
                    "target": "9"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "",
                    "source": "9",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ":name",
                    "source": "8",
                    "target": "12"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Ultrauser"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "Literal"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "",
                    "source": "2",
                    "target": "15"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": "",
                    "source": "2",
                    "target": "18"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "",
                    "source": "18",
                    "target": "17"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "a",
                    "source": "17",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":Titanuser"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": "a",
                    "source": "3",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "NonLiteral"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": "",
                    "source": "3",
                    "target": "23"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": "",
                    "source": "3",
                    "target": "26"
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "28",
                    "name": "",
                    "source": "26",
                    "target": "25"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "<Product>"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": "BNode"
                }
            },
            {
                "data": {
                    "id": "30",
                    "name": "",
                    "source": "4",
                    "target": "29"
                }
            },
            {
                "data": {
                    "id": "32",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "33",
                    "name": "",
                    "source": "4",
                    "target": "32"
                }
            },
            {
                "data": {
                    "id": "31",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "34",
                    "name": "",
                    "source": "32",
                    "target": "31"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "<AThing>"
                }
            },
            {
                "data": {
                    "id": "35",
                    "name": "IRI"
                }
            },
            {
                "data": {
                    "id": "36",
                    "name": "",
                    "source": "5",
                    "target": "35"
                }
            }
        ];
    }

    /**
     * Caso "facetas de literales"
     */
    static getGrafo4() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": "/[a-z]+/"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "Pattern",
                    "source": "2",
                    "target": "3"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": ":name",
                    "source": "1",
                    "target": "2"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": 18
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "MinInclusive",
                    "source": "6",
                    "target": "7"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": ":age ?",
                    "source": "1",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": 3
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "TotalDigits",
                    "source": "10",
                    "target": "11"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": ":c",
                    "source": "1",
                    "target": "10"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": 4
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "FractionDigits",
                    "source": "14",
                    "target": "15"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": ":d",
                    "source": "1",
                    "target": "14"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": 6
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "Length",
                    "source": "18",
                    "target": "19"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": ":e",
                    "source": "1",
                    "target": "18"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": 3
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": "MinLength",
                    "source": "22",
                    "target": "23"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": ":f",
                    "source": "1",
                    "target": "22"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": 15
                }
            },
            {
                "data": {
                    "id": "28",
                    "name": "MaxLength",
                    "source": "26",
                    "target": "27"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": ":g",
                    "source": "1",
                    "target": "26"
                }
            }
        ];
    }

    /**
     * Caso "rangos y exclusiones"
     */
    static getGrafo5() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":Product"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":status",
                    "source": "1",
                    "target": "2"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "codes:~ "
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "",
                    "source": "2",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "codes:unknown"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "-",
                    "source": "4",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "codes:bad.~"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "-",
                    "source": "4",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "111"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "",
                    "source": "2",
                    "target": "10"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": ":phone",
                    "source": "1",
                    "target": "12"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": "+34~ "
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "",
                    "source": "12",
                    "target": "14"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "+3468031"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": "-",
                    "source": "14",
                    "target": "16"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "+3467182~"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": "-",
                    "source": "14",
                    "target": "18"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": ":quantity",
                    "source": "1",
                    "target": "20"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": "99~ "
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "",
                    "source": "20",
                    "target": "22"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": "9987"
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": "-",
                    "source": "22",
                    "target": "24"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "991~"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": "-",
                    "source": "22",
                    "target": "26"
                }
            },
            {
                "data": {
                    "id": "28",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": ":url",
                    "source": "1",
                    "target": "28"
                }
            },
            {
                "data": {
                    "id": "30",
                    "name": "codes:Personal~"
                }
            },
            {
                "data": {
                    "id": "31",
                    "name": "",
                    "source": "28",
                    "target": "30"
                }
            }
        ];
    }

    /**
     * Caso "conjuntos genéricos con exclusiones"
     */
    static getGrafo6() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":Product"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":status",
                    "source": "1",
                    "target": "2"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "",
                    "source": "2",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "codes:bad"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "-",
                    "source": "4",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": ":name",
                    "source": "1",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "",
                    "source": "8",
                    "target": "10"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "Trademark"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": "-",
                    "source": "10",
                    "target": "12"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": ":price",
                    "source": "1",
                    "target": "14"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": "",
                    "source": "14",
                    "target": "16"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "66"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": "-",
                    "source": "16",
                    "target": "18"
                }
            }
        ];
    }

    /**
     * Caso "etiquetas de lenguaje"
     */
    static getGrafo7() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":FrenchProduct"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": ":frlabel",
                    "source": "1",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "@fr"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "",
                    "source": "5",
                    "target": "7"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":EnglishProduct"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": ":enlabel",
                    "source": "2",
                    "target": "9"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "@en~ "
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "",
                    "source": "9",
                    "target": "11"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":SpanishProduct"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ":splabel",
                    "source": "3",
                    "target": "13"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "@es~ "
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "",
                    "source": "13",
                    "target": "15"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": "@es-AR"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "-",
                    "source": "15",
                    "target": "17"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": "@es-ES"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "-",
                    "source": "15",
                    "target": "19"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": ":AnyProduct"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": ":label",
                    "source": "4",
                    "target": "21"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": "",
                    "source": "21",
                    "target": "23"
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": "@kz"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "-",
                    "source": "23",
                    "target": "25"
                }
            }
        ];
    }

    /**
     * Caso "cardinalidades aplicadas a conjuntos"
     */
    static getGrafo8() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": ":name",
                    "source": "1",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "EachOf  ?",
                    "source": "1",
                    "target": "7"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": ":givenName",
                    "source": "7",
                    "target": "9"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ":familyName",
                    "source": "7",
                    "target": "12"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "EachOf  *",
                    "source": "1",
                    "target": "15"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": ":has {2,}",
                    "source": "15",
                    "target": "3"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": ":c",
                    "source": "15",
                    "target": "18"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": ":owns",
                    "source": "1",
                    "target": "2"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Garage"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "EachOf  +",
                    "source": "2",
                    "target": "22"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "<AE86>",
                    "source": "22",
                    "target": "24"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "28",
                    "name": "EachOf  ?",
                    "source": "22",
                    "target": "27"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "31",
                    "name": "<Levin>",
                    "source": "27",
                    "target": "29"
                }
            },
            {
                "data": {
                    "id": "32",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "34",
                    "name": "<Cilinders>",
                    "source": "27",
                    "target": "32"
                }
            },
            {
                "data": {
                    "id": "35",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "36",
                    "name": "EachOf  ?",
                    "source": "22",
                    "target": "35"
                }
            },
            {
                "data": {
                    "id": "37",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "39",
                    "name": "<Trueno>",
                    "source": "35",
                    "target": "37"
                }
            },
            {
                "data": {
                    "id": "40",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "42",
                    "name": "<Cilinders>",
                    "source": "35",
                    "target": "40"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": "<Something>"
                }
            }
        ];
    }

    /**
     * Caso "OneOf"
     */
    static getGrafo9() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "OneOf ",
                    "source": "1",
                    "target": "3"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": ":name",
                    "source": "3",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "EachOf ",
                    "source": "3",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": ":givenName +",
                    "source": "8",
                    "target": "10"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": ":familyName",
                    "source": "8",
                    "target": "13"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Car"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": ":model",
                    "source": "2",
                    "target": "16"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "OneOf  {1,2}",
                    "source": "2",
                    "target": "19"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": ":turbo",
                    "source": "19",
                    "target": "21"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": ":misfiring",
                    "source": "19",
                    "target": "24"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": ":atm",
                    "source": "19",
                    "target": "27"
                }
            }
        ];
    }

    /**
     * Caso "formas anidadas"
     */
    static getGrafo10() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":Car"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": ":name",
                    "source": "1",
                    "target": "7"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": ":belongs",
                    "source": "1",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Garage"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": ":name",
                    "source": "3",
                    "target": "11"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": ":worksFor",
                    "source": "3",
                    "target": "14"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "a",
                    "source": "14",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": ":Company"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": ":GreatGrandson"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": ":parent",
                    "source": "5",
                    "target": "17"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": ":parent",
                    "source": "17",
                    "target": "19"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": ":parent +",
                    "source": "19",
                    "target": "21"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "_:1"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "a",
                    "source": "6",
                    "target": "2"
                }
            }
        ];
    }

    /**
     * Caso "formas cerradas"
     */
    static getGrafo11() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": "IRI"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "",
                    "source": "1",
                    "target": "3"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "",
                    "source": "1",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "",
                    "source": "6",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "CLOSED"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "",
                    "source": "5",
                    "target": "9"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": 3
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": "MaxLength",
                    "source": "11",
                    "target": "12"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ":name",
                    "source": "5",
                    "target": "11"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "xsd:int"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": ":age ?",
                    "source": "5",
                    "target": "15"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": ":gender",
                    "source": "5",
                    "target": "18"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": ":Male"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "",
                    "source": "18",
                    "target": "20"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": ":Female"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": "",
                    "source": "18",
                    "target": "22"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": ":knows",
                    "source": "5",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Company"
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": "CLOSED"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "",
                    "source": "2",
                    "target": "25"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": ":name",
                    "source": "2",
                    "target": "27"
                }
            }
        ];
    }

    /**
     * Caso "restricción triple inversa"
     */
    static getGrafo12() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":Person"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "^a",
                    "source": "2",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "^:name",
                    "source": "2",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "^:gender",
                    "source": "2",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": ":Male"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "",
                    "source": "8",
                    "target": "10"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": ":Female"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": "",
                    "source": "8",
                    "target": "12"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":Company"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": "^:worksFor +",
                    "source": "3",
                    "target": "2"
                }
            }
        ];
    }

    /**
     * Caso "EXTRA"
     */
    static getGrafo13() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":FollowSpaniards"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": "EXTRA"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": "",
                    "source": "1",
                    "target": "2"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": ":follows"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "",
                    "source": "2",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": ":follows +",
                    "source": "1",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "values"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": ":nationality",
                    "source": "6",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": ":Spain"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "",
                    "source": "8",
                    "target": "10"
                }
            }
        ];
    }

    /**
     * Caso "expresiones etiquetadas"
     */
    static getGrafo14() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": "$:name ",
                    "source": "1",
                    "target": "3"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "OneOf ",
                    "source": "3",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": ":name",
                    "source": "5",
                    "target": "7"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "expressions"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": "EachOf ",
                    "source": "5",
                    "target": "9"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": ":givenName",
                    "source": "9",
                    "target": "11"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ":familyName",
                    "source": "9",
                    "target": "13"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "IRI"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": ":email",
                    "source": "1",
                    "target": "15"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Employee"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": "&:name ",
                    "source": "2",
                    "target": "3"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "."
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": ":employeeId",
                    "source": "2",
                    "target": "18"
                }
            }
        ];
    }

    /**
     * Caso "conjunciones"
     */
    static getGrafo15() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "",
                    "source": "1",
                    "target": "6"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "",
                    "source": "6",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "9",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": ":name",
                    "source": "5",
                    "target": "9"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": "IRI"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": ":owns",
                    "source": "5",
                    "target": "12"
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": "",
                    "source": "6",
                    "target": "14"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": ":owns",
                    "source": "14",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Titanuser"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": "a",
                    "source": "2",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "",
                    "source": "2",
                    "target": "19"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "",
                    "source": "19",
                    "target": "18"
                }
            },
            {
                "data": {
                    "id": "22",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": ":titancode",
                    "source": "18",
                    "target": "22"
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "",
                    "source": "19",
                    "target": "25"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": "Literal"
                }
            },
            {
                "data": {
                    "id": "28",
                    "name": ":owns",
                    "source": "25",
                    "target": "27"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":Ultrauser"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": "Literal"
                }
            },
            {
                "data": {
                    "id": "30",
                    "name": "",
                    "source": "3",
                    "target": "29"
                }
            },
            {
                "data": {
                    "id": "32",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "33",
                    "name": "",
                    "source": "3",
                    "target": "32"
                }
            },
            {
                "data": {
                    "id": "31",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "34",
                    "name": "",
                    "source": "32",
                    "target": "31"
                }
            },
            {
                "data": {
                    "id": "35",
                    "name": "a",
                    "source": "31",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": ":Product"
                }
            },
            {
                "data": {
                    "id": "36",
                    "name": "AND"
                }
            },
            {
                "data": {
                    "id": "37",
                    "name": ":productId",
                    "source": "4",
                    "target": "36"
                }
            },
            {
                "data": {
                    "id": "38",
                    "name": 5
                }
            },
            {
                "data": {
                    "id": "39",
                    "name": "MinLength",
                    "source": "36",
                    "target": "38"
                }
            },
            {
                "data": {
                    "id": "40",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "41",
                    "name": "datatype",
                    "source": "36",
                    "target": "40"
                }
            },
            {
                "data": {
                    "id": "42",
                    "name": 10
                }
            },
            {
                "data": {
                    "id": "43",
                    "name": "MaxLength",
                    "source": "36",
                    "target": "42"
                }
            }
        ];
    }

    /**
     * Caso "disyunciones"
     */
    static getGrafo16() {
        return [
            {
                "data": {
                    "id": "1",
                    "name": ":User"
                }
            },
            {
                "data": {
                    "id": "5",
                    "name": "OR"
                }
            },
            {
                "data": {
                    "id": "6",
                    "name": "",
                    "source": "1",
                    "target": "5"
                }
            },
            {
                "data": {
                    "id": "4",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "7",
                    "name": "",
                    "source": "5",
                    "target": "4"
                }
            },
            {
                "data": {
                    "id": "8",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "10",
                    "name": ":name",
                    "source": "4",
                    "target": "8"
                }
            },
            {
                "data": {
                    "id": "11",
                    "name": "IRI"
                }
            },
            {
                "data": {
                    "id": "12",
                    "name": ":owns",
                    "source": "4",
                    "target": "11"
                }
            },
            {
                "data": {
                    "id": "13",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "14",
                    "name": "",
                    "source": "5",
                    "target": "13"
                }
            },
            {
                "data": {
                    "id": "15",
                    "name": ":owns",
                    "source": "13",
                    "target": "3"
                }
            },
            {
                "data": {
                    "id": "2",
                    "name": ":Titanuser"
                }
            },
            {
                "data": {
                    "id": "16",
                    "name": "OR",
                    "source": "2",
                    "target": "1"
                }
            },
            {
                "data": {
                    "id": "18",
                    "name": "OR"
                }
            },
            {
                "data": {
                    "id": "19",
                    "name": "",
                    "source": "2",
                    "target": "18"
                }
            },
            {
                "data": {
                    "id": "17",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "20",
                    "name": "",
                    "source": "18",
                    "target": "17"
                }
            },
            {
                "data": {
                    "id": "21",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "23",
                    "name": ":titancode",
                    "source": "17",
                    "target": "21"
                }
            },
            {
                "data": {
                    "id": "24",
                    "name": ""
                }
            },
            {
                "data": {
                    "id": "25",
                    "name": "",
                    "source": "18",
                    "target": "24"
                }
            },
            {
                "data": {
                    "id": "26",
                    "name": "Literal"
                }
            },
            {
                "data": {
                    "id": "27",
                    "name": ":owns",
                    "source": "24",
                    "target": "26"
                }
            },
            {
                "data": {
                    "id": "3",
                    "name": ":Product"
                }
            },
            {
                "data": {
                    "id": "28",
                    "name": "OR"
                }
            },
            {
                "data": {
                    "id": "29",
                    "name": ":productId",
                    "source": "3",
                    "target": "28"
                }
            },
            {
                "data": {
                    "id": "31",
                    "name": "xsd:string"
                }
            },
            {
                "data": {
                    "id": "32",
                    "name": "datatype",
                    "source": "28",
                    "target": "31"
                }
            },
            {
                "data": {
                    "id": "33",
                    "name": 5
                }
            },
            {
                "data": {
                    "id": "34",
                    "name": "MinLength",
                    "source": "28",
                    "target": "33"
                }
            },
            {
                "data": {
                    "id": "35",
                    "name": 10
                }
            },
            {
                "data": {
                    "id": "36",
                    "name": "MaxLength",
                    "source": "28",
                    "target": "35"
                }
            }
        ];
    }
	
	static getGrafo17() {
		return [
  {
    "data": {
      "id": 1,
      "name": ":User"
    }
  },
  {
    "data": {
      "id": 4,
      "name": "xsd:string"
    }
  },
  {
    "data": {
      "id": 6,
      "name": ":name",
      "source": 1,
      "target": 4
    }
  },
  {
    "data": {
      "id": 7,
      "name": "xsd:date"
    }
  },
  {
    "data": {
      "id": 9,
      "name": ":birthDate ?",
      "source": 1,
      "target": 7
    }
  },
  {
    "data": {
      "id": 2,
      "name": ":NoUser"
    }
  },
  {
    "data": {
      "id": 10,
      "name": "NOT",
      "source": 2,
      "target": 1
    }
  },
  {
    "data": {
      "id": 3,
      "name": ":NoName"
    }
  },
  {
    "data": {
      "id": 11,
      "name": ""
    }
  },
  {
    "data": {
      "id": 12,
      "name": "NOT",
      "source": 3,
      "target": 11
    }
  },
  {
    "data": {
      "id": 13,
      "name": "xsd:string"
    }
  },
  {
    "data": {
      "id": 15,
      "name": ":name",
      "source": 11,
      "target": 13
    }
  }
];
	}



}
module.exports = GrafoRepository;