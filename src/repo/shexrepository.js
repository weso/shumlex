class ShExRepository {

    /**
     * Ejemplo base
     * @returns {string}
     */
    static getShex0() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:age xsd:int ?;
	:gender [:Male :Female];
	:knows @:User ;
	:worksFor @:Company ;
	:buys @<Product> {1,10};
}

:Ultrauser {
	a [:User];
}

:Titanuser @:User AND {
	:titancode xsd:string;
}

:Company {
	:name xsd:string ;
	:hasEmployee @:User *;
	:possess @<Product> {5,}
}

<Product> {
	:name .;
	:sku xsd:boolean ;
	:manufacturer @<Organization> +
}

<Organization> {
	:name xsd:string ;
	:isPartOf @<Organization> ?;
	:hasDirectives @:User {5}
}`;
    }

    /**
     * Shape
     * @returns {string}
     */
    static getShex1() {
        return `prefix : <https://schema.org/>
base <http://example.org/>

:User {
}

<TypeTest> {
}

`;
    }

    /**
     * Atributos básicos
     * @returns {string}
     */
    static getShex2() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:age xsd:int ?;
	:gender [:Male :Female ];
}

<TypeTest> {
	:z xsd:string;
	:b xsd:date;
	:c xsd:time;
	:d xsd:dateTime;
	:e xsd:duration;
	:f xsd:byte;
	:g xsd:decimal;
	:h xsd:int;
	:i xsd:integer;
	:j xsd:long;
	:k xsd:short;
	:l xsd:boolean;
	:m xsd:double;
	:n xsd:float;
	:xyz xsd:invent;
}

`;
    }

    /**
     * ShapeRef
     * @returns {string}
     */
    static getShex3() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:age xsd:int;
	:knows @:User;
	:worksFor @:Company;
	:buys @<Product> {1,10};
}

:Ultrauser {
	a [:User];
}

:Titanuser @:User AND {
	:titancode xsd:string;
}

:Company {
	:name xsd:string;
	:hasEmployee @:User *;
	:possess @<Product> {5,};
}

<Product> {
	:name .;
	:sku xsd:boolean;
	:manufacturer @<Organization> +;
}

<Organization> {
	:name xsd:string;
	:isPartOf @<Organization> ?;
	:hasDirectives @:User {5};
}

`;
    }

    /**
     * Herencia simple
     * @returns {string}
     */
    static getShex5() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:age xsd:int ?;
}

:Ultrauser {
	a [:User];
}

:Titanuser @:User AND {
	:titancode xsd:string;
}

:VIPUser EXTRA a { 
	a @:User; 
}

`;
    }

    /**
     * Herencia simple, ShEx generado
     * @returns {string}
     */
    static getGenShex5() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND {\n" +
            "\t:titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":VIPUser EXTRA a  {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n";
    }

    /**
     * Herencia múltiple
     * @returns {string}
     */
    static getShex6() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:age xsd:int ?;
}

<Citizen> {
	:id .;
}

:Ultrauser {
	a [:User];
	a [<Citizen>];
}

:Titanuser @:User AND @<Citizen> AND {
	:titancode xsd:string;
}

:VIPUser EXTRA a { 
	a @:User; 
	a @<Citizen>;
}

`;
    }

    /**
     * Herencia múltiple, ShEx generado
     * @returns {string}
     */
    static getGenShex6() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "}\n" +
            "\n" +
            "<Citizen> {\n" +
            "\t:id .;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser {\n" +
            "\ta [:User];\n" +
            "\ta [<Citizen>];\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND @<Citizen> AND {\n" +
            "\t:titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":VIPUser EXTRA a  {\n" +
            "\ta [:User];\n" +
            "\ta [<Citizen>];\n" +
            "}\n" +
            "\n";
    }

    /**
     * Tipos de nodo
     * @returns {string}
     */
    static getShex7() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User IRI {
	:name xsd:string;
}

:Ultrauser Literal AND {
	a [:User];
}

:Titanuser @:User AND NonLiteral AND {
}

<Product> BNode AND {
}

<AThing> IRI

`;
    }

    /**
     * Facetas de literales
     * @returns {string}
     */
    static getShex9() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string /[a-z]+/;
	:age xsd:int MinInclusive 18 ?;
	:c xsd:int TotalDigits 3;
	:d xsd:int FractionDigits 4;
	:e xsd:string Length 6;
	:f xsd:string MinLength 3;
	:g xsd:string MaxLength 15;
}

`;
    }

    /**
     * Rangos y exclusiones
     * @returns {string}
     */
    static getShex10() {
        return `prefix : <https://schema.org/>
prefix codes: <http://example.codes/>
base <http://example.org/>

:Product {
	:status [codes:~ - codes:unknown - codes:bad.~  "111" ];
	:phone ["+34"~ - "+3468031" - "+3467182"~  ];
	:quantity [99~ - 9987 - 991~  ];
	:url [codes:Personal~ ];
}

`;
    }

    /**
     * Conjuntos genéricos con exclusiones
     * @returns {string}
     */
    static getShex11() {
        return `prefix codes: <http://example.codes/>
prefix : <http://schema.org/>
base <http://example.org/>

:Product {
	:status [. - codes:bad  ];
	:name [. - "Trademark"  ];
	:price [. - 66  ];
}

`;
    }

    /**
     * Restricciones nodales como forma de máximo nivel
     * @returns {string}
     */
    static getShex12() {
        return `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
prefix : <http://schema.org/>
base <http://example.org/>

:HomePage IRI

:CanVoteAge xsd:integer MinInclusive 18 AND TotalDigits 3

:Special :custom

`;
    }

    /**
     * Etiquetas de lenguaje
     * @returns {string}
     */
    static getShex13() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:FrenchProduct {
	:frlabel [@fr  ];
}

:EnglishProduct {
	:enlabel [@en~  ];
}

:SpanishProduct {
	:splabel [@es~ - @es-AR - @es-ES  ];
}

:AnyProduct {
	:label [. - @kz  ];
}

`;
    }

    /**
     * Cardinalidades aplicadas a conjuntos
     * @returns {string}
     */
    static getShex14() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "( \n" +
            "\t:givenName xsd:string;\n" +
            "\t:familyName xsd:string; ) ? ;\n" +
            "( \n" +
            "\t:has @<Something> {2,};\n" +
            "\t:c xsd:string; ) * ;\n" +
            "\t:owns @:Garage;\n" +
            "}\n" +
            "\n" +
            ":Garage {\n" +
            "( \n" +
            "\t<AE86> xsd:string;\n" +
            "( \n" +
            "\t<Levin> xsd:string;\n" +
            "\t<Cilinders> xsd:int; ) ? ;\n" +
            "( \n" +
            "\t<Trueno> xsd:string;\n" +
            "\t<Cilinders> xsd:int; ) ? ; ) + ;\n" +
            "}\n" +
            "\n" +
            "<Something> {\n" +
            "}\n" +
            "\n";
    }

    static getGenShex14() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
( 
	:givenName xsd:string;
	:familyName xsd:string; ) ? ;
( 
	:has @<Something> {2,};
	:c xsd:string; ) * ;
	:owns @:Garage;
}

:Garage {
( 
	<AE86> xsd:string;
( 
	<Levin> xsd:string;
	<Cilinders> xsd:int; ) ? ;
( 
	<Trueno> xsd:string;
	<Cilinders> xsd:int; ) ? ; ) + ;
}

<Something> {
}
`;
    }

    /**
     * OneOf
     * @returns {string}
     */
    static getShex15() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string; |
(
	:givenName xsd:string +;
	:familyName xsd:string; );
}

:Car {
	:model xsd:string;
 (
	:turbo xsd:string; |
	:misfiring xsd:string; |
	:atm xsd:string;)  {1,2};
}

`;
    }

    /**
     * Formas anidadas
     * @returns {string}
     */
    static getShex16() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:Car {
	:name xsd:string;
	:belongs @_:1;
}

:Garage {
}

:User {
	:name xsd:string;
	:worksFor {	
	a [:Company];
};
}

:Company {
}

:GreatGrandson {
	:parent {
	:parent {
	:parent . +;
};
};
}

_:1 {
	a [:Garage];
}

`;
    }

    /**
     * Formas cerradas
     * @returns {string}
     */
    static getShex17() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User IRI CLOSED {
	:name xsd:string MaxLength 3;
	:age xsd:int ?;
	:gender [:Male :Female ];
	:knows @:User;
}

:Company CLOSED {
	:name xsd:string;
}

`;
    }

    /**
     * Propiedades repetidas
     * @returns {string}
     */
    static getShex18() {
        return `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
prefix : <https://schema.org/>
base <http://example.org/>

:User {
	:name xsd:string;
	:parent {
	:gender [:Male ];
};
	:parent {
	:gender [:Female ];
};
}

`;
    }

    /**
     * Restricción triple inversa
     * @returns {string}
     */
    static getShex19() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:Person {
}

:User {
	^a [:Person];
	^:name xsd:string;
	^:gender [:Male :Female ];
}

:Company {
	^:worksFor @:User +;
}

`;
    }

    /**
     * EXTRA
     * @returns {string}
     */
    static getShex20() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:FollowSpaniards EXTRA :follows  {
	:follows {
	:nationality [:Spain ];
} +;
}

`;
    }

    /**
     * Expresiones etiquetadas
     * @returns {string}
     */
    static getShex21() {
        // noinspection CheckDtdRefs
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	$:name (
	:name .; |
(
	:givenName .;
	:familyName .; );) ;
	:email IRI;
}

:Employee {
	&:name;
	:employeeId .;
}

`
    }

    static getGenShex21() {
        // noinspection CheckDtdRefs
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:email IRI;\n" +
            "\t$:name (\n" +
            "\t:name .; |\n" +
            "(\n" +
            "\t:givenName .;\n" +
            "\t:familyName .; );) ;\n" +
            "}\n" +
            "\n" +
            ":Employee {\n" +
            "\t:employeeId .;\n" +
            "\t&:name;\n" +
            "}\n" +
            "\n"
    }

    /**
     * Conjunciones
     * @returns {string}
     */
    static getShex22() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:owns IRI; }
AND {
	:owns @:Product;
}

:Titanuser @:User AND {
	:titancode xsd:string; }
AND {
	:owns Literal;
}

:Ultrauser Literal AND {
	a [:User];
}

:Product {
	:productId xsd:string MinLength 5 AND MaxLength 10;
}

`;
    }

    /**
     * Disyunciones
     * @returns {string}
     */
    static getShex23() {
        return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:owns IRI; }
OR {
	:owns @:Product;
}

:Titanuser @:User OR {
	:titancode xsd:string; }
OR {
	:owns Literal;
}

:Product {
	:productId xsd:string OR MinLength 5 OR MaxLength 10;
}

`;
    }
	
	static getShex24() {
		return `prefix : <https://schema.org/>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>

:User {
	:name xsd:string;
	:birthDate xsd:date ?;
}

:NoUser Not @:User

:NoName Not {
	:name xsd:string;
}

`;
	}

}
module.exports = ShExRepository;