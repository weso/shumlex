class MUMLRepository {

    static getMUML0() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class _User {
_name "xsd_string\\" 
_age "xsd_int\\ ?" 
_gender "_gender__User\\" 
}
class _TypeTest_ {
_z "xsd_string\\" 
_b "xsd_date\\" 
_c "xsd_time\\" 
_d "xsd_dateTime\\" 
_e "xsd_duration\\" 
_f "xsd_byte\\" 
_g "xsd_decimal\\" 
_h "xsd_int\\" 
_i "xsd_integer\\" 
_j "xsd_long\\" 
_k "xsd_short\\" 
_l "xsd_boolean\\" 
_m "xsd_double\\" 
_n "xsd_float\\" 
_xyz "xsd_invent\\" 
}
class _gender__User {
<<enumeration>>
:Male
:Female
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
_name "xsd_string\\" 
_age "xsd_int\\" 
}
_User -->  _User : _knows
_User -->  _Company : _worksFor
_User --> " -//1,10//-" _Product_ : _buys
class _Ultrauser
_User <|-- _Ultrauser : a
class _Titanuser
_Titanuser *--  _Blank1 : AND
_User <|-- _Titanuser : AND0
class _Blank1 {
_titancode "xsd_string\\" 
}
class _Company {
_name "xsd_string\\" 
}
_Company --> " *" _User : _hasEmployee
_Company --> " -//5,//-" _Product_ : _possess
class _Product_ {
_name "Any\\" 
_sku "xsd_boolean\\" 
}
_Product_ --> " +" _Organization_ : _manufacturer
class _Organization_ {
_name "xsd_string\\" 
}
_Organization_ --> " ?" _Organization_ : _isPartOf
_Organization_ --> " -//5//-" _User : _hasDirectives
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
class _User {
_name "xsd_string\\" 
_age "xsd_int\\ ?" 
}
class _Ultrauser
_User <|-- _Ultrauser : a
class _Titanuser
_Titanuser *--  _Blank1 : AND
_User <|-- _Titanuser : AND0
class _Blank1 {
_titancode "xsd_string\\" 
}
class _VIPUser {
Extra "Extra__VIPUser\\" 
}
_User <|-- _VIPUser : a1
class Extra__VIPUser {
<<enumeration>>
a
}
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
class _Blank1 {
_name "xsd_string\\" 
}
class _Ultrauser {
nodeKind: Literal 
}
_User <|-- _Ultrauser : AND0
class _Titanuser {
nodeKind: NonLiteral 
}
_Titanuser *--  _Blank2 : AND1
_User <|-- _Titanuser : AND2
class _Blank2
class _Product_ {
nodeKind: BNode 
}
_Product_ *--  _Blank3 : AND3
class _Blank3
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
_name "xsd_string\\ \\/[a-z]+/" 
_age "xsd_int\\ ? \\MinInclusive \\18" 
_c "xsd_int\\ \\TotalDigits \\3" 
_d "xsd_int\\ \\FractionDigits \\4" 
_e "xsd_string\\ \\Length \\6" 
_f "xsd_string\\ \\MinLength \\3" 
_g "xsd_string\\ \\MaxLength \\15" 
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
class _Product {
_status "_status__Product\\" 
_phone "_phone__Product\\" 
_quantity "_quantity__Product\\" 
_url "_url__Product\\" 
}
class _status__Product {
<<enumeration>>
codes:*~ - codes:unknown - codes:bad.*~ 
"111"
}
class _phone__Product {
<<enumeration>>
"+34"*~ - "+3468031" - "+3467182"*~ 
}
class _quantity__Product {
<<enumeration>>
99*~ - 9987 - 991*~ 
}
class _url__Product {
<<enumeration>>
codes:Personal*~
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
class _Product {
_status "_status__Product\\" 
_name "_name__Product\\" 
_price "_price__Product\\" 
}
class _status__Product {
<<enumeration>>
. - codes:bad 
}
class _name__Product {
<<enumeration>>
. - "Trademark" 
}
class _price__Product {
<<enumeration>>
. - 66 
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
class _FrenchProduct {
_frlabel "_frlabel__FrenchProduct\\" 
}
class _EnglishProduct {
_enlabel "_enlabel__EnglishProduct\\" 
}
class _SpanishProduct {
_splabel "_splabel__SpanishProduct\\" 
}
class _AnyProduct {
_label "_label__AnyProduct\\" 
}
class _frlabel__FrenchProduct {
<<enumeration>>
@fr 
}
class _enlabel__EnglishProduct {
<<enumeration>>
@en*~ 
}
class _splabel__SpanishProduct {
<<enumeration>>
@es*~ - @es-AR - @es-ES 
}
class _label__AnyProduct {
<<enumeration>>
. - @kz 
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
_name "xsd_string\\" 
}
_User *-- " ?" _Blank1 : EachOf
_User *-- " *" _Blank2 : EachOf0
_User -->  _Garage : _owns
class _Blank1 {
_givenName "xsd_string\\" 
_familyName "xsd_string\\" 
}
class _Blank2 {
_c "xsd_string\\" 
}
_Blank2 --> " -//2,//-" _Something_ : _has
class _Garage
_Garage *-- " +" _Blank3 : EachOf1
class _Blank3 {
_AE86_ "xsd_string\\" 
}
_Blank3 *-- " ?" _Blank4 : EachOf2
_Blank3 *-- " ?" _Blank5 : EachOf3
class _Blank4 {
_Levin_ "xsd_string\\" 
_Cilinders_ "xsd_int\\" 
}
class _Blank5 {
_Trueno_ "xsd_string\\" 
_Cilinders_ "xsd_int\\" 
}
class _Something_
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
class _User
_User *--  _Blank1 : OneOf
class _Blank1 {
_name "xsd_string\\" 
}
_Blank1 *--  _Blank2 : EachOf
class _Blank2 {
_givenName "xsd_string\\ +" 
_familyName "xsd_string\\" 
}
class _Car {
_model "xsd_string\\" 
}
_Car *-- " -//1,2//-" _Blank3 : OneOf0
class _Blank3 {
_turbo "xsd_string\\" 
_misfiring "xsd_string\\" 
_atm "xsd_string\\" 
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
_name "xsd_string\\" 
}
_Car -->  __1 : _belongs
class _Garage
class _User {
_name "xsd_string\\" 
}
_User *--  __2 : _worksFor
class __2
_Company <|-- __2 : a
class _Company
class _GreatGrandson
_GreatGrandson *--  __3 : _parent
class __3
__3 *--  __4 : _parent0
class __4 {
_parent "Any\\ +" 
}
class __1
_Garage <|-- __1 : a1
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
class _User CLOSED {
nodeKind: IRI 
}
_User CLOSED *--  _Blank1 : AND
class _Blank1 {
_name "xsd_string\\ \\MaxLength \\3" 
_age "xsd_int\\ ?" 
_gender "_gender__Blank1\\" 
}
_Blank1 -->  _User CLOSED : _knows
class _Company CLOSED {
_name "xsd_string\\" 
}
class _gender__Blank1 {
<<enumeration>>
:Male
:Female
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
class _Person
class _User {
__name "xsd_string\\" 
__gender "__gender__User\\" 
}
_Person <|-- _User : ^a
class _Company
_Company --> " +" _User : __worksFor
class __gender__User {
<<enumeration>>
:Male
:Female
}
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
class _FollowSpaniards {
Extra "Extra__FollowSpaniards\\" 
}
_FollowSpaniards *-- " +" __1 : _follows
class __1 {
_nationality "_nationality___1\\" 
}
class Extra__FollowSpaniards {
<<enumeration>>
:follows
}
class _nationality___1 {
<<enumeration>>
:Spain
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
_email "IRI\\" 
}
_User *--  _Blank1 : $_name
class _Blank1
_Blank1 *--  _Blank2 : OneOf
class _Blank2 {
_name "Any\\" 
}
_Blank2 *--  _Blank3 : EachOf
class _Blank3 {
_givenName "Any\\" 
_familyName "Any\\" 
}
class _Employee {
_employeeId "Any\\" 
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
class _User
_User *--  _Blank1 : AND
class _Blank1
_Blank1 *--  _Blank2 : Shape
_Blank1 *--  _Blank3 : Shape0
class _Blank2 {
_name "xsd_string\\" 
_owns "IRI\\" 
}
class _Blank3
_Blank3 -->  _Product : _owns
class _Titanuser
_Titanuser *--  _Blank4 : AND1
_User <|-- _Titanuser : AND2
class _Blank4
_Blank4 *--  _Blank5 : Shape3
_Blank4 *--  _Blank6 : Shape4
class _Blank5 {
_titancode "xsd_string\\" 
}
class _Blank6 {
_owns "Literal\\" 
}
class _Ultrauser {
nodeKind: Literal 
}
_User <|-- _Ultrauser : AND5
class _Product {
_productId "xsd_string\\ \\MinLength \\5 \\AND \\MaxLength \\10" 
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
class _User
_User *--  _Blank1 : OR
class _Blank1
_Blank1 *--  _Blank2 : Shape
_Blank1 *--  _Blank3 : Shape0
class _Blank2 {
_name "xsd_string\\" 
_owns "IRI\\" 
}
class _Blank3
_Blank3 -->  _Product : _owns
class _Titanuser
_Titanuser *--  _Blank4 : OR1
_User <|-- _Titanuser : OR2
class _Blank4
_Blank4 *--  _Blank5 : Shape3
_Blank4 *--  _Blank6 : Shape4
class _Blank5 {
_titancode "xsd_string\\" 
}
class _Blank6 {
_owns "Literal\\" 
}
class _Product {
_productId "xsd_string\\ ?" 
_productId "Any\\ ? \\MinLength \\5" 
_productId "Any\\ ? \\MaxLength \\10" 
}
`;
    }
	
	static getMUML17() {
		return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\: <https://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class _User {
_name "xsd_string\\" 
_birthDate "xsd_date\\ ?" 
}
class _NoUser
_User <|-- _NoUser : NOT
class _NoName
_NoName *--  _Blank1 : NOT0
class _Blank1 {
_name "xsd_string\\" 
}
`;
	}
	
	static getMUML18() {
        return `classDiagram
class Prefixes {
<<enumeration>>
prefix \\rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix \\: <http://example.org/>
prefix \\schema: <http://schema.org/>
prefix \\xsd: <http://www.w3.org/2001/XMLSchema#>
base <http://example.org/>
}
class _AdultPerson {
_name "xsd_string\\" 
_age "Any\\ \\MinInclusive \\18" 
_gender "_gender__AdultPerson\\ ?" 
_gender "xsd_string\\ ?" 
Extra "Extra__AdultPerson\\" 
}
_AdultPerson --> " ?" _Address CLOSED : _address
_AdultPerson --> " +" _Company : _worksFor
schema_Person <|-- _AdultPerson : a
class schema_Person
class _Address CLOSED {
_addressLine "xsd_string\\ -//1,3//-" 
_postalCode "Any\\ \\/[0-9]-//5//-/" 
_city "xsd_string\\" 
}
_Address CLOSED -->  _State : _state
class _Company {
_name "xsd_string\\" 
}
_Company -->  _State : _state0
_Company --> " *" _AdultPerson : _employee
class _State {
_pattern "_\\ \\/[A-Z]-//2//-/" 
}
class _gender__AdultPerson {
<<enumeration>>
:Male
:Female
}
class Extra__AdultPerson {
<<enumeration>>
rdf:type
}
`;
	}

}
module.exports = MUMLRepository;