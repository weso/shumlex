class ShExRepository {

    /**
     * Ejemplo base
     * @returns {string}
     */
    static getShex0() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "    :name xsd:string;\n" +
            "    :age xsd:int ?;\n" +
            "    :gender [:Male :Female];\n" +
            "    :knows @:User ;\n" +
            "    :worksFor @:Company ;\n" +
            "    :buys @<Product> {1,10};\n" +
            "}\n" +
            "\n" +
            ":Ultrauser {\n" +
            "    a [:User];\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND {\n" +
            "    :titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":Company {\n" +
            "    :name xsd:string ;\n" +
            "    :hasEmployee @:User *;\n" +
            "    :possess @<Product> {5,}\n" +
            "}\n" +
            "\n" +
            "<Product> {\n" +
            "    :name .;\n" +
            "    :sku xsd:boolean ;\n" +
            "    :manufacturer @<Organization> +\n" +
            "}\n" +
            "\n" +
            "<Organization> {\n" +
            "    :name xsd:string ;\n" +
            "    :isPartOf @<Organization> ?;\n" +
            "    :hasDirectives @:User {5}\n" +
            "}";
    }

    /**
     * Shape
     * @returns {string}
     */
    static getShex1() {
        return "prefix : <https://schema.org/>\n" +
            "base <http://example.org/>\n\n"
            + ":User {\n" +
            "}\n\n"
            + "<TypeTest> {\n" +
            "}\n\n";
    }

    /**
     * Atributos básicos
     * @returns {string}
     */
    static getShex2() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n\n"
            + ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "\t:gender [:Male :Female ];\n" +
            "}\n\n"
            + "<TypeTest> {\n" +
            "\t:z xsd:string;\n" +
            "\t:b xsd:date;\n" +
            "\t:c xsd:time;\n" +
            "\t:d xsd:dateTime;\n" +
            "\t:e xsd:duration;\n" +
            "\t:f xsd:byte;\n" +
            "\t:g xsd:decimal;\n" +
            "\t:h xsd:int;\n" +
            "\t:i xsd:integer;\n" +
            "\t:j xsd:long;\n" +
            "\t:k xsd:short;\n" +
            "\t:l xsd:boolean;\n" +
            "\t:m xsd:double;\n" +
            "\t:n xsd:float;\n" +
            "\t:xyz xsd:invent;\n" +
            "}\n\n";
    }

    /**
     * ShapeRef
     * @returns {string}
     */
    static getShex3() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int;\n" +
            "\t:knows @:User;\n" +
            "\t:worksFor @:Company;\n" +
            "\t:buys @<Product> {1,10};\n" +
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
            ":Company {\n" +
            "\t:name xsd:string;\n" +
            "\t:hasEmployee @:User *;\n" +
            "\t:possess @<Product> {5,};\n" +
            "}\n" +
            "\n" +
            "<Product> {\n" +
            "\t:name .;\n" +
            "\t:sku xsd:boolean;\n" +
            "\t:manufacturer @<Organization> +;\n" +
            "}\n" +
            "\n" +
            "<Organization> {\n" +
            "\t:name xsd:string;\n" +
            "\t:isPartOf @<Organization> ?;\n" +
            "\t:hasDirectives @:User {5};\n" +
            "}\n" +
            "\n";
    }

    /**
     * Herencia simple
     * @returns {string}
     */
    static getShex5() {
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
            ":VIPUser EXTRA a { \n" +
            "\ta @:User; \n" +
            "}\n" +
            "\n";
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
            "    :titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":VIPUser EXTRA a {\n" +
            "  a @:User;\n" +
            "  a @<Citizen>;\n" +
            "}\n" +
            "\n";
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
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User IRI {\n" +
            "\t:name xsd:string;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser Literal AND {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND NonLiteral AND {\n" +
            "}\n" +
            "\n" +
            "<Product> BNode AND {\n" +
            "}\n" +
            "\n" +
            "<AThing> IRI\n\n";
    }

    /**
     * Facetas de literales
     * @returns {string}
     */
    static getShex9() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string /[a-z]+/;\n" +
            "\t:age xsd:int MinInclusive 18 ?;\n" +
            "\t:c xsd:int TotalDigits 3;\n" +
            "\t:d xsd:int FractionDigits 4;\n" +
            "\t:e xsd:string Length 6;\n" +
            "\t:f xsd:string MinLength 3;\n" +
            "\t:g xsd:string MaxLength 15;\n" +
            "}\n\n";
    }

    /**
     * Rangos y exclusiones
     * @returns {string}
     */
    static getShex10() {
        return "prefix : <https://schema.org/>\n" +
            "prefix codes: <http://example.codes/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Product {\n" +
            "\t:status [codes:~ - codes:unknown - codes:bad.~  \"111\" ];\n" +
            "\t:phone [\"+34\"~ - \"+3468031\" - \"+3467182\"~  ];\n" +
            "\t:quantity [99~ - 9987 - 991~  ];\n" +
            "\t:url [codes:Personal~ ];\n" +
            "}\n" +
            "\n";
    }

    /**
     * Conjuntos genéricos con exclusiones
     * @returns {string}
     */
    static getShex11() {
        return "prefix codes: <http://example.codes/>\n" +
            "prefix : <http://schema.org/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Product {\n" +
            "\t:status [. - codes:bad  ];\n" +
            "\t:name [. - \"Trademark\"  ];\n" +
            "\t:price [. - 66  ];\n" +
            "}\n" +
            "\n";
    }

    /**
     * Restricciones nodales como forma de máximo nivel
     * @returns {string}
     */
    static getShex12() {
        return "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "prefix : <http://schema.org/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":HomePage IRI\n" +
            "\n" +
            ":CanVoteAge xsd:integer MinInclusive 18 AND TotalDigits 3\n" +
            "\n" +
            ":Special :custom\n" +
            "\n";
    }

    /**
     * Etiquetas de lenguaje
     * @returns {string}
     */
    static getShex13() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":FrenchProduct {\n" +
            "\t:frlabel [@fr  ];\n" +
            "}\n" +
            "\n" +
            ":EnglishProduct {\n" +
            "\t:enlabel [@en~  ];\n" +
            "}\n" +
            "\n" +
            ":SpanishProduct {\n" +
            "\t:splabel [@es~ - @es-AR - @es-ES  ];\n" +
            "}\n" +
            "\n" +
            ":AnyProduct {\n" +
            "\t:label [. - @kz  ];\n" +
            "}\n" +
            "\n";
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
            "\t:c xsd:string;\n" +
            "\t:has @<Something> {2,}; ) * ;\n" +
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

    /**
     * OneOf
     * @returns {string}
     */
    static getShex15() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string; |\n" +
            "(\n" +
            "\t:givenName xsd:string +;\n" +
            "\t:familyName xsd:string; );\n" +
            "}\n" +
            "\n" +
            ":Car {\n" +
            "\t:model xsd:string;\n" +
            " (\n" +
            "\t:turbo xsd:string; |\n" +
            "\t:misfiring xsd:string; |\n" +
            "\t:atm xsd:string;)  {1,2};\n" +
            "}\n" +
            "\n";
    }

    /**
     * Formas anidadas
     * @returns {string}
     */
    static getShex16() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Car {\n" +
            "\t:name xsd:string;\n" +
            "\t:belongs @_:1;\n" +
            "}\n" +
            "\n" +
            ":Garage {\n" +
            "}\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:worksFor {\t\n" +
            "\ta [:Company];\n" +
            "};\n" +
            "}\n" +
            "\n" +
            ":Company {\n" +
            "}\n" +
            "\n" +
            ":GreatGrandson {\n" +
            "\t:parent {\n" +
            "\t:parent {\n" +
            "\t:parent . +;\n" +
            "};\n" +
            "};\n" +
            "}\n" +
            "\n" +
            "_:1 {\n" +
            "\ta [:Garage];\n" +
            "}\n" +
            "\n";
    }

    /**
     * Formas cerradas
     * @returns {string}
     */
    static getShex17() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User IRI CLOSED {\n" +
            "\t:name xsd:string MaxLength 3;\n" +
            "\t:age xsd:int ?;\n" +
            "\t:gender [:Male :Female ];\n" +
            "\t:knows @:User;\n" +
            "}\n" +
            "\n" +
            ":Company CLOSED {\n" +
            "\t:name xsd:string;\n" +
            "}\n" +
            "\n";
    }

    /**
     * Propiedades repetidas
     * @returns {string}
     */
    static getShex18() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:parent {\n" +
            "\t:gender [:Male ];\n" +
            "};\n" +
            "\t:parent {\n" +
            "\t:gender [:Female ];\n" +
            "};\n" +
            "}\n" +
            "\n";
    }

    /**
     * Restricción triple inversa
     * @returns {string}
     */
    static getShex19() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Person {\n" +
            "}\n" +
            "\n" +
            ":User {\n" +
            "\t^a [:Person];\n" +
            "\t^:name xsd:string;\n" +
            "\t^:gender [:Male :Female ];\n" +
            "}\n" +
            "\n" +
            ":Company {\n" +
            "\t^:worksFor @:User +;\n" +
            "}\n" +
            "\n";
    }

    /**
     * EXTRA
     * @returns {string}
     */
    static getShex20() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":FollowSpaniards EXTRA :follows  {\n" +
            "\t:follows {\n" +
            "\t:nationality [:Spain ];\n" +
            "} +;\n" +
            "}\n\n";
    }

    /**
     * Expresiones etiquetadas
     * @returns {string}
     */
    static getShex21() {
        // noinspection CheckDtdRefs
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t$:name (\n" +
            "\t:name .; |\n" +
            "(\n" +
            "\t:givenName .;\n" +
            "\t:familyName .; );) ;\n" +
            "\t:email IRI;\n" +
            "}\n" +
            "\n" +
            ":Employee {\n" +
            "\t&:name;\n" +
            "\t:employeeId .;\n" +
            "}\n" +
            "\n"
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
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:owns IRI; }\n" +
            "AND {\n" +
            "\t:owns @:Product;\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND {\n" +
            "\t:titancode xsd:string; }\n" +
            "AND {\n" +
            "\t:owns Literal;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser Literal AND {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            ":Product {\n" +
            "\t:productId xsd:string MinLength 5 AND MaxLength 10;\n" +
            "}\n" +
            "\n";
    }

    /**
     * Disyunciones
     * @returns {string}
     */
    static getShex23() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:owns IRI; }\n" +
            "OR {\n" +
            "\t:owns @:Product;\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User OR {\n" +
            "\t:titancode xsd:string; }\n" +
            "OR {\n" +
            "\t:owns Literal;\n" +
            "}\n" +
            "\n" +
            ":Product {\n" +
            "\t:productId xsd:string OR MinLength 5 OR MaxLength 10;\n" +
            "}\n" +
            "\n";
    }

}
module.exports = ShExRepository;