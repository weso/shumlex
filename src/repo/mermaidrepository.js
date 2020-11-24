class MUMLRepository {

    static getMUML0() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___gender {
<<enumeration>>
:Male
:Female
}
class ___dp___User {
___dp___User : ___dp___name "xsd___dp___string\\" 
___dp___User : ___dp___age "xsd___dp___int\\ ?" 
___dp___User : ___dp___gender "___dp___gender\\" 
}
class ___anga___TypeTest___angc___ {
___anga___TypeTest___angc___ : ___dp___z "xsd___dp___string\\" 
___anga___TypeTest___angc___ : ___dp___b "xsd___dp___date\\" 
___anga___TypeTest___angc___ : ___dp___c "xsd___dp___time\\" 
___anga___TypeTest___angc___ : ___dp___d "xsd___dp___dateTime\\" 
___anga___TypeTest___angc___ : ___dp___e "xsd___dp___duration\\" 
___anga___TypeTest___angc___ : ___dp___f "xsd___dp___byte\\" 
___anga___TypeTest___angc___ : ___dp___g "xsd___dp___decimal\\" 
___anga___TypeTest___angc___ : ___dp___h "xsd___dp___int\\" 
___anga___TypeTest___angc___ : ___dp___i "xsd___dp___integer\\" 
___anga___TypeTest___angc___ : ___dp___j "xsd___dp___long\\" 
___anga___TypeTest___angc___ : ___dp___k "xsd___dp___short\\" 
___anga___TypeTest___angc___ : ___dp___l "xsd___dp___boolean\\" 
___anga___TypeTest___angc___ : ___dp___m "xsd___dp___double\\" 
___anga___TypeTest___angc___ : ___dp___n "xsd___dp___float\\" 
___anga___TypeTest___angc___ : ___dp___xyz "xsd___dp___invent\\" 
}
`
    }

   static getMUML1() {
       return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
___dp___User : ___dp___name "xsd___dp___string\\" 
___dp___User : ___dp___age "xsd___dp___int\\" 
}
___dp___User -->  ___dp___User : ___dp___knows
___dp___User -->  ___dp___Company : ___dp___worksFor
___dp___User --> " {1,10}" ___anga___Product___angc___ : ___dp___buys
___dp___User <|-- ___dp___Ultrauser
___dp___Titanuser *--  _Blank1 : AND
___dp___User <|-- ___dp___Titanuser
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : ___dp___titancode "xsd___dp___string\\" 
}
class ___dp___Company {
___dp___Company : ___dp___name "xsd___dp___string\\" 
}
___dp___Company --> " *" ___dp___User : ___dp___hasEmployee
___dp___Company --> " {5,}" ___anga___Product___angc___ : ___dp___possess
class ___anga___Product___angc___ {
___anga___Product___angc___ : ___dp___name "Any\\" 
___anga___Product___angc___ : ___dp___sku "xsd___dp___boolean\\" 
}
___anga___Product___angc___ --> " +" ___anga___Organization___angc___ : ___dp___manufacturer
class ___anga___Organization___angc___ {
___anga___Organization___angc___ : ___dp___name "xsd___dp___string\\" 
}
___anga___Organization___angc___ --> " ?" ___anga___Organization___angc___ : ___dp___isPartOf
___anga___Organization___angc___ --> " {5}" ___dp___User : ___dp___hasDirectives
`;
   }

    static getMUML2() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class Extra____dp___VIPUser {
<<enumeration>>
a
}
class ___dp___User {
___dp___User : ___dp___name "xsd___dp___string\\" 
___dp___User : ___dp___age "xsd___dp___int\\ ?" 
}
___dp___User <|-- ___dp___Ultrauser
___dp___Titanuser *--  _Blank1 : AND
___dp___User <|-- ___dp___Titanuser
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : ___dp___titancode "xsd___dp___string\\" 
}
class ___dp___VIPUser {
___dp___VIPUser : Extra "Extra____dp___VIPUser\\" 
}
___dp___User <|-- ___dp___VIPUser
`;
    }

    static getMUML3() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
nodeKind: IRI 
}
___dp___User *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : ___dp___name "xsd___dp___string\\" 
}
class ___dp___Ultrauser {
nodeKind: Literal 
}
___dp___User <|-- ___dp___Ultrauser
class ___dp___Titanuser {
nodeKind: NonLiteral 
}
___dp___Titanuser *--  _Blank3 : AND
___dp___User <|-- ___dp___Titanuser
_Blank3 *--  _Blank4 : Shape
class ___anga___Product___angc___ {
nodeKind: BNode 
}
___anga___Product___angc___ *--  _Blank5 : AND
_Blank5 *--  _Blank6 : Shape
class ___anga___AThing___angc___ {
nodeKind: IRI 
}
`;
    }

    static getMUML3VP() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
nodeKind: IRI 
}
___dp___User *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : ___dp___name "xsd___dp___string\\" 
}
class ___dp___Ultrauser {
nodeKind: Literal 
}
___dp___User <|-- ___dp___Ultrauser
class ___dp___Titanuser {
nodeKind: NonLiteral 
}
___dp___Titanuser *--  _Blank3 : AND
___dp___User <|-- ___dp___Titanuser
_Blank3 *--  _Blank4 : Shape
class ___anga___Product___angc___ {
nodeKind: BNode 
}
___anga___Product___angc___ *--  _Blank5 : AND
_Blank5 *--  _Blank6 : Shape
class ___anga___AThing___angc___ {
nodeKind: IRI 
}
`;
    }

    static getMUML4() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
___dp___User : ___dp___name "xsd___dp___string\\ \\/[a-z]+/" 
___dp___User : ___dp___age "xsd___dp___int\\ ? \\MinInclusive \\18" 
___dp___User : ___dp___c "xsd___dp___int\\ \\TotalDigits \\3" 
___dp___User : ___dp___d "xsd___dp___int\\ \\FractionDigits \\4" 
___dp___User : ___dp___e "xsd___dp___string\\ \\Length \\6" 
___dp___User : ___dp___f "xsd___dp___string\\ \\MinLength \\3" 
___dp___User : ___dp___g "xsd___dp___string\\ \\MaxLength \\15" 
}
`;
    }

    static getMUML5() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\codes: <http://example.codes/>
base <http://example.org/>
}
class ___dp___status {
<<enumeration>>
codes:*~ - codes:unknown - codes:bad.*~ 
"111"
}
class ___dp___phone {
<<enumeration>>
"+34"*~ - "+3468031" - "+3467182"*~ 
}
class ___dp___quantity {
<<enumeration>>
99*~ - 9987 - 991*~ 
}
class ___dp___url {
<<enumeration>>
codes:Personal*~
}
class ___dp___Product {
___dp___Product : ___dp___status "___dp___status\\" 
___dp___Product : ___dp___phone "___dp___phone\\" 
___dp___Product : ___dp___quantity "___dp___quantity\\" 
___dp___Product : ___dp___url "___dp___url\\" 
}
`;
    }

    static getMUML6() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\codes: <http://example.codes/>
prefix \\: <http://schema.org/>
base <http://example.org/>
}
class ___dp___status {
<<enumeration>>
. - codes:bad 
}
class ___dp___name {
<<enumeration>>
. - "Trademark" 
}
class ___dp___price {
<<enumeration>>
. - 66 
}
class ___dp___Product {
___dp___Product : ___dp___status "___dp___status\\" 
___dp___Product : ___dp___name "___dp___name\\" 
___dp___Product : ___dp___price "___dp___price\\" 
}
`;
    }

    static getMUML7() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___frlabel {
<<enumeration>>
@fr 
}
class ___dp___enlabel {
<<enumeration>>
@en*~ 
}
class ___dp___splabel {
<<enumeration>>
@es*~ - @es-AR - @es-ES 
}
class ___dp___label {
<<enumeration>>
. - @kz 
}
class ___dp___FrenchProduct {
___dp___FrenchProduct : ___dp___frlabel "___dp___frlabel\\" 
}
class ___dp___EnglishProduct {
___dp___EnglishProduct : ___dp___enlabel "___dp___enlabel\\" 
}
class ___dp___SpanishProduct {
___dp___SpanishProduct : ___dp___splabel "___dp___splabel\\" 
}
class ___dp___AnyProduct {
___dp___AnyProduct : ___dp___label "___dp___label\\" 
}
`;
    }

    static getMUML8() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
___dp___User : ___dp___name "xsd___dp___string\\" 
}
___dp___User *-- " ?" _Blank1 : EachOf
___dp___User *-- " *" _Blank2 : EachOf
___dp___User -->  ___dp___Garage : ___dp___owns
class _Blank1 {
_Blank1 : ___dp___givenName "xsd___dp___string\\" 
_Blank1 : ___dp___familyName "xsd___dp___string\\" 
}
class _Blank2 {
_Blank2 : ___dp___c "xsd___dp___string\\" 
}
_Blank2 --> " {2,}" ___anga___Something___angc___ : ___dp___has
___dp___Garage *-- " +" _Blank3 : EachOf
class _Blank3 {
_Blank3 : ___anga___AE86___angc___ "xsd___dp___string\\" 
}
_Blank3 *-- " ?" _Blank4 : EachOf
_Blank3 *-- " ?" _Blank5 : EachOf
class _Blank4 {
_Blank4 : ___anga___Levin___angc___ "xsd___dp___string\\" 
_Blank4 : ___anga___Cilinders___angc___ "xsd___dp___int\\" 
}
class _Blank5 {
_Blank5 : ___anga___Trueno___angc___ "xsd___dp___string\\" 
_Blank5 : ___anga___Cilinders___angc___ "xsd___dp___int\\" 
}
`;
    }

    static getMUML8VP() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
___dp___User : ___dp___name "xsd___dp___string\\" 
}
___dp___User *-- " ?" _Blank1 : EachOf
___dp___User *-- " *" _Blank2 : EachOf
___dp___User -->  ___dp___Garage : ___dp___owns
class _Blank1 {
_Blank1 : ___dp___givenName "xsd___dp___string\\" 
_Blank1 : ___dp___familyName "xsd___dp___string\\" 
}
class _Blank2 {
_Blank2 : ___dp___c "xsd___dp___string\\" 
}
_Blank2 --> " {2,}" ___anga___Something___angc___ : ___dp___has
___dp___Garage *-- " +" _Blank3 : EachOf
class _Blank3 {
_Blank3 : ___anga___AE86___angc___ "xsd___dp___string\\" 
}
_Blank3 *-- " ?" _Blank4 : EachOf
_Blank3 *-- " ?" _Blank5 : EachOf
class _Blank4 {
_Blank4 : ___anga___Levin___angc___ "xsd___dp___string\\" 
_Blank4 : ___anga___Cilinders___angc___ "xsd___dp___int\\" 
}
class _Blank5 {
_Blank5 : ___anga___Trueno___angc___ "xsd___dp___string\\" 
_Blank5 : ___anga___Cilinders___angc___ "xsd___dp___int\\" 
}
`;
    }

    static getMUML9() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
___dp___User *--  _Blank1 : OneOf
class _Blank1 {
_Blank1 : ___dp___name "xsd___dp___string\\" 
}
_Blank1 *--  _Blank2 : EachOf
class _Blank2 {
_Blank2 : ___dp___givenName "xsd___dp___string\\ +" 
_Blank2 : ___dp___familyName "xsd___dp___string\\" 
}
class ___dp___Car {
___dp___Car : ___dp___model "xsd___dp___string\\" 
}
___dp___Car *-- " {1,2}" _Blank3 : OneOf
class _Blank3 {
_Blank3 : ___dp___turbo "xsd___dp___string\\" 
_Blank3 : ___dp___misfiring "xsd___dp___string\\" 
_Blank3 : ___dp___atm "xsd___dp___string\\" 
}
`;
    }

    static getMUML10() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___Car {
___dp___Car : ___dp___name "xsd___dp___string\\" 
}
___dp___Car -->  ____dp___1 : ___dp___belongs
class ___dp___User {
___dp___User : ___dp___name "xsd___dp___string\\" 
}
___dp___User *--  ____dp___2 : ___dp___worksFor
___dp___Company <|-- ____dp___2
___dp___GreatGrandson *--  ____dp___3 : ___dp___parent
____dp___3 *--  ____dp___4 : ___dp___parent
class ____dp___4 {
____dp___4 : ___dp___parent "Any\\ +" 
}
___dp___Garage <|-- ____dp___1
`;
    }

    static getMUML11() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___gender {
<<enumeration>>
:Male
:Female
}
class ___dp___User CLOSED {
nodeKind: IRI 
}
___dp___User CLOSED *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : ___dp___name "xsd___dp___string\\ \\MaxLength \\3" 
_Blank2 : ___dp___age "xsd___dp___int\\ ?" 
_Blank2 : ___dp___gender "___dp___gender\\" 
}
_Blank2 -->  ___dp___User CLOSED : ___dp___knows
class ___dp___Company CLOSED {
___dp___Company : ___dp___name "xsd___dp___string\\" 
}
`;
    }

    static getMUML11VP() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___gender {
<<enumeration>>
:Male
:Female
}
class ___dp___User CLOSED {
nodeKind: IRI 
}
___dp___User CLOSED *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : ___dp___name "xsd___dp___string\\ \\MaxLength \\3" 
_Blank2 : ___dp___age "xsd___dp___int\\ ?" 
_Blank2 : ___dp___gender "___dp___gender\\" 
}
_Blank2 -->  ___dp___User CLOSED : ___dp___knows
class ___dp___Company CLOSED {
___dp___Company : ___dp___name "xsd___dp___string\\" 
}
`;
    }

    static getMUML12() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___inverse______dp___gender {
<<enumeration>>
:Male
:Female
}
class ___dp___User {
___dp___User : ___inverse______dp___name "xsd___dp___string\\" 
___dp___User : ___inverse______dp___gender "___inverse______dp___gender\\" 
}
___dp___Person <|-- ___dp___User : ^
___dp___Company --> " +" ___dp___User : ___inverse______dp___worksFor
`;
    }

    static getMUML13() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class Extra____dp___FollowSpaniards {
<<enumeration>>
:follows
}
class ___dp___nationality {
<<enumeration>>
:Spain
}
class ___dp___FollowSpaniards {
___dp___FollowSpaniards : Extra "Extra____dp___FollowSpaniards\\" 
}
___dp___FollowSpaniards *-- " +" ____dp___1 : ___dp___follows
class ____dp___1 {
____dp___1 : ___dp___nationality "___dp___nationality\\" 
}
`;
    }

    static getMUML13VP() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class Extra____dp___FollowSpaniards {
<<enumeration>>
:follows
}
class ___dp___nationality {
<<enumeration>>
:Spain
}
class ___dp___FollowSpaniards {
___dp___FollowSpaniards : Extra "Extra____dp___FollowSpaniards\\" 
}
___dp___FollowSpaniards *-- " +" ____dp___1 : ___dp___follows
class ____dp___1 {
____dp___1 : ___dp___nationality "___dp___nationality\\" 
}
`;
    }

    static getMUML14() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
___dp___User : ___dp___email "IRI\\" 
}
___dp___User *--  _Blank1 : $___dp___name
_Blank1 *--  _Blank2 : OneOf
class _Blank2 {
_Blank2 : ___dp___name "Any\\" 
}
_Blank2 *--  _Blank3 : EachOf
class _Blank3 {
_Blank3 : ___dp___givenName "Any\\" 
_Blank3 : ___dp___familyName "Any\\" 
}
class ___dp___Employee {
___dp___Employee : ___dp___employeeId "Any\\" 
}
___dp___Employee -->  _Blank1 : &___dp___name
`;
    }

    static getMUML14VP() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class ___dp___User {
___dp___User : ___dp___email "IRI\\" 
}
___dp___User *--  _Blank1 : $___dp___name
_Blank1 *--  _Blank2 : OneOf
class _Blank2 {
_Blank2 : ___dp___name "Any\\" 
}
_Blank2 *--  _Blank3 : EachOf
class _Blank3 {
_Blank3 : ___dp___givenName "Any\\" 
_Blank3 : ___dp___familyName "Any\\" 
}
class ___dp___Employee {
___dp___Employee : ___dp___employeeId "Any\\" 
}
___dp___Employee -->  _Blank1 : &___dp___name
`;
    }

    static getMUML15() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
___dp___User *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
_Blank1 *--  _Blank3 : Shape
class _Blank2 {
_Blank2 : ___dp___name "xsd___dp___string\\" 
_Blank2 : ___dp___owns "IRI\\" 
}
_Blank3 -->  ___dp___Product : ___dp___owns
___dp___Titanuser *--  _Blank4 : AND
___dp___User <|-- ___dp___Titanuser
_Blank4 *--  _Blank5 : Shape
_Blank4 *--  _Blank6 : Shape
class _Blank5 {
_Blank5 : ___dp___titancode "xsd___dp___string\\" 
}
class _Blank6 {
_Blank6 : ___dp___owns "Literal\\" 
}
class ___dp___Ultrauser {
nodeKind: Literal 
}
___dp___User <|-- ___dp___Ultrauser
class ___dp___Product {
___dp___Product : ___dp___productId "xsd___dp___string\\ \\MinLength \\5 \\MaxLength \\10" 
}
`;
    }

    static getMUML16() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
___dp___User *--  _Blank1 : OR
_Blank1 *--  _Blank2 : Shape
_Blank1 *--  _Blank3 : Shape
class _Blank2 {
_Blank2 : ___dp___name "xsd___dp___string\\" 
_Blank2 : ___dp___owns "IRI\\" 
}
_Blank3 -->  ___dp___Product : ___dp___owns
___dp___Titanuser *--  _Blank4 : OR
___dp___User <|-- ___dp___Titanuser : OR
_Blank4 *--  _Blank5 : Shape
_Blank4 *--  _Blank6 : Shape
class _Blank5 {
_Blank5 : ___dp___titancode "xsd___dp___string\\" 
}
class _Blank6 {
_Blank6 : ___dp___owns "Literal\\" 
}
class ___dp___Product {
___dp___Product : ___dp___productId "xsd___dp___string\\ \\OR \\MinLength \\5 \\OR \\MaxLength \\10" 
}
`;
    }

}
module.exports = MUMLRepository;