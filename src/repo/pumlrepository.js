class PUMLRepository {

    static getPUML0() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \":gender\" {\n" +
            ":Male\n" +
            ":Female\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" : :name xsd:string  \n" +
            "\":User\" : :age xsd:int  ? \n" +
            "\":User\" : :gender :gender  \n" +
            "class \"<TypeTest>\"\n" +
            "\"<TypeTest>\" : :z xsd:string  \n" +
            "\"<TypeTest>\" : :b xsd:date  \n" +
            "\"<TypeTest>\" : :c xsd:time  \n" +
            "\"<TypeTest>\" : :d xsd:dateTime  \n" +
            "\"<TypeTest>\" : :e xsd:duration  \n" +
            "\"<TypeTest>\" : :f xsd:byte  \n" +
            "\"<TypeTest>\" : :g xsd:decimal  \n" +
            "\"<TypeTest>\" : :h xsd:int  \n" +
            "\"<TypeTest>\" : :i xsd:integer  \n" +
            "\"<TypeTest>\" : :j xsd:long  \n" +
            "\"<TypeTest>\" : :k xsd:short  \n" +
            "\"<TypeTest>\" : :l xsd:boolean  \n" +
            "\"<TypeTest>\" : :m xsd:double  \n" +
            "\"<TypeTest>\" : :n xsd:float  \n" +
            "\"<TypeTest>\" : :xyz xsd:invent  \n" +
            "@enduml";
    }

   static getPUML1() {
       return "@startuml\n" +
           "enum Prefixes {\n" +
           "prefix : <https://schema.org/>\n" +
           "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
           "base <http://example.org/>\n" +
           "} \n" +
           "class \":User\"\n" +
           "\":User\" : :name xsd:string  \n" +
           "\":User\" : :age xsd:int  \n" +
           "\":User\" -->  \":User\" : \":knows\"\n" +
           "\":User\" -->  \":Company\" : \":worksFor\"\n" +
           "\":User\" --> \" {1,10}\" \"<Product>\" : \":buys\"\n" +
           "class \":Ultrauser\"\n" +
           "\":User\" <|-- \":Ultrauser\" : \"\"\n" +
           "class \":Titanuser\"\n" +
           "\":User\" <|-- \":Titanuser\" : \"\"\n" +
           "\":Titanuser\" *--  \"_Blank1\" : \"AND\"\n" +
           "class \"_Blank1\"\n" +
           "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
           "class \"_Blank2\"\n" +
           "\"_Blank2\" : :titancode xsd:string  \n" +
           "class \":Company\"\n" +
           "\":Company\" : :name xsd:string  \n" +
           "\":Company\" --> \" *\" \":User\" : \":hasEmployee\"\n" +
           "\":Company\" --> \" {5,}\" \"<Product>\" : \":possess\"\n" +
           "class \"<Product>\"\n" +
           "\"<Product>\" : :name Any  \n" +
           "\"<Product>\" : :sku xsd:boolean  \n" +
           "\"<Product>\" --> \" +\" \"<Organization>\" : \":manufacturer\"\n" +
           "class \"<Organization>\"\n" +
           "\"<Organization>\" : :name xsd:string  \n" +
           "\"<Organization>\" --> \" ?\" \"<Organization>\" : \":isPartOf\"\n" +
           "\"<Organization>\" --> \" {5}\" \":User\" : \":hasDirectives\"\n" +
           "@enduml";
   }

    static getPUML2() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \"Extra_:VIPUser\" {\n" +
            "a\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" : :name xsd:string  \n" +
            "\":User\" : :age xsd:int  ? \n" +
            "class \":Ultrauser\"\n" +
            "\":User\" <|-- \":Ultrauser\" : \"\"\n" +
            "class \":Titanuser\"\n" +
            "\":User\" <|-- \":Titanuser\" : \"\"\n" +
            "\":Titanuser\" *--  \"_Blank1\" : \"AND\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :titancode xsd:string  \n" +
            "class \":VIPUser\"\n" +
            "\":User\" <|-- \":VIPUser\" : \"\"\n" +
            "\":VIPUser\" : Extra Extra_:VIPUser  \n" +
            "@enduml";
    }

    static getPUML3() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" *--  \"_Blank1\" : \"AND\"\n" +
            "\":User\" : nodeKind: IRI \n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name xsd:string  \n" +
            "class \":Ultrauser\"\n" +
            "\":User\" <|-- \":Ultrauser\" : \"\"\n" +
            "\":Ultrauser\" : nodeKind: Literal \n" +
            "class \":Titanuser\"\n" +
            "\":User\" <|-- \":Titanuser\" : \"\"\n" +
            "\":Titanuser\" *--  \"_Blank3\" : \"AND\"\n" +
            "\":Titanuser\" : nodeKind: NonLiteral \n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" *--  \"_Blank4\" : \"Shape\"\n" +
            "class \"_Blank4\"\n" +
            "class \"<Product>\"\n" +
            "\"<Product>\" *--  \"_Blank5\" : \"AND\"\n" +
            "\"<Product>\" : nodeKind: BNode \n" +
            "class \"_Blank5\"\n" +
            "\"_Blank5\" *--  \"_Blank6\" : \"Shape\"\n" +
            "class \"_Blank6\"\n" +
            "class \"<AThing>\"\n" +
            "\"<AThing>\" : nodeKind: IRI \n" +
            "@enduml";
    }

    static getPUML3VP() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" : nodeKind: IRI \n" +
            "\":User\" *--  \"_Blank1\" : \"AND\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name xsd:string  \n" +
            "class \":Ultrauser\"\n" +
            "\":User\" <|-- \":Ultrauser\" : \"\"\n" +
            "\":Ultrauser\" : nodeKind: Literal \n" +
            "class \":Titanuser\"\n" +
            "\":User\" <|-- \":Titanuser\" : \"\"\n" +
            "\":Titanuser\" : nodeKind: NonLiteral \n" +
            "\":Titanuser\" *--  \"_Blank3\" : \"AND\"\n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" *--  \"_Blank4\" : \"Shape\"\n" +
            "class \"_Blank4\"\n" +
            "class \"<Product>\"\n" +
            "\"<Product>\" : nodeKind: BNode \n" +
            "\"<Product>\" *--  \"_Blank5\" : \"AND\"\n" +
            "class \"_Blank5\"\n" +
            "\"_Blank5\" *--  \"_Blank6\" : \"Shape\"\n" +
            "class \"_Blank6\"\n" +
            "class \"<AThing>\"\n" +
            "\"<AThing>\" : nodeKind: IRI \n" +
            "@enduml";
    }

    static getPUML4() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" : :name xsd:string /[a-z]+/ \n" +
            "\":User\" : :age xsd:int  ?MinInclusive 18 \n" +
            "\":User\" : :c xsd:int TotalDigits 3 \n" +
            "\":User\" : :d xsd:int FractionDigits 4 \n" +
            "\":User\" : :e xsd:string Length 6 \n" +
            "\":User\" : :f xsd:string MinLength 3 \n" +
            "\":User\" : :g xsd:string MaxLength 15 \n" +
            "@enduml";
    }

    static getPUML5() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix codes: <http://example.codes/>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \":status\" {\n" +
            "codes:~ - codes:unknown - codes:bad.~ \n" +
            "\"111\"\n" +
            "} \n" +
            "enum \":phone\" {\n" +
            "\"+34\"~ - \"+3468031\" - \"+3467182\"~ \n" +
            "} \n" +
            "enum \":quantity\" {\n" +
            "99~ - 9987 - 991~ \n" +
            "} \n" +
            "enum \":url\" {\n" +
            "codes:Personal~\n" +
            "} \n" +
            "class \":Product\"\n" +
            "\":Product\" : :status :status  \n" +
            "\":Product\" : :phone :phone  \n" +
            "\":Product\" : :quantity :quantity  \n" +
            "\":Product\" : :url :url  \n" +
            "@enduml";
    }

    static getPUML6() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix codes: <http://example.codes/>\n" +
            "prefix : <http://schema.org/>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \":status\" {\n" +
            ". - codes:bad \n" +
            "} \n" +
            "enum \":name\" {\n" +
            ". - \"Trademark\" \n" +
            "} \n" +
            "enum \":price\" {\n" +
            ". - 66 \n" +
            "} \n" +
            "class \":Product\"\n" +
            "\":Product\" : :status :status  \n" +
            "\":Product\" : :name :name  \n" +
            "\":Product\" : :price :price  \n" +
            "@enduml";
    }

    static getPUML7() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \":frlabel\" {\n" +
            "@fr \n" +
            "} \n" +
            "enum \":enlabel\" {\n" +
            "@en~ \n" +
            "} \n" +
            "enum \":splabel\" {\n" +
            "@es~ - @es-AR - @es-ES \n" +
            "} \n" +
            "enum \":label\" {\n" +
            ". - @kz \n" +
            "} \n" +
            "class \":FrenchProduct\"\n" +
            "\":FrenchProduct\" : :frlabel :frlabel  \n" +
            "class \":EnglishProduct\"\n" +
            "\":EnglishProduct\" : :enlabel :enlabel  \n" +
            "class \":SpanishProduct\"\n" +
            "\":SpanishProduct\" : :splabel :splabel  \n" +
            "class \":AnyProduct\"\n" +
            "\":AnyProduct\" : :label :label  \n" +
            "@enduml";
    }

    static getPUML8() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" : :name xsd:string  \n" +
            "\":User\" *-- \" ?\" \"_Blank1\" : \"EachOf\"\n" +
            "\":User\" *-- \" *\" \"_Blank2\" : \"EachOf\"\n" +
            "\":User\" -->  \":Garage\" : \":owns\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" : :givenName xsd:string  \n" +
            "\"_Blank1\" : :familyName xsd:string  \n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" --> \" {2,}\" \"<Something>\" : \":has\"\n" +
            "\"_Blank2\" : :c xsd:string  \n" +
            "class \":Garage\"\n" +
            "\":Garage\" *-- \" +\" \"_Blank3\" : \"EachOf\"\n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" : <AE86> xsd:string  \n" +
            "\"_Blank3\" *-- \" ?\" \"_Blank4\" : \"EachOf\"\n" +
            "\"_Blank3\" *-- \" ?\" \"_Blank5\" : \"EachOf\"\n" +
            "class \"_Blank4\"\n" +
            "\"_Blank4\" : <Levin> xsd:string  \n" +
            "\"_Blank4\" : <Cilinders> xsd:int  \n" +
            "class \"_Blank5\"\n" +
            "\"_Blank5\" : <Trueno> xsd:string  \n" +
            "\"_Blank5\" : <Cilinders> xsd:int  \n" +
            "class \"<Something>\"\n" +
            "@enduml";
    }

    static getPUML8VP() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" : :name xsd:string  \n" +
            "\":User\" *-- \" ?\" \"_Blank1\" : \"EachOf\"\n" +
            "\":User\" *-- \" *\" \"_Blank2\" : \"EachOf\"\n" +
            "\":User\" -->  \":Garage\" : \":owns\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" : :givenName xsd:string  \n" +
            "\"_Blank1\" : :familyName xsd:string  \n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :c xsd:string  \n" +
            "\"_Blank2\" --> \" {2,}\" \"<Something>\" : \":has\"\n" +
            "class \":Garage\"\n" +
            "\":Garage\" *-- \" +\" \"_Blank3\" : \"EachOf\"\n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" : <AE86> xsd:string  \n" +
            "\"_Blank3\" *-- \" ?\" \"_Blank4\" : \"EachOf\"\n" +
            "\"_Blank3\" *-- \" ?\" \"_Blank5\" : \"EachOf\"\n" +
            "class \"_Blank4\"\n" +
            "\"_Blank4\" : <Levin> xsd:string  \n" +
            "\"_Blank4\" : <Cilinders> xsd:int  \n" +
            "class \"_Blank5\"\n" +
            "\"_Blank5\" : <Trueno> xsd:string  \n" +
            "\"_Blank5\" : <Cilinders> xsd:int  \n" +
            "class \"<Something>\"\n" +
            "@enduml";
    }

    static getPUML9() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" *--  \"_Blank1\" : \"OneOf\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" : :name xsd:string  \n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"EachOf\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :givenName xsd:string  + \n" +
            "\"_Blank2\" : :familyName xsd:string  \n" +
            "class \":Car\"\n" +
            "\":Car\" : :model xsd:string  \n" +
            "\":Car\" *-- \" {1,2}\" \"_Blank3\" : \"OneOf\"\n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" : :turbo xsd:string  \n" +
            "\"_Blank3\" : :misfiring xsd:string  \n" +
            "\"_Blank3\" : :atm xsd:string  \n" +
            "@enduml";
    }

    static getPUML10() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":Car\"\n" +
            "\":Car\" : :name xsd:string  \n" +
            "\":Car\" -->  \"_:1\" : \":belongs\"\n" +
            "class \":Garage\"\n" +
            "class \":User\"\n" +
            "\":User\" : :name xsd:string  \n" +
            "\":User\" *--  \"_:2\" : \":worksFor\"\n" +
            "class \"_:2\"\n" +
            "\":Company\" <|-- \"_:2\" : \"\"\n" +
            "class \":Company\"\n" +
            "class \":GreatGrandson\"\n" +
            "\":GreatGrandson\" *--  \"_:3\" : \":parent\"\n" +
            "class \"_:3\"\n" +
            "\"_:3\" *--  \"_:4\" : \":parent\"\n" +
            "class \"_:4\"\n" +
            "\"_:4\" : :parent Any  + \n" +
            "class \"_:1\"\n" +
            "\":Garage\" <|-- \"_:1\" : \"\"\n" +
            "@enduml";
    }

    static getPUML11() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \":gender\" {\n" +
            ":Male\n" +
            ":Female\n" +
            "} \n" +
            "class \":User CLOSED\"\n" +
            "\":User CLOSED\" *--  \"_Blank1\" : \"AND\"\n" +
            "\":User CLOSED\" : nodeKind: IRI \n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name xsd:string MaxLength 3 \n" +
            "\"_Blank2\" : :age xsd:int  ? \n" +
            "\"_Blank2\" : :gender :gender  \n" +
            "\"_Blank2\" -->  \":User CLOSED\" : \":knows\"\n" +
            "class \":Company CLOSED\"\n" +
            "\":Company CLOSED\" : :name xsd:string  \n" +
            "@enduml";
    }

    static getPUML11VP() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \":gender\" {\n" +
            ":Male\n" +
            ":Female\n" +
            "} \n" +
            "class \":User CLOSED\"\n" +
            "\":User CLOSED\" : nodeKind: IRI \n" +
            "\":User CLOSED\" *--  \"_Blank1\" : \"AND\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name xsd:string MaxLength 3 \n" +
            "\"_Blank2\" : :age xsd:int  ? \n" +
            "\"_Blank2\" : :gender :gender  \n" +
            "\"_Blank2\" -->  \":User CLOSED\" : \":knows\"\n" +
            "class \":Company CLOSED\"\n" +
            "\":Company CLOSED\" : :name xsd:string  \n" +
            "@enduml";
    }

    static getPUML12() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \"^:gender\" {\n" +
            ":Male\n" +
            ":Female\n" +
            "} \n" +
            "class \":Person\"\n" +
            "class \":User\"\n" +
            "\":Person\" <|-- \":User\" : \"^\"\n" +
            "\":User\" : ^:name xsd:string  \n" +
            "\":User\" : ^:gender ^:gender  \n" +
            "class \":Company\"\n" +
            "\":Company\" --> \" +\" \":User\" : \"^:worksFor\"\n" +
            "@enduml";
    }

    static getPUML13() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \"Extra_:FollowSpaniards\" {\n" +
            ":follows\n" +
            "} \n" +
            "enum \":nationality\" {\n" +
            ":Spain\n" +
            "} \n" +
            "class \":FollowSpaniards\"\n" +
            "\":FollowSpaniards\" *-- \" +\" \"_:1\" : \":follows\"\n" +
            "\":FollowSpaniards\" : Extra Extra_:FollowSpaniards  \n" +
            "class \"_:1\"\n" +
            "\"_:1\" : :nationality :nationality  \n" +
            "@enduml";
    }

    static getPUML13VP() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "enum \"Extra_:FollowSpaniards\" {\n" +
            ":follows\n" +
            "} \n" +
            "enum \":nationality\" {\n" +
            ":Spain\n" +
            "} \n" +
            "class \":FollowSpaniards\"\n" +
            "\":FollowSpaniards\" : Extra Extra_:FollowSpaniards  \n" +
            "\":FollowSpaniards\" *-- \" +\" \"_:1\" : \":follows\"\n" +
            "class \"_:1\"\n" +
            "\"_:1\" : :nationality :nationality  \n" +
            "@enduml";
    }

    static getPUML14() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" *--  \"_Blank1\" : \"$:name\"\n" +
            "\":User\" : :email IRI  \n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"OneOf\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name Any  \n" +
            "\"_Blank2\" *--  \"_Blank3\" : \"EachOf\"\n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" : :givenName Any  \n" +
            "\"_Blank3\" : :familyName Any  \n" +
            "class \":Employee\"\n" +
            "\":Employee\" -->  \"_Blank1\" : \"&:name\"\n" +
            "\":Employee\" : :employeeId Any  \n" +
            "@enduml";
    }

    static getPUML14VP() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" : :email IRI  \n" +
            "\":User\" *--  \"_Blank1\" : \"$:name\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"OneOf\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name Any  \n" +
            "\"_Blank2\" *--  \"_Blank3\" : \"EachOf\"\n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" : :givenName Any  \n" +
            "\"_Blank3\" : :familyName Any  \n" +
            "class \":Employee\"\n" +
            "\":Employee\" : :employeeId Any  \n" +
            "\":Employee\" -->  \"_Blank1\" : \"&:name\"\n" +
            "@enduml";
    }

    static getPUML15() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" *--  \"_Blank1\" : \"AND\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
            "\"_Blank1\" *--  \"_Blank3\" : \"Shape\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name xsd:string  \n" +
            "\"_Blank2\" : :owns IRI  \n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" -->  \":Product\" : \":owns\"\n" +
            "class \":Titanuser\"\n" +
            "\":User\" <|-- \":Titanuser\" : \"\"\n" +
            "\":Titanuser\" *--  \"_Blank4\" : \"AND\"\n" +
            "class \"_Blank4\"\n" +
            "\"_Blank4\" *--  \"_Blank5\" : \"Shape\"\n" +
            "\"_Blank4\" *--  \"_Blank6\" : \"Shape\"\n" +
            "class \"_Blank5\"\n" +
            "\"_Blank5\" : :titancode xsd:string  \n" +
            "class \"_Blank6\"\n" +
            "\"_Blank6\" : :owns Literal  \n" +
            "class \":Ultrauser\"\n" +
            "\":User\" <|-- \":Ultrauser\" : \"\"\n" +
            "\":Ultrauser\" : nodeKind: Literal \n" +
            "class \":Product\"\n" +
            "\":Product\" : :productId xsd:string MinLength 5 MaxLength 10 \n" +
            "@enduml";
    }

    static getPUML16() {
        return "@startuml\n" +
            "enum Prefixes {\n" +
            "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "} \n" +
            "class \":User\"\n" +
            "\":User\" *--  \"_Blank1\" : \"OR\"\n" +
            "class \"_Blank1\"\n" +
            "\"_Blank1\" *--  \"_Blank2\" : \"Shape\"\n" +
            "\"_Blank1\" *--  \"_Blank3\" : \"Shape\"\n" +
            "class \"_Blank2\"\n" +
            "\"_Blank2\" : :name xsd:string  \n" +
            "\"_Blank2\" : :owns IRI  \n" +
            "class \"_Blank3\"\n" +
            "\"_Blank3\" -->  \":Product\" : \":owns\"\n" +
            "class \":Titanuser\"\n" +
            "\":User\" <|-- \":Titanuser\" : \"OR\"\n" +
            "\":Titanuser\" *--  \"_Blank4\" : \"OR\"\n" +
            "class \"_Blank4\"\n" +
            "\"_Blank4\" *--  \"_Blank5\" : \"Shape\"\n" +
            "\"_Blank4\" *--  \"_Blank6\" : \"Shape\"\n" +
            "class \"_Blank5\"\n" +
            "\"_Blank5\" : :titancode xsd:string  \n" +
            "class \"_Blank6\"\n" +
            "\"_Blank6\" : :owns Literal  \n" +
            "class \":Product\"\n" +
            "\":Product\" : :productId xsd:string OR MinLength 5 OR MaxLength 10 \n" +
            "@enduml";
    }

}
module.exports = PUMLRepository;