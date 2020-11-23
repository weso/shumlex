class MUMLRepository {

    static getMUML0() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class _gender {
<<enumeration>>
:Male
:Female
}
class _User {
_User : _name "xsd_string\\" 
_User : _age "xsd_int\\ ?" 
_User : _gender "_gender\\" 
}
class _TypeTest_ {
_TypeTest_ : _z "xsd_string\\" 
_TypeTest_ : _b "xsd_date\\" 
_TypeTest_ : _c "xsd_time\\" 
_TypeTest_ : _d "xsd_dateTime\\" 
_TypeTest_ : _e "xsd_duration\\" 
_TypeTest_ : _f "xsd_byte\\" 
_TypeTest_ : _g "xsd_decimal\\" 
_TypeTest_ : _h "xsd_int\\" 
_TypeTest_ : _i "xsd_integer\\" 
_TypeTest_ : _j "xsd_long\\" 
_TypeTest_ : _k "xsd_short\\" 
_TypeTest_ : _l "xsd_boolean\\" 
_TypeTest_ : _m "xsd_double\\" 
_TypeTest_ : _n "xsd_float\\" 
_TypeTest_ : _xyz "xsd_invent\\" 
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
class _User {
_User : _name "xsd_string\\" 
_User : _age "xsd_int\\" 
}
_User -->  _User : _knows
_User -->  _Company : _worksFor
_User --> " {1,10}" _Product_ : _buys
_User <|-- _Ultrauser
_Titanuser *--  _Blank1 : AND
_User <|-- _Titanuser
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : _titancode "xsd_string\\" 
}
class _Company {
_Company : _name "xsd_string\\" 
}
_Company --> " *" _User : _hasEmployee
_Company --> " {5,}" _Product_ : _possess
class _Product_ {
_Product_ : _name "Any\\" 
_Product_ : _sku "xsd_boolean\\" 
}
_Product_ --> " +" _Organization_ : _manufacturer
class _Organization_ {
_Organization_ : _name "xsd_string\\" 
}
_Organization_ --> " ?" _Organization_ : _isPartOf
_Organization_ --> " {5}" _User : _hasDirectives
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
class Extra__VIPUser {
<<enumeration>>
a
}
class _User {
_User : _name "xsd_string\\" 
_User : _age "xsd_int\\ ?" 
}
_User <|-- _Ultrauser
_Titanuser *--  _Blank1 : AND
_User <|-- _Titanuser
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : _titancode "xsd_string\\" 
}
class _VIPUser {
_VIPUser : Extra "Extra__VIPUser\\" 
}
_User <|-- _VIPUser
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
class _User {
nodeKind: IRI 
}
_User *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : _name "xsd_string\\" 
}
class _Ultrauser {
nodeKind: Literal 
}
_User <|-- _Ultrauser
class _Titanuser {
nodeKind: NonLiteral 
}
_Titanuser *--  _Blank3 : AND
_User <|-- _Titanuser
_Blank3 *--  _Blank4 : Shape
class _Product_ {
nodeKind: BNode 
}
_Product_ *--  _Blank5 : AND
_Blank5 *--  _Blank6 : Shape
class _AThing_ {
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
class _User {
nodeKind: IRI 
}
_User *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : _name "xsd_string\\" 
}
class _Ultrauser {
nodeKind: Literal 
}
_User <|-- _Ultrauser
class _Titanuser {
nodeKind: NonLiteral 
}
_Titanuser *--  _Blank3 : AND
_User <|-- _Titanuser
_Blank3 *--  _Blank4 : Shape
class _Product_ {
nodeKind: BNode 
}
_Product_ *--  _Blank5 : AND
_Blank5 *--  _Blank6 : Shape
class _AThing_ {
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
class _User {
_User : _name "xsd_string\\ \\/[a-z]+/" 
_User : _age "xsd_int\\ ? \\MinInclusive \\18" 
_User : _c "xsd_int\\ \\TotalDigits \\3" 
_User : _d "xsd_int\\ \\FractionDigits \\4" 
_User : _e "xsd_string\\ \\Length \\6" 
_User : _f "xsd_string\\ \\MinLength \\3" 
_User : _g "xsd_string\\ \\MaxLength \\15" 
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
class _status {
<<enumeration>>
codes:*~ - codes:unknown - codes:bad.*~ 
"111"
}
class _phone {
<<enumeration>>
"+34"*~ - "+3468031" - "+3467182"*~ 
}
class _quantity {
<<enumeration>>
99*~ - 9987 - 991*~ 
}
class _url {
<<enumeration>>
codes:Personal*~
}
class _Product {
_Product : _status "_status\\" 
_Product : _phone "_phone\\" 
_Product : _quantity "_quantity\\" 
_Product : _url "_url\\" 
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
class _status {
<<enumeration>>
. - codes:bad 
}
class _name {
<<enumeration>>
. - "Trademark" 
}
class _price {
<<enumeration>>
. - 66 
}
class _Product {
_Product : _status "_status\\" 
_Product : _name "_name\\" 
_Product : _price "_price\\" 
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
class _frlabel {
<<enumeration>>
@fr 
}
class _enlabel {
<<enumeration>>
@en*~ 
}
class _splabel {
<<enumeration>>
@es*~ - @es-AR - @es-ES 
}
class _label {
<<enumeration>>
. - @kz 
}
class _FrenchProduct {
_FrenchProduct : _frlabel "_frlabel\\" 
}
class _EnglishProduct {
_EnglishProduct : _enlabel "_enlabel\\" 
}
class _SpanishProduct {
_SpanishProduct : _splabel "_splabel\\" 
}
class _AnyProduct {
_AnyProduct : _label "_label\\" 
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
class _User {
_User : _name "xsd_string\\" 
}
_User *-- " ?" _Blank1 : EachOf
_User *-- " *" _Blank2 : EachOf
_User -->  _Garage : _owns
class _Blank1 {
_Blank1 : _givenName "xsd_string\\" 
_Blank1 : _familyName "xsd_string\\" 
}
class _Blank2 {
_Blank2 : _c "xsd_string\\" 
}
_Blank2 --> " {2,}" _Something_ : _has
_Garage *-- " +" _Blank3 : EachOf
class _Blank3 {
_Blank3 : _AE86_ "xsd_string\\" 
}
_Blank3 *-- " ?" _Blank4 : EachOf
_Blank3 *-- " ?" _Blank5 : EachOf
class _Blank4 {
_Blank4 : _Levin_ "xsd_string\\" 
_Blank4 : _Cilinders_ "xsd_int\\" 
}
class _Blank5 {
_Blank5 : _Trueno_ "xsd_string\\" 
_Blank5 : _Cilinders_ "xsd_int\\" 
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
class _User {
_User : _name "xsd_string\\" 
}
_User *-- " ?" _Blank1 : EachOf
_User *-- " *" _Blank2 : EachOf
_User -->  _Garage : _owns
class _Blank1 {
_Blank1 : _givenName "xsd_string\\" 
_Blank1 : _familyName "xsd_string\\" 
}
class _Blank2 {
_Blank2 : _c "xsd_string\\" 
}
_Blank2 --> " {2,}" _Something_ : _has
_Garage *-- " +" _Blank3 : EachOf
class _Blank3 {
_Blank3 : _AE86_ "xsd_string\\" 
}
_Blank3 *-- " ?" _Blank4 : EachOf
_Blank3 *-- " ?" _Blank5 : EachOf
class _Blank4 {
_Blank4 : _Levin_ "xsd_string\\" 
_Blank4 : _Cilinders_ "xsd_int\\" 
}
class _Blank5 {
_Blank5 : _Trueno_ "xsd_string\\" 
_Blank5 : _Cilinders_ "xsd_int\\" 
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
_User *--  _Blank1 : OneOf
class _Blank1 {
_Blank1 : _name "xsd_string\\" 
}
_Blank1 *--  _Blank2 : EachOf
class _Blank2 {
_Blank2 : _givenName "xsd_string\\ +" 
_Blank2 : _familyName "xsd_string\\" 
}
class _Car {
_Car : _model "xsd_string\\" 
}
_Car *-- " {1,2}" _Blank3 : OneOf
class _Blank3 {
_Blank3 : _turbo "xsd_string\\" 
_Blank3 : _misfiring "xsd_string\\" 
_Blank3 : _atm "xsd_string\\" 
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
class _Car {
_Car : _name "xsd_string\\" 
}
_Car -->  __1 : _belongs
class _User {
_User : _name "xsd_string\\" 
}
_User *--  __2 : _worksFor
_Company <|-- __2
_GreatGrandson *--  __3 : _parent
__3 *--  __4 : _parent
class __4 {
__4 : _parent "Any\\ +" 
}
_Garage <|-- __1
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
class _gender {
<<enumeration>>
:Male
:Female
}
class _User CLOSED {
nodeKind: IRI 
}
_User CLOSED *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : _name "xsd_string\\ \\MaxLength \\3" 
_Blank2 : _age "xsd_int\\ ?" 
_Blank2 : _gender "_gender\\" 
}
_Blank2 -->  _User CLOSED : _knows
class _Company CLOSED {
_Company : _name "xsd_string\\" 
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
class _gender {
<<enumeration>>
:Male
:Female
}
class _User CLOSED {
nodeKind: IRI 
}
_User CLOSED *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
class _Blank2 {
_Blank2 : _name "xsd_string\\ \\MaxLength \\3" 
_Blank2 : _age "xsd_int\\ ?" 
_Blank2 : _gender "_gender\\" 
}
_Blank2 -->  _User CLOSED : _knows
class _Company CLOSED {
_Company : _name "xsd_string\\" 
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
class _inverse__gender {
<<enumeration>>
:Male
:Female
}
class _User {
_User : _inverse__name "xsd_string\\" 
_User : _inverse__gender "_inverse__gender\\" 
}
_Person <|-- _User : ^
_Company --> " +" _User : _inverse__worksFor
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
class Extra__FollowSpaniards {
<<enumeration>>
:follows
}
class _nationality {
<<enumeration>>
:Spain
}
class _FollowSpaniards {
_FollowSpaniards : Extra "Extra__FollowSpaniards\\" 
}
_FollowSpaniards *-- " +" __1 : _follows
class __1 {
__1 : _nationality "_nationality\\" 
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
class Extra__FollowSpaniards {
<<enumeration>>
:follows
}
class _nationality {
<<enumeration>>
:Spain
}
class _FollowSpaniards {
_FollowSpaniards : Extra "Extra__FollowSpaniards\\" 
}
_FollowSpaniards *-- " +" __1 : _follows
class __1 {
__1 : _nationality "_nationality\\" 
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
class _User {
_User : _email "IRI\\" 
}
_User *--  _Blank1 : $_name
_Blank1 *--  _Blank2 : OneOf
class _Blank2 {
_Blank2 : _name "Any\\" 
}
_Blank2 *--  _Blank3 : EachOf
class _Blank3 {
_Blank3 : _givenName "Any\\" 
_Blank3 : _familyName "Any\\" 
}
class _Employee {
_Employee : _employeeId "Any\\" 
}
_Employee -->  _Blank1 : &_name
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
class _User {
_User : _email "IRI\\" 
}
_User *--  _Blank1 : $_name
_Blank1 *--  _Blank2 : OneOf
class _Blank2 {
_Blank2 : _name "Any\\" 
}
_Blank2 *--  _Blank3 : EachOf
class _Blank3 {
_Blank3 : _givenName "Any\\" 
_Blank3 : _familyName "Any\\" 
}
class _Employee {
_Employee : _employeeId "Any\\" 
}
_Employee -->  _Blank1 : &_name
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
_User *--  _Blank1 : AND
_Blank1 *--  _Blank2 : Shape
_Blank1 *--  _Blank3 : Shape
class _Blank2 {
_Blank2 : _name "xsd_string\\" 
_Blank2 : _owns "IRI\\" 
}
_Blank3 -->  _Product : _owns
_Titanuser *--  _Blank4 : AND
_User <|-- _Titanuser
_Blank4 *--  _Blank5 : Shape
_Blank4 *--  _Blank6 : Shape
class _Blank5 {
_Blank5 : _titancode "xsd_string\\" 
}
class _Blank6 {
_Blank6 : _owns "Literal\\" 
}
class _Ultrauser {
nodeKind: Literal 
}
_User <|-- _Ultrauser
class _Product {
_Product : _productId "xsd_string\\ \\MinLength \\5 \\MaxLength \\10" 
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
_User *--  _Blank1 : OR
_Blank1 *--  _Blank2 : Shape
_Blank1 *--  _Blank3 : Shape
class _Blank2 {
_Blank2 : _name "xsd_string\\" 
_Blank2 : _owns "IRI\\" 
}
_Blank3 -->  _Product : _owns
_Titanuser *--  _Blank4 : OR
_User <|-- _Titanuser : OR
_Blank4 *--  _Blank5 : Shape
_Blank4 *--  _Blank6 : Shape
class _Blank5 {
_Blank5 : _titancode "xsd_string\\" 
}
class _Blank6 {
_Blank6 : _owns "Literal\\" 
}
class _Product {
_Product : _productId "xsd_string\\ \\OR \\MinLength \\5 \\OR \\MaxLength \\10" 
}
`;
    }

}
module.exports = MUMLRepository;