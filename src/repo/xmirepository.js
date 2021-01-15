class Xmirepository {

    /**
     * Elimina los IDs únicos de cara a las comparaciones
     * @param text  Texto a procesar
     * @returns {*} Texto sin dichos IDs
     */
    static removeUniqueIDs(text) {
        return text.replace(/xmi:id="[0-9a-zA-Z]+"/g, "xmi:id=\"\"")
            .replace(/type="[0-9a-zA-Z]+"/g, "type=\"\"")
            .replace(/association="[0-9a-zA-Z]+"/g, "association=\"\"")
            .replace(/memberEnd="[ 0-9a-zA-Z]+"/g, "memberEnd=\"\"")
            .replace(/general="[0-9a-zA-Z]+"/g, "general=\"\"")
            .replace(/constrainedElement="[0-9a-zA-Z]+"/g, "constrainedElement=\"\"")
            .replace(/annotatedElement="[0-9a-zA-Z]+"/g, "annotatedElement=\"\"")
            .replace(/<body>[0-9a-zA-Z]+(<\/body>)/g, "<body></body>");
    }

    /**
     * Shape
     * @returns {string}
     */
    static getXMI1() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8fsti2n\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8fsti2r\" name=\":User\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8fsti2s\" name=\"&lt;TypeTest&gt;\"/>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8fsti2o\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8fsti2p\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8fsti2q\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>"
    }

    /**
     * Atributos básicos
     * @returns {string}
     */
    static getXMI2() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8ftbvoo\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8ftbvot\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvou\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvov\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qewr0\" />\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9qewr3\" name=\":gender\" visibility=\"public\" type=\"kb9qewr2\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8ftbvow\" name=\"&lt;TypeTest&gt;\">\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvox\" name=\":z\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvoy\" name=\":b\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Date\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp0\" name=\":c\" visibility=\"public\" type=\"k8ftbvoz\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp2\" name=\":d\" visibility=\"public\" type=\"k8ftbvp1\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp4\" name=\":e\" visibility=\"public\" type=\"k8ftbvp3\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp5\" name=\":f\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Byte\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp7\" name=\":g\" visibility=\"public\" type=\"k8ftbvp6\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp8\" name=\":h\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp9\" name=\":i\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Integer\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpa\" name=\":j\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Long\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpb\" name=\":k\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Short\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpc\" name=\":l\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Boolean\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpd\" name=\":m\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Double\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpe\" name=\":n\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Float\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvpg\" name=\":xyz\" visibility=\"public\" type=\"k8ftbvpf\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8ftbvop\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvoq\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvor\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvos\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qewr2\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qewsm\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qewsn\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvoz\" name=\"xsd:time\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp1\" name=\"xsd:dateTime\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp3\" name=\"xsd:duration\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp6\" name=\"xsd:decimal\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvpf\" name=\"xsd:invent\"/>\n" +
            "</uml:Model>";
    }

    /**
     * Relaciones y otros atributos
     * @returns {string}
     */
    static getXMI3() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kjsgcuny" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kjsgcuo3" name=":User">
	<ownedAttribute xmi:id="kjsgcuo9" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsgcuoa" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsgcuob" name=":knows" visibility="public" type="kjsgcuo3" association="kjsgcuoc" ></ownedAttribute>
	<ownedAttribute xmi:id="kjsgcuod" name=":worksFor" visibility="public" type="kjsgcuo6" association="kjsgcuoe" ></ownedAttribute>
	<ownedAttribute xmi:id="kjsgcuof" name=":buys" visibility="public" type="kjsgcuo7" association="kjsgcuog" >
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kjsgcuoh" value="10"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcuoc" memberEnd="kjsgcuob kjsgcuoi">
	<ownedEnd xmi:id="kjsgcuoi" visibility="public" type="kjsgcuo3" association="kjsgcuoc"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcuoe" memberEnd="kjsgcuod kjsgcuoj">
	<ownedEnd xmi:id="kjsgcuoj" visibility="public" type="kjsgcuo3" association="kjsgcuoe"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcuog" memberEnd="kjsgcuof kjsgcuok">
	<ownedEnd xmi:id="kjsgcuok" visibility="public" type="kjsgcuo3" association="kjsgcuog"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsgcuo4" name=":Ultrauser">
	<generalization xmi:id="kjsgcuol" general="kjsgcuo3" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsgcuo5" name=":Titanuser">
	<ownedAttribute xmi:id="kjsgcuom" name="AND" visibility="public" type="kjsgcuon" association="kjsgcuoo" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="kjsgcuop" general="kjsgcuo3" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcuoo" memberEnd="kjsgcuom kjsgcuoq">
	<ownedEnd xmi:id="kjsgcuoq" visibility="public" type="kjsgcuo5" association="kjsgcuoo"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsgcuon" name="_Blank1">
	<ownedAttribute xmi:id="kjsgcuor" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsgcuo6" name=":Company">
	<ownedAttribute xmi:id="kjsgcuos" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsgcuot" name=":hasEmployee" visibility="public" type="kjsgcuo3" association="kjsgcuou" >
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kjsgcuov" />
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kjsgcuow" value="*"/></ownedAttribute>
	<ownedAttribute xmi:id="kjsgcuox" name=":possess" visibility="public" type="kjsgcuo7" association="kjsgcuoy" >
		<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kjsgcuoz" value="5"/>
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kjsgcup0" value="*"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcuou" memberEnd="kjsgcuot kjsgcup1">
	<ownedEnd xmi:id="kjsgcup1" visibility="public" type="kjsgcuo6" association="kjsgcuou"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcuoy" memberEnd="kjsgcuox kjsgcup2">
	<ownedEnd xmi:id="kjsgcup2" visibility="public" type="kjsgcuo6" association="kjsgcuoy"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsgcuo7" name="&lt;Product&gt;">
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsgcup3" name=":name" visibility="public" type="kjsgcup4" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsgcup5" name=":sku" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Boolean">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsgcup6" name=":manufacturer" visibility="public" type="kjsgcuo8" association="kjsgcup7" >
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kjsgcup8" value="*"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcup7" memberEnd="kjsgcup6 kjsgcup9">
	<ownedEnd xmi:id="kjsgcup9" visibility="public" type="kjsgcuo7" association="kjsgcup7"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsgcuo8" name="&lt;Organization&gt;">
	<ownedAttribute xmi:id="kjsgcupa" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsgcupb" name=":isPartOf" visibility="public" type="kjsgcuo8" association="kjsgcupc" >
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kjsgcupd" /></ownedAttribute>
	<ownedAttribute xmi:id="kjsgcupe" name=":hasDirectives" visibility="public" type="kjsgcuo3" association="kjsgcupf" >
		<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kjsgcupg" value="5"/>
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kjsgcuph" value="5"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcupc" memberEnd="kjsgcupb kjsgcupi">
	<ownedEnd xmi:id="kjsgcupi" visibility="public" type="kjsgcuo8" association="kjsgcupc"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsgcupf" memberEnd="kjsgcupe kjsgcupj">
	<ownedEnd xmi:id="kjsgcupj" visibility="public" type="kjsgcuo8" association="kjsgcupf"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsgcuo2" name="Prefixes">
	<ownedLiteral xmi:id="kjsgcunz" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="kjsgcuo0" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kjsgcuo1" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsgcup4" name="Any"/>
</uml:Model>`;
    }

    static getXMI3VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 shexbasico.profile.uml#Rs0ZnU6GAqACHQBO_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"Rs0ZnU6GAqACHQBO\">\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgxig71\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgxig77\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"SbGZnU6GAqACHQWN_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"SbGZnU6GAqACHQWN_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":age\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgxig79\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"ObGZnU6GAqACHQWQ_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"ObGZnU6GAqACHQWQ_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":knows\" type=\"kbgxig71\" visibility=\"public\" xmi:id=\"kbgxig7c\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"G7GZnU6GAqACHQWe_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"G7GZnU6GAqACHQWe_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":worksFor\" type=\"kbgxig74\" visibility=\"public\" xmi:id=\"kbgxig7e\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"u7GZnU6GAqACHQWn_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"u7GZnU6GAqACHQWn_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":buys\" type=\"kbgxig75\" visibility=\"public\" xmi:id=\"kbgxig7g\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"N7GZnU6GAqACHQWw_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"10\" xmi:id=\"N7GZnU6GAqACHQWw_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Ultrauser\" visibility=\"public\" xmi:id=\"kbgxig72\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbgxig71\" name=\"\" xmi:id=\"kbgxig7m\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Titanuser\" visibility=\"public\" xmi:id=\"kbgxig73\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbgxig71\" name=\"\" xmi:id=\"kbgxig7q\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbgxig7o\" visibility=\"public\" xmi:id=\"kbgxig7n\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"UHGZnU6GAqACHQW._multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"UHGZnU6GAqACHQW._multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbgxig7o\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbgxig7t\" visibility=\"public\" xmi:id=\"kbgxig7s\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"8HGZnU6GAqACHQXI_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"8HGZnU6GAqACHQXI_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbgxig7t\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":titancode\" visibility=\"public\" xmi:id=\"kbgxig7w\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"qHGZnU6GAqACHQXL_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"qHGZnU6GAqACHQXL_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Company\" visibility=\"public\" xmi:id=\"kbgxig74\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgxig7x\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eHGZnU6GAqACHQXO_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eHGZnU6GAqACHQXO_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":hasEmployee\" type=\"kbgxig71\" visibility=\"public\" xmi:id=\"kbgxig7y\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"eHGZnU6GAqACHQXX_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"eHGZnU6GAqACHQXX_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":possess\" type=\"kbgxig75\" visibility=\"public\" xmi:id=\"kbgxig82\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"5\" xmi:id=\"FHGZnU6GAqACHQXg_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"FHGZnU6GAqACHQXg_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"&lt;Product&gt;\" visibility=\"public\" xmi:id=\"kbgxig75\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":name\" type=\"kbgxig89\" visibility=\"public\" xmi:id=\"kbgxig88\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"THGZnU6GAqACHQXj_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"THGZnU6GAqACHQXj_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":sku\" visibility=\"public\" xmi:id=\"kbgxig8a\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"THGZnU6GAqACHQXl_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"THGZnU6GAqACHQXl_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Boolean\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":manufacturer\" type=\"kbgxig76\" visibility=\"public\" xmi:id=\"kbgxig8b\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"PHGZnU6GAqACHQXu_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"PHGZnU6GAqACHQXu_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"&lt;Organization&gt;\" visibility=\"public\" xmi:id=\"kbgxig76\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgxig8f\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"PHGZnU6GAqACHQXx_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"PHGZnU6GAqACHQXx_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":isPartOf\" type=\"kbgxig76\" visibility=\"public\" xmi:id=\"kbgxig8g\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"0nGZnU6GAqACHQX6_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"0nGZnU6GAqACHQX6_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":hasDirectives\" type=\"kbgxig71\" visibility=\"public\" xmi:id=\"kbgxig8j\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"5\" xmi:id=\"qnGZnU6GAqACHQYD_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"5\" xmi:id=\"qnGZnU6GAqACHQYD_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgxig70\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgxig6x\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgxig6y\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgxig6z\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Any\" visibility=\"public\" xmi:id=\"kbgxig89\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig7j kbgxig7c\" name=\"\" xmi:id=\"kbgxig7d\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig71\" visibility=\"public\" xmi:id=\"kbgxig7j\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"y7GZnU6GAqACHQWc_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"y7GZnU6GAqACHQWc_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig7k kbgxig7e\" name=\"\" xmi:id=\"kbgxig7f\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig71\" visibility=\"public\" xmi:id=\"kbgxig7k\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"u7GZnU6GAqACHQWl_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"u7GZnU6GAqACHQWl_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig7l kbgxig7g\" name=\"\" xmi:id=\"kbgxig7h\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig71\" visibility=\"public\" xmi:id=\"kbgxig7l\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"57GZnU6GAqACHQWu_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"57GZnU6GAqACHQWu_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig7r kbgxig7n\" name=\"\" xmi:id=\"kbgxig7p\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig73\" visibility=\"public\" xmi:id=\"kbgxig7r\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"UHGZnU6GAqACHQW8_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"UHGZnU6GAqACHQW8_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig7v kbgxig7s\" name=\"\" xmi:id=\"kbgxig7u\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig7o\" visibility=\"public\" xmi:id=\"kbgxig7v\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"8HGZnU6GAqACHQXG_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"8HGZnU6GAqACHQXG_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig86 kbgxig7y\" name=\"\" xmi:id=\"kbgxig7z\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig74\" visibility=\"public\" xmi:id=\"kbgxig86\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eHGZnU6GAqACHQXV_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eHGZnU6GAqACHQXV_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig87 kbgxig82\" name=\"\" xmi:id=\"kbgxig83\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig74\" visibility=\"public\" xmi:id=\"kbgxig87\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"FHGZnU6GAqACHQXe_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"FHGZnU6GAqACHQXe_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig8e kbgxig8b\" name=\"\" xmi:id=\"kbgxig8c\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig75\" visibility=\"public\" xmi:id=\"kbgxig8e\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"PHGZnU6GAqACHQXs_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"PHGZnU6GAqACHQXs_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig8n kbgxig8g\" name=\"\" xmi:id=\"kbgxig8h\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig76\" visibility=\"public\" xmi:id=\"kbgxig8n\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"YnGZnU6GAqACHQX4_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"YnGZnU6GAqACHQX4_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgxig8o kbgxig8j\" name=\"\" xmi:id=\"kbgxig8k\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgxig76\" visibility=\"public\" xmi:id=\"kbgxig8o\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"CnGZnU6GAqACHQYB_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"CnGZnU6GAqACHQYB_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<uml:Diagram diagramType=\"ClassDiagram\" documentation=\"\" name=\"Class Diagram1\" toolName=\"Visual Paradigm\" xmi:id=\"HGWZnU6GAqACHQYW\">\n" +
            "\t\t\t\n" +
            "\t\t\t<uml:Diagram.element>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"639,263,80,40\" preferredShapeType=\"Class\" subject=\"kbgxig7o\" xmi:id=\"ViOZnU6GAqACHQYk\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t</uml:Diagram.element>\n" +
            "\t\t</uml:Diagram>\n" +
            "\t\t<packagedElement name=\"Int\" visibility=\"public\" xmi:id=\"Int_id\" xmi:type=\"uml:DataType\"/>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgxig70\" xmi:id=\"kbgxig70_enumeration\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgxig89\" xmi:id=\"kbgxig89_primitive\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgxig7a\" xmi:id=\"kbgxig7a_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Herencia simple
     * @returns {string}
     */
    static getXMI5() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kjsfr88y" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kjsfr893" name=":User">
	<ownedAttribute xmi:id="kjsfr897" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsfr899" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kjsfr898" />
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfr894" name=":Ultrauser">
	<generalization xmi:id="kjsfr89a" general="kjsfr893" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfr895" name=":Titanuser">
	<ownedAttribute xmi:id="kjsfr89b" name="AND" visibility="public" type="kjsfr89c" association="kjsfr89d" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="kjsfr89e" general="kjsfr893" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsfr89d" memberEnd="kjsfr89b kjsfr89f">
	<ownedEnd xmi:id="kjsfr89f" visibility="public" type="kjsfr895" association="kjsfr89d"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfr89c" name="_Blank1">
	<ownedAttribute xmi:id="kjsfr89g" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfr896" name=":VIPUser">
	<generalization xmi:id="kjsfr89h" general="kjsfr893" name="a"/>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfr89j" name="Extra" visibility="public" type="kjsfr89i" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsfr892" name="Prefixes">
	<ownedLiteral xmi:id="kjsfr88z" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="kjsfr890" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kjsfr891" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsfr89i" name="Extra_:VIPUser">
	<ownedLiteral xmi:id="kjsfr89k" name="a"/>
</packagedElement>
</uml:Model>`;
    }

    static getXMI5VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 herencias.profile.uml#HN7NnU6GAqACHQax_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"HN7NnU6GAqACHQax\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"HN7NnU6GAqACHQax_HN7NnU6GAqACHQax_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"HN7NnU6GAqACHQax_HN7NnU6GAqACHQax_content_annotations\">\n" +
            "\t\t\t\t<references href=\"herencias.profile.uml#HN7NnU6GAqACHQax_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"herencias.profile.uml#HN7NnU6GAqACHQax_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgykgje\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgykgji\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"IJXNnU6GAqACHQou_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"IJXNnU6GAqACHQou_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":age\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgykgjk\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"IJXNnU6GAqACHQow_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"IJXNnU6GAqACHQow_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Ultrauser\" visibility=\"public\" xmi:id=\"kbgykgjf\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbgykgje\" name=\"\" xmi:id=\"kbgykgjl\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Titanuser\" visibility=\"public\" xmi:id=\"kbgykgjg\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbgykgje\" name=\"\" xmi:id=\"kbgykgjp\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbgykgjn\" visibility=\"public\" xmi:id=\"kbgykgjm\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"KJXNnU6GAqACHQo9_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"KJXNnU6GAqACHQo9_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbgykgjn\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbgykgjs\" visibility=\"public\" xmi:id=\"kbgykgjr\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eJXNnU6GAqACHQpH_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eJXNnU6GAqACHQpH_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbgykgjs\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":titancode\" visibility=\"public\" xmi:id=\"kbgykgjv\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"FJXNnU6GAqACHQpK_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"FJXNnU6GAqACHQpK_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":VIPUser\" visibility=\"public\" xmi:id=\"kbgykgjh\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"Extra\" type=\"kbgykgjx\" visibility=\"public\" xmi:id=\"kbgykgjy\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"FJXNnU6GAqACHQpN_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"FJXNnU6GAqACHQpN_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<generalization general=\"kbgykgje\" name=\"\" xmi:id=\"kbgykgjw\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgykgjd\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgykgja\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgykgjb\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgykgjc\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Extra_:VIPUser\" visibility=\"public\" xmi:id=\"kbgykgjx\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"a\" visibility=\"public\" xmi:id=\"kbgykgjz\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgykgjq kbgykgjm\" name=\"\" xmi:id=\"kbgykgjo\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgykgjg\" visibility=\"public\" xmi:id=\"kbgykgjq\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"kJXNnU6GAqACHQo7_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"kJXNnU6GAqACHQo7_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgykgju kbgykgjr\" name=\"\" xmi:id=\"kbgykgjt\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgykgjn\" visibility=\"public\" xmi:id=\"kbgykgju\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eJXNnU6GAqACHQpF_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eJXNnU6GAqACHQpF_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<uml:Diagram diagramType=\"ClassDiagram\" documentation=\"\" name=\"Class Diagram1\" toolName=\"Visual Paradigm\" xmi:id=\".kPNnU6GAqACHQpd\">\n" +
            "\t\t\t\n" +
            "\t\t\t<uml:Diagram.element>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"696,262,80,40\" preferredShapeType=\"Class\" subject=\"kbgykgjn\" xmi:id=\"PYvNnU6GAqACHQpr\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"1096,262,97,40\" preferredShapeType=\"Class\" subject=\"kbgykgjs\" xmi:id=\"_YvNnU6GAqACHQpt\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"306,262,80,40\" preferredShapeType=\"Class\" subject=\"kbgykgjg\" xmi:id=\"g4vNnU6GAqACHQpv\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"206,262,80,40\" preferredShapeType=\"Class\" subject=\"kbgykgjf\" xmi:id=\"w4vNnU6GAqACHQpx\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"206,79,80,53\" preferredShapeType=\"Class\" subject=\"kbgykgje\" xmi:id=\"o4vNnU6GAqACHQpz\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"63,262,124,40\" preferredShapeType=\"Class\" subject=\"kbgykgjh\" xmi:id=\"Y4vNnU6GAqACHQp1\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"367,347,97,53\" preferredShapeType=\"Class\" subject=\"kbgykgjx\" xmi:id=\"E4vNnU6GAqACHQp3\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement geometry=\"63,347,260,83\" preferredShapeType=\"Class\" subject=\"kbgykgjd\" xmi:id=\"s4vNnU6GAqACHQp5\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFill color1=\"Cr:122,207,245,255\" color2=\"\" style=\"1\" transparency=\"0\" type=\"1\"/>\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t\t<CompartmentFont value=\"none\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement fromDiagramElement=\"PYvNnU6GAqACHQpr\" geometry=\"777,282;1095,282;\" preferredShapeType=\"Association\" subject=\"kbgykgjt\" toDiagramElement=\"_YvNnU6GAqACHQpt\" xmi:id=\"S4vNnU6GAqACHQp7\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement fromDiagramElement=\"g4vNnU6GAqACHQpv\" geometry=\"387,282;695,282;\" preferredShapeType=\"Association\" subject=\"kbgykgjo\" toDiagramElement=\"PYvNnU6GAqACHQpr\" xmi:id=\"y4vNnU6GAqACHQp9\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement fromDiagramElement=\"o4vNnU6GAqACHQpz\" geometry=\"246,133;246,261;\" preferredShapeType=\"Generalization\" subject=\"kbgykgjl\" toDiagramElement=\"w4vNnU6GAqACHQpx\" xmi:id=\"K4vNnU6GAqACHQp_\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement fromDiagramElement=\"o4vNnU6GAqACHQpz\" geometry=\"286,133;306,261;\" preferredShapeType=\"Generalization\" subject=\"kbgykgjp\" toDiagramElement=\"g4vNnU6GAqACHQpv\" xmi:id=\"K4vNnU6GAqACHQqB\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t\t<uml:DiagramElement fromDiagramElement=\"o4vNnU6GAqACHQpz\" geometry=\"206,133;187,261;\" preferredShapeType=\"Generalization\" subject=\"kbgykgjw\" toDiagramElement=\"Y4vNnU6GAqACHQp1\" xmi:id=\"q4vNnU6GAqACHQqD\">\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t\t<elementFont bold=\"false\" color=\"Cr:0,0,0,255\" italic=\"false\" name=\"Dialog\" size=\"11\" style=\"0\"/>\n" +
            "\t\t\t\t\t<elementLine color=\"Cr:0,0,0,255\" style=\"1\" transparency=\"0\" weight=\"1.0\"/>\n" +
            "\t\t\t\t</uml:DiagramElement>\n" +
            "\t\t\t</uml:Diagram.element>\n" +
            "\t\t</uml:Diagram>\n" +
            "\t\t<packagedElement name=\"Int\" visibility=\"public\" xmi:id=\"Int_id\" xmi:type=\"uml:DataType\"/>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgykgjd\" xmi:id=\"kbgykgjd_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgykgjx\" xmi:id=\"kbgykgjx_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Herencia múltiple
     * @returns {string}
     */
    static getXMI6() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kjsfvilu" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kjsfvilz" name=":User">
	<ownedAttribute xmi:id="kjsfvim4" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsfvim6" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kjsfvim5" />
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfvim0" name="&lt;Citizen&gt;">
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfvim7" name=":id" visibility="public" type="kjsfvim8" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfvim1" name=":Ultrauser">
	<generalization xmi:id="kjsfvim9" general="kjsfvilz" name="a"/>
	<generalization xmi:id="kjsfvima" general="kjsfvim0" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfvim2" name=":Titanuser">
	<ownedAttribute xmi:id="kjsfvimb" name="AND" visibility="public" type="kjsfvimc" association="kjsfvimd" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="kjsfvime" general="kjsfvilz" name="AND"/>
	<generalization xmi:id="kjsfvimf" general="kjsfvim0" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsfvimd" memberEnd="kjsfvimb kjsfvimg">
	<ownedEnd xmi:id="kjsfvimg" visibility="public" type="kjsfvim2" association="kjsfvimd"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfvimc" name="_Blank1">
	<ownedAttribute xmi:id="kjsfvimh" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfvim3" name=":VIPUser">
	<generalization xmi:id="kjsfvimi" general="kjsfvilz" name="a"/>
	<generalization xmi:id="kjsfvimj" general="kjsfvim0" name="a"/>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfviml" name="Extra" visibility="public" type="kjsfvimk" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsfvily" name="Prefixes">
	<ownedLiteral xmi:id="kjsfvilv" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="kjsfvilw" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kjsfvilx" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsfvim8" name="Any"/>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsfvimk" name="Extra_:VIPUser">
	<ownedLiteral xmi:id="kjsfvimm" name="a"/>
</packagedElement>
</uml:Model>`;
    }

    /**
     * Tipos de nodo
     * @returns {string}
     */
    static getXMI7() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kjsfxwid" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwii" name=":User">
	<ownedAttribute xmi:id="kjsfxwin" name="AND" visibility="public" type="kjsfxwio" association="kjsfxwip" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfxwir" name="nodeKind" visibility="public" type="kjsfxwiq" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsfxwip" memberEnd="kjsfxwin kjsfxwis">
	<ownedEnd xmi:id="kjsfxwis" visibility="public" type="kjsfxwii" association="kjsfxwip"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwio" name="_Blank1">
	<ownedAttribute xmi:id="kjsfxwit" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwij" name=":Ultrauser">
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfxwiv" name="nodeKind" visibility="public" type="kjsfxwiu" isUnique="true">
	</ownedAttribute>
	<generalization xmi:id="kjsfxwiw" general="kjsfxwii" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwik" name=":Titanuser">
	<ownedAttribute xmi:id="kjsfxwix" name="AND" visibility="public" type="kjsfxwiy" association="kjsfxwiz" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="kjsfxwj0" general="kjsfxwii" name="AND"/>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfxwj2" name="nodeKind" visibility="public" type="kjsfxwj1" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsfxwiz" memberEnd="kjsfxwix kjsfxwj3">
	<ownedEnd xmi:id="kjsfxwj3" visibility="public" type="kjsfxwik" association="kjsfxwiz"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwiy" name="_Blank2"/>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwil" name="&lt;Product&gt;">
	<ownedAttribute xmi:id="kjsfxwj4" name="AND" visibility="public" type="kjsfxwj5" association="kjsfxwj6" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfxwj8" name="nodeKind" visibility="public" type="kjsfxwj7" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsfxwj6" memberEnd="kjsfxwj4 kjsfxwj9">
	<ownedEnd xmi:id="kjsfxwj9" visibility="public" type="kjsfxwil" association="kjsfxwj6"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwj5" name="_Blank3"/>
<packagedElement xmi:type="uml:Class" xmi:id="kjsfxwim" name="&lt;AThing&gt;">
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsfxwja" name="nodeKind" visibility="public" type="kjsfxwiq" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsfxwih" name="Prefixes">
	<ownedLiteral xmi:id="kjsfxwie" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="kjsfxwif" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kjsfxwig" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsfxwiq" name="IRI"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsfxwiu" name="Literal"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsfxwj1" name="NonLiteral"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsfxwj7" name="BNode"/>
</uml:Model>`;
    }

    static getXMI7VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 rtn.profile.uml#zyCdnU6GAqACHQqh_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"zyCdnU6GAqACHQqh\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"zyCdnU6GAqACHQqh_zyCdnU6GAqACHQqh_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"zyCdnU6GAqACHQqh_zyCdnU6GAqACHQqh_content_annotations\">\n" +
            "\t\t\t\t<references href=\"rtn.profile.uml#zyCdnU6GAqACHQqh_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"rtn.profile.uml#zyCdnU6GAqACHQqh_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgyso6a\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"nodeKind\" type=\"kbgyso6i\" visibility=\"public\" xmi:id=\"kbgyso6j\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"tWydnU6GAqACHQ4e_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"tWydnU6GAqACHQ4e_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbgyso6g\" visibility=\"public\" xmi:id=\"kbgyso6f\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"7WydnU6GAqACHQ4n_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"7WydnU6GAqACHQ4n_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbgyso6g\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbgyso6m\" visibility=\"public\" xmi:id=\"kbgyso6l\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"g2ydnU6GAqACHQ4x_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"g2ydnU6GAqACHQ4x_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbgyso6m\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgyso6p\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"Y2ydnU6GAqACHQ40_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"Y2ydnU6GAqACHQ40_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Ultrauser\" visibility=\"public\" xmi:id=\"kbgyso6b\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"nodeKind\" type=\"kbgyso6q\" visibility=\"public\" xmi:id=\"kbgyso6r\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"Y2ydnU6GAqACHQ43_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"Y2ydnU6GAqACHQ43_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<generalization general=\"kbgyso6a\" name=\"\" xmi:id=\"kbgyso6s\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Titanuser\" visibility=\"public\" xmi:id=\"kbgyso6c\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"nodeKind\" type=\"kbgyso6x\" visibility=\"public\" xmi:id=\"kbgyso6y\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ47_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ47_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<generalization general=\"kbgyso6a\" name=\"\" xmi:id=\"kbgyso6w\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbgyso6u\" visibility=\"public\" xmi:id=\"kbgyso6t\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ5F_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ5F_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank3\" visibility=\"public\" xmi:id=\"kbgyso6u\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbgyso71\" visibility=\"public\" xmi:id=\"kbgyso70\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"q2ydnU6GAqACHQ5P_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"q2ydnU6GAqACHQ5P_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank4\" visibility=\"public\" xmi:id=\"kbgyso71\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"&lt;Product&gt;\" visibility=\"public\" xmi:id=\"kbgyso6d\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"nodeKind\" type=\"kbgyso77\" visibility=\"public\" xmi:id=\"kbgyso78\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"a2ydnU6GAqACHQ5T_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"a2ydnU6GAqACHQ5T_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbgyso75\" visibility=\"public\" xmi:id=\"kbgyso74\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"22ydnU6GAqACHQ5c_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"22ydnU6GAqACHQ5c_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank5\" visibility=\"public\" xmi:id=\"kbgyso75\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbgyso7b\" visibility=\"public\" xmi:id=\"kbgyso7a\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"l2ydnU6GAqACHQ5m_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"l2ydnU6GAqACHQ5m_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank6\" visibility=\"public\" xmi:id=\"kbgyso7b\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"&lt;AThing&gt;\" visibility=\"public\" xmi:id=\"kbgyso6e\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"nodeKind\" type=\"kbgyso6i\" visibility=\"public\" xmi:id=\"kbgyso7e\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"t2ydnU6GAqACHQ5q_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"t2ydnU6GAqACHQ5q_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgyso69\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgyso66\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgyso67\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgyso68\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"IRI\" visibility=\"public\" xmi:id=\"kbgyso6i\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Literal\" visibility=\"public\" xmi:id=\"kbgyso6q\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"NonLiteral\" visibility=\"public\" xmi:id=\"kbgyso6x\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"BNode\" visibility=\"public\" xmi:id=\"kbgyso77\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgyso6k kbgyso6f\" name=\"\" xmi:id=\"kbgyso6h\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgyso6a\" visibility=\"public\" xmi:id=\"kbgyso6k\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"7WydnU6GAqACHQ4l_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"7WydnU6GAqACHQ4l_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgyso6o kbgyso6l\" name=\"\" xmi:id=\"kbgyso6n\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgyso6g\" visibility=\"public\" xmi:id=\"kbgyso6o\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"g2ydnU6GAqACHQ4v_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"g2ydnU6GAqACHQ4v_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgyso6z kbgyso6t\" name=\"\" xmi:id=\"kbgyso6v\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgyso6c\" visibility=\"public\" xmi:id=\"kbgyso6z\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ5D_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ5D_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgyso73 kbgyso70\" name=\"\" xmi:id=\"kbgyso72\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgyso6u\" visibility=\"public\" xmi:id=\"kbgyso73\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ5N_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"02ydnU6GAqACHQ5N_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgyso79 kbgyso74\" name=\"\" xmi:id=\"kbgyso76\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgyso6d\" visibility=\"public\" xmi:id=\"kbgyso79\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"22ydnU6GAqACHQ5a_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"22ydnU6GAqACHQ5a_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgyso7d kbgyso7a\" name=\"\" xmi:id=\"kbgyso7c\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgyso75\" visibility=\"public\" xmi:id=\"kbgyso7d\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\".2ydnU6GAqACHQ5k_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\".2ydnU6GAqACHQ5k_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgyso69\" xmi:id=\"kbgyso69_enumeration\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgyso6i\" xmi:id=\"kbgyso6i_primitive\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgyso6q\" xmi:id=\"kbgyso6q_primitive\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgyso6x\" xmi:id=\"kbgyso6x_primitive\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgyso77\" xmi:id=\"kbgyso77_primitive\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Facetas de literales
     * @returns {string}
     */
    static getXMI9() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbeaes49\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeaes4e\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeaes4f\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeaes4k\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kbeaes4j\" />\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeaes4o\" name=\":c\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeaes4s\" name=\":d\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeaes4w\" name=\":e\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeaes50\" name=\":f\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeaes54\" name=\":g\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbeaes4h\" name=\"/[a-z]+/\" constrainedElement=\"kbeaes4f\">\n" +
            "<specification body=\"/[a-z]+/\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeaes4g\" xmi:id=\"kbeaes4i\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeaes4f</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeaes4m\" name=\"MinInclusive 18\" constrainedElement=\"kbeaes4k\">\n" +
            "<specification body=\"MinInclusive 18\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeaes4l\" xmi:id=\"kbeaes4n\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeaes4k</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeaes4q\" name=\"TotalDigits 3\" constrainedElement=\"kbeaes4o\">\n" +
            "<specification body=\"TotalDigits 3\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeaes4p\" xmi:id=\"kbeaes4r\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeaes4o</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeaes4u\" name=\"FractionDigits 4\" constrainedElement=\"kbeaes4s\">\n" +
            "<specification body=\"FractionDigits 4\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeaes4t\" xmi:id=\"kbeaes4v\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeaes4s</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeaes4y\" name=\"Length 6\" constrainedElement=\"kbeaes4w\">\n" +
            "<specification body=\"Length 6\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeaes4x\" xmi:id=\"kbeaes4z\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeaes4w</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeaes52\" name=\"MinLength 3\" constrainedElement=\"kbeaes50\">\n" +
            "<specification body=\"MinLength 3\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeaes51\" xmi:id=\"kbeaes53\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeaes50</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeaes56\" name=\"MaxLength 15\" constrainedElement=\"kbeaes54\">\n" +
            "<specification body=\"MaxLength 15\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeaes55\" xmi:id=\"kbeaes57\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeaes54</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbeaes4d\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbeaes4a\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbeaes4b\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbeaes4c\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI9VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 facetas.profile.uml#P6A9nU6GAqACHQ59_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"P6A9nU6GAqACHQ59\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"P6A9nU6GAqACHQ59_P6A9nU6GAqACHQ59_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"P6A9nU6GAqACHQ59_P6A9nU6GAqACHQ59_content_annotations\">\n" +
            "\t\t\t\t<references href=\"facetas.profile.uml#P6A9nU6GAqACHQ59_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"facetas.profile.uml#P6A9nU6GAqACHQ59_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgywpa6\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgywpa7\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"jlI9nU6GAqACHRH6_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"jlI9nU6GAqACHRH6_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":age\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgywpac\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"blI9nU6GAqACHRH8_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"blI9nU6GAqACHRH8_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":c\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgywpag\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"blI9nU6GAqACHRH._multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"blI9nU6GAqACHRH._multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":d\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgywpak\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIA_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIA_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":e\" visibility=\"public\" xmi:id=\"kbgywpao\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIC_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIC_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":f\" visibility=\"public\" xmi:id=\"kbgywpas\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIE_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIE_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":g\" visibility=\"public\" xmi:id=\"kbgywpaw\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIG_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"3lI9nU6GAqACHRIG_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgywpa5\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgywpa2\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgywpa3\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgywpa4\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<ownedRule constrainedElement=\"jlI9nU6GAqACHRH6\" name=\"/[a-z]+/\" xmi:id=\"kbgywpa9\">\n" +
            "\t\t\t<specification body=\"/[a-z]+/\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgywpa9\" xmi:id=\"kbgywpa9_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgywpa7</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"blI9nU6GAqACHRH8\" name=\"MinInclusive 18\" xmi:id=\"kbgywpae\">\n" +
            "\t\t\t<specification body=\"MinInclusive 18\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgywpae\" xmi:id=\"kbgywpae_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgywpac</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"blI9nU6GAqACHRH.\" name=\"TotalDigits 3\" xmi:id=\"kbgywpai\">\n" +
            "\t\t\t<specification body=\"TotalDigits 3\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgywpai\" xmi:id=\"kbgywpai_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgywpag</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"3lI9nU6GAqACHRIA\" name=\"FractionDigits 4\" xmi:id=\"kbgywpam\">\n" +
            "\t\t\t<specification body=\"FractionDigits 4\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgywpam\" xmi:id=\"kbgywpam_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgywpak</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"3lI9nU6GAqACHRIC\" name=\"Length 6\" xmi:id=\"kbgywpaq\">\n" +
            "\t\t\t<specification body=\"Length 6\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgywpaq\" xmi:id=\"kbgywpaq_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgywpao</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"3lI9nU6GAqACHRIE\" name=\"MinLength 3\" xmi:id=\"kbgywpau\">\n" +
            "\t\t\t<specification body=\"MinLength 3\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgywpau\" xmi:id=\"kbgywpau_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgywpas</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"3lI9nU6GAqACHRIG\" name=\"MaxLength 15\" xmi:id=\"kbgywpay\">\n" +
            "\t\t\t<specification body=\"MaxLength 15\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgywpay\" xmi:id=\"kbgywpay_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgywpaw</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<uml:Diagram diagramType=\"ClassDiagram\" documentation=\"\" name=\"Class Diagram1\" toolName=\"Visual Paradigm\" xmi:id=\"AXo9nU6GAqACHRIg\">\n" +
            "\t\t\t\n" +
            "\t\t</uml:Diagram>\n" +
            "\t\t<packagedElement name=\"Int\" visibility=\"public\" xmi:id=\"Int_id\" xmi:type=\"uml:DataType\"/>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgywpa5\" xmi:id=\"kbgywpa5_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Rangos y exclusiones
     * @returns {string}
     */
    static getXMI10() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8op8059\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8op805e\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805g\" name=\":status\" visibility=\"public\" type=\"k8op805f\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805i\" name=\":phone\" visibility=\"public\" type=\"k8op805h\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805k\" name=\":quantity\" visibility=\"public\" type=\"k8op805j\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805m\" name=\":url\" visibility=\"public\" type=\"k8op805l\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805a\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805b\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8op805c\" name=\"prefix codes: &lt;http://example.codes/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8op805d\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805f\" name=\":status\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805n\" name=\"codes:~ - codes:unknown - codes:bad.~ \"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8op805o\" name=\"&quot;111&quot;\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805h\" name=\":phone\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805p\" name=\"&quot;+34&quot;~ - &quot;+3468031&quot; - &quot;+3467182&quot;~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805j\" name=\":quantity\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805q\" name=\"99~ - 9987 - 991~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805l\" name=\":url\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805r\" name=\"codes:Personal~\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI10VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 rangos.profile.uml#Pn59nU6GAqACHRIu_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"Pn59nU6GAqACHRIu\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"Pn59nU6GAqACHRIu_Pn59nU6GAqACHRIu_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"Pn59nU6GAqACHRIu_Pn59nU6GAqACHRIu_content_annotations\">\n" +
            "\t\t\t\t<references href=\"rangos.profile.uml#Pn59nU6GAqACHRIu_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"rangos.profile.uml#Pn59nU6GAqACHRIu_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Product\" visibility=\"public\" xmi:id=\"kbgz0fd4\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":status\" type=\"kbgz0fd5\" visibility=\"public\" xmi:id=\"kbgz0fd6\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"d9V9nU6GAqACHRWr_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"d9V9nU6GAqACHRWr_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":phone\" type=\"kbgz0fd7\" visibility=\"public\" xmi:id=\"kbgz0fd8\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"d9V9nU6GAqACHRWt_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"d9V9nU6GAqACHRWt_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":quantity\" type=\"kbgz0fd9\" visibility=\"public\" xmi:id=\"kbgz0fda\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"z9V9nU6GAqACHRWv_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"z9V9nU6GAqACHRWv_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":url\" type=\"kbgz0fdb\" visibility=\"public\" xmi:id=\"kbgz0fdc\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"z9V9nU6GAqACHRWx_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"z9V9nU6GAqACHRWx_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgz0fd3\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgz0fd0\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix codes: &lt;http://example.codes/&gt;\" visibility=\"public\" xmi:id=\"kbgz0fd1\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgz0fd2\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":status\" visibility=\"public\" xmi:id=\"kbgz0fd5\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"codes:~ - codes:unknown - codes:bad.~ \" visibility=\"public\" xmi:id=\"kbgz0fdd\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"&quot;111&quot;\" visibility=\"public\" xmi:id=\"kbgz0fde\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":phone\" visibility=\"public\" xmi:id=\"kbgz0fd7\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"&quot;+34&quot;~ - &quot;+3468031&quot; - &quot;+3467182&quot;~ \" visibility=\"public\" xmi:id=\"kbgz0fdf\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":quantity\" visibility=\"public\" xmi:id=\"kbgz0fd9\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"99~ - 9987 - 991~ \" visibility=\"public\" xmi:id=\"kbgz0fdg\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":url\" visibility=\"public\" xmi:id=\"kbgz0fdb\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"codes:Personal~\" visibility=\"public\" xmi:id=\"kbgz0fdh\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz0fd3\" xmi:id=\"kbgz0fd3_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz0fd5\" xmi:id=\"kbgz0fd5_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz0fd7\" xmi:id=\"kbgz0fd7_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz0fd9\" xmi:id=\"kbgz0fd9_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz0fdb\" xmi:id=\"kbgz0fdb_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Conjuntos genéricos con exclusiones
     * @returns {string}
     */
    static getXMI11() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8opvk4h\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8opvk4m\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8opvk4o\" name=\":status\" visibility=\"public\" type=\"k8opvk4n\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8opvk4q\" name=\":name\" visibility=\"public\" type=\"k8opvk4p\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8opvk4s\" name=\":price\" visibility=\"public\" type=\"k8opvk4r\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4i\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4j\" name=\"prefix codes: &lt;http://example.codes/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4k\" name=\"prefix : &lt;http://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4l\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4n\" name=\":status\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4t\" name=\". - codes:bad \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4p\" name=\":name\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4u\" name=\". - &quot;Trademark&quot; \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4r\" name=\":price\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4y\" name=\". - 66 \"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI11VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 wildcard.profile.uml#CWqDnU6GAqACHRXF_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"CWqDnU6GAqACHRXF\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"CWqDnU6GAqACHRXF_CWqDnU6GAqACHRXF_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"CWqDnU6GAqACHRXF_CWqDnU6GAqACHRXF_content_annotations\">\n" +
            "\t\t\t\t<references href=\"wildcard.profile.uml#CWqDnU6GAqACHRXF_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"wildcard.profile.uml#CWqDnU6GAqACHRXF_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Product\" visibility=\"public\" xmi:id=\"kbgz4bnw\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":status\" type=\"kbgz4bnx\" visibility=\"public\" xmi:id=\"kbgz4bny\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"Pp6DnU6GAqACHRlC_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"Pp6DnU6GAqACHRlC_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":name\" type=\"kbgz4bnz\" visibility=\"public\" xmi:id=\"kbgz4bo0\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"YZ6DnU6GAqACHRlE_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"YZ6DnU6GAqACHRlE_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":price\" type=\"kbgz4bo1\" visibility=\"public\" xmi:id=\"kbgz4bo2\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"YZ6DnU6GAqACHRlG_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"YZ6DnU6GAqACHRlG_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgz4bnv\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix codes: &lt;http://example.codes/&gt;\" visibility=\"public\" xmi:id=\"kbgz4bns\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;http://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgz4bnt\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgz4bnu\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":status\" visibility=\"public\" xmi:id=\"kbgz4bnx\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\". - codes:bad \" visibility=\"public\" xmi:id=\"kbgz4bo3\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgz4bnz\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\". - &quot;Trademark&quot; \" visibility=\"public\" xmi:id=\"kbgz4bo4\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":price\" visibility=\"public\" xmi:id=\"kbgz4bo1\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\". - 66 \" visibility=\"public\" xmi:id=\"kbgz4bo5\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz4bnv\" xmi:id=\"kbgz4bnv_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz4bnx\" xmi:id=\"kbgz4bnx_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz4bnz\" xmi:id=\"kbgz4bnz_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz4bo1\" xmi:id=\"kbgz4bo1_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Restricciones nodales como forma de máximo nivel
     * @returns {string}
     */
    static getXMI12() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbeb8bdg\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeb8bdl\" name=\":HomePage\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbeb8bdp\" name=\"nodeKind\" visibility=\"public\" type=\"kbeb8bdo\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeb8bdm\" name=\":CanVoteAge\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeb8bdm\" name=\"datatype\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Integer\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbeb8bds\" name=\"MinInclusive 18\" constrainedElement=\"kbeb8bdm\">\n" +
            "<specification body=\"MinInclusive 18\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeb8bdr\" xmi:id=\"kbeb8bdt\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeb8bdm</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeb8bdv\" name=\"TotalDigits 3\" constrainedElement=\"kbeb8bdm\">\n" +
            "<specification body=\"TotalDigits 3\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeb8bdu\" xmi:id=\"kbeb8bdw\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeb8bdm</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeb8bdn\" name=\":Special\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbeb8bdx\" name=\"datatype\" visibility=\"public\" type=\"kbeb8bdy\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbeb8bdk\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbeb8bdh\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbeb8bdi\" name=\"prefix : &lt;http://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbeb8bdj\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbeb8bdy\" name=\":custom\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbeb8bdo\" name=\"IRI\"/>\n" +
            "</uml:Model>";
    }

    /**
     * Etiquetas de lenguaje
     * @returns {string}
     */
    static getXMI13() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8pszqku\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszql2\" name=\":FrenchProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszql4\" name=\":frlabel\" visibility=\"public\" type=\"k8pszql3\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszql5\" name=\":EnglishProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszql7\" name=\":enlabel\" visibility=\"public\" type=\"k8pszql6\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszql8\" name=\":SpanishProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszqla\" name=\":splabel\" visibility=\"public\" type=\"k8pszql9\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszqlb\" name=\":AnyProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszqld\" name=\":label\" visibility=\"public\" type=\"k8pszqlc\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszqky\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqkz\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8pszql0\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8pszql1\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql3\" name=\":frlabel\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqle\" name=\"@fr \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql6\" name=\":enlabel\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlf\" name=\"@en~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql9\" name=\":splabel\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlg\" name=\"@es~ - @es-AR - @es-ES \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszqlc\" name=\":label\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlh\" name=\". - @kz \"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI13VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 lenguaje.profile.uml#2BzDnU6GAqACHRlY_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"2BzDnU6GAqACHRlY\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"2BzDnU6GAqACHRlY_2BzDnU6GAqACHRlY_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"2BzDnU6GAqACHRlY_2BzDnU6GAqACHRlY_content_annotations\">\n" +
            "\t\t\t\t<references href=\"lenguaje.profile.uml#2BzDnU6GAqACHRlY_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"lenguaje.profile.uml#2BzDnU6GAqACHRlY_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":FrenchProduct\" visibility=\"public\" xmi:id=\"kbgz73ct\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":frlabel\" type=\"kbgz73cz\" visibility=\"public\" xmi:id=\"kbgz73d0\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"aebDnU6GAqACHRzV_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"aebDnU6GAqACHRzV_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":EnglishProduct\" visibility=\"public\" xmi:id=\"kbgz73cu\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":enlabel\" type=\"kbgz73d1\" visibility=\"public\" xmi:id=\"kbgz73d2\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"aebDnU6GAqACHRzY_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"aebDnU6GAqACHRzY_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":SpanishProduct\" visibility=\"public\" xmi:id=\"kbgz73cv\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":splabel\" type=\"kbgz73d3\" visibility=\"public\" xmi:id=\"kbgz73d4\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"pebDnU6GAqACHRzb_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"pebDnU6GAqACHRzb_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":AnyProduct\" visibility=\"public\" xmi:id=\"kbgz73cw\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":label\" type=\"kbgz73d5\" visibility=\"public\" xmi:id=\"kbgz73d6\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"VebDnU6GAqACHRze_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"VebDnU6GAqACHRze_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgz73cs\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgz73cp\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgz73cq\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgz73cr\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":frlabel\" visibility=\"public\" xmi:id=\"kbgz73cz\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"@fr \" visibility=\"public\" xmi:id=\"kbgz73d7\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":enlabel\" visibility=\"public\" xmi:id=\"kbgz73d1\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"@en~ \" visibility=\"public\" xmi:id=\"kbgz73d8\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":splabel\" visibility=\"public\" xmi:id=\"kbgz73d3\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"@es~ - @es-AR - @es-ES \" visibility=\"public\" xmi:id=\"kbgz73d9\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":label\" visibility=\"public\" xmi:id=\"kbgz73d5\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\". - @kz \" visibility=\"public\" xmi:id=\"kbgz73da\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz73cs\" xmi:id=\"kbgz73cs_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz73cz\" xmi:id=\"kbgz73cz_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz73d1\" xmi:id=\"kbgz73d1_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz73d3\" xmi:id=\"kbgz73d3_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgz73d5\" xmi:id=\"kbgz73d5_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Cardinalidades aplicadas a conjuntos
     * @returns {string}
     */
    static getXMI14() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9qw4w7\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wc\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wd\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4we\" name=\"EachOf\" visibility=\"public\" type=\"kb9qw4wf\" association=\"kb9qw4wg\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4wh\" /></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wi\" name=\"EachOf\" visibility=\"public\" type=\"kb9qw4wj\" association=\"kb9qw4wk\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4wl\" />\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4wm\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wn\" name=\":owns\" visibility=\"public\" type=\"kb9qw4wo\" association=\"kb9qw4wp\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wg\" memberEnd=\"kb9qw4we kb9qw4wq\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4wq\" visibility=\"public\" type=\"kb9qw4wc\" association=\"kb9qw4wg\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wk\" memberEnd=\"kb9qw4wi kb9qw4wr\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4wr\" visibility=\"public\" type=\"kb9qw4wc\" association=\"kb9qw4wk\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wp\" memberEnd=\"kb9qw4wn kb9qw4ws\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4ws\" visibility=\"public\" type=\"kb9qw4wc\" association=\"kb9qw4wp\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wf\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wt\" name=\":givenName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wu\" name=\":familyName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wj\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wv\" name=\":has\" visibility=\"public\" type=\"kb9qw4ww\" association=\"kb9qw4wx\" >\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4wy\" value=\"2\"/>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4wz\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x0\" name=\":c\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wx\" memberEnd=\"kb9qw4wv kb9qw4x1\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4x1\" visibility=\"public\" type=\"kb9qw4wj\" association=\"kb9qw4wx\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wo\" name=\":Garage\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x2\" name=\"EachOf\" visibility=\"public\" type=\"kb9qw4x3\" association=\"kb9qw4x4\" aggregation=\"composite\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4x5\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4x4\" memberEnd=\"kb9qw4x2 kb9qw4x6\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4x6\" visibility=\"public\" type=\"kb9qw4wo\" association=\"kb9qw4x4\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4x3\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x7\" name=\"&lt;AE86&gt;\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x8\" name=\"EachOf\" visibility=\"public\" type=\"kb9qw4x9\" association=\"kb9qw4xa\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4xb\" /></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xc\" name=\"EachOf\" visibility=\"public\" type=\"kb9qw4xd\" association=\"kb9qw4xe\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4xf\" /></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4xa\" memberEnd=\"kb9qw4x8 kb9qw4xg\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4xg\" visibility=\"public\" type=\"kb9qw4x3\" association=\"kb9qw4xa\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4xe\" memberEnd=\"kb9qw4xc kb9qw4xh\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4xh\" visibility=\"public\" type=\"kb9qw4x3\" association=\"kb9qw4xe\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4x9\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xi\" name=\"&lt;Levin&gt;\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xj\" name=\"&lt;Cilinders&gt;\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4xd\" name=\"_Blank5\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xk\" name=\"&lt;Trueno&gt;\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xl\" name=\"&lt;Cilinders&gt;\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4ww\" name=\"&lt;Something&gt;\"/>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qw4wb\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qw4w8\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qw4w9\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qw4wa\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI14VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 card.profile.uml#S9pTnU6GAqACHRzy_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"S9pTnU6GAqACHRzy\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"S9pTnU6GAqACHRzy_S9pTnU6GAqACHRzy_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"S9pTnU6GAqACHRzy_S9pTnU6GAqACHRzy_content_annotations\">\n" +
            "\t\t\t\t<references href=\"card.profile.uml#S9pTnU6GAqACHRzy_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"card.profile.uml#S9pTnU6GAqACHRzy_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgzh3hu\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgzh3hx\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"YklTnU6GAqACHSBv_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"YklTnU6GAqACHSBv_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"EachOf\" type=\"kbgzh3hz\" visibility=\"public\" xmi:id=\"kbgzh3hy\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"0klTnU6GAqACHSB4_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"0klTnU6GAqACHSB4_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"EachOf\" type=\"kbgzh3i3\" visibility=\"public\" xmi:id=\"kbgzh3i2\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"0klTnU6GAqACHSCB_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"0klTnU6GAqACHSCB_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":owns\" type=\"kbgzh3hv\" visibility=\"public\" xmi:id=\"kbgzh3i7\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"0klTnU6GAqACHSCK_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"0klTnU6GAqACHSCK_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbgzh3hz\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":givenName\" visibility=\"public\" xmi:id=\"kbgzh3ic\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"qklTnU6GAqACHSCN_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"qklTnU6GAqACHSCN_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":familyName\" visibility=\"public\" xmi:id=\"kbgzh3id\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"qklTnU6GAqACHSCP_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"qklTnU6GAqACHSCP_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbgzh3i3\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":c\" visibility=\"public\" xmi:id=\"kbgzh3ii\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"qklTnU6GAqACHSCS_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"qklTnU6GAqACHSCS_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":has\" type=\"kbgzh3hw\" visibility=\"public\" xmi:id=\"kbgzh3ie\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"2\" xmi:id=\".klTnU6GAqACHSCb_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\".klTnU6GAqACHSCb_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Garage\" visibility=\"public\" xmi:id=\"kbgzh3hv\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"EachOf\" type=\"kbgzh3il\" visibility=\"public\" xmi:id=\"kbgzh3ik\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\".klTnU6GAqACHSCl_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\".klTnU6GAqACHSCl_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank3\" visibility=\"public\" xmi:id=\"kbgzh3il\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\"&lt;AE86&gt;\" visibility=\"public\" xmi:id=\"kbgzh3ip\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"lklTnU6GAqACHSCo_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"lklTnU6GAqACHSCo_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"EachOf\" type=\"kbgzh3ir\" visibility=\"public\" xmi:id=\"kbgzh3iq\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"lklTnU6GAqACHSCx_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"lklTnU6GAqACHSCx_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"EachOf\" type=\"kbgzh3iv\" visibility=\"public\" xmi:id=\"kbgzh3iu\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"zklTnU6GAqACHSC6_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"zklTnU6GAqACHSC6_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank4\" visibility=\"public\" xmi:id=\"kbgzh3ir\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\"&lt;Levin&gt;\" visibility=\"public\" xmi:id=\"kbgzh3j0\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"zklTnU6GAqACHSC9_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"zklTnU6GAqACHSC9_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\"&lt;Cilinders&gt;\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgzh3j1\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"zklTnU6GAqACHSC__multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"zklTnU6GAqACHSC__multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank5\" visibility=\"public\" xmi:id=\"kbgzh3iv\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\"&lt;Trueno&gt;\" visibility=\"public\" xmi:id=\"kbgzh3j2\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"HklTnU6GAqACHSDC_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"HklTnU6GAqACHSDC_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\"&lt;Cilinders&gt;\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgzh3j3\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"HklTnU6GAqACHSDE_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"HklTnU6GAqACHSDE_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"&lt;Something&gt;\" visibility=\"public\" xmi:id=\"kbgzh3hw\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgzh3ht\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzh3hq\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgzh3hr\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzh3hs\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzh3i9 kbgzh3hy\" name=\"\" xmi:id=\"kbgzh3i0\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzh3hu\" visibility=\"public\" xmi:id=\"kbgzh3i9\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"0klTnU6GAqACHSB2_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"0klTnU6GAqACHSB2_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzh3ia kbgzh3i2\" name=\"\" xmi:id=\"kbgzh3i4\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzh3hu\" visibility=\"public\" xmi:id=\"kbgzh3ia\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"0klTnU6GAqACHSB__multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"0klTnU6GAqACHSB__multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzh3ib kbgzh3i7\" name=\"\" xmi:id=\"kbgzh3i8\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzh3hu\" visibility=\"public\" xmi:id=\"kbgzh3ib\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"0klTnU6GAqACHSCI_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"0klTnU6GAqACHSCI_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzh3ij kbgzh3ie\" name=\"\" xmi:id=\"kbgzh3if\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzh3i3\" visibility=\"public\" xmi:id=\"kbgzh3ij\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\".klTnU6GAqACHSCZ_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\".klTnU6GAqACHSCZ_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzh3io kbgzh3ik\" name=\"\" xmi:id=\"kbgzh3im\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzh3hv\" visibility=\"public\" xmi:id=\"kbgzh3io\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\".klTnU6GAqACHSCj_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\".klTnU6GAqACHSCj_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzh3iy kbgzh3iq\" name=\"\" xmi:id=\"kbgzh3is\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzh3il\" visibility=\"public\" xmi:id=\"kbgzh3iy\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"lklTnU6GAqACHSCv_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"lklTnU6GAqACHSCv_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzh3iz kbgzh3iu\" name=\"\" xmi:id=\"kbgzh3iw\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzh3il\" visibility=\"public\" xmi:id=\"kbgzh3iz\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"zklTnU6GAqACHSC4_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"zklTnU6GAqACHSC4_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement name=\"Int\" visibility=\"public\" xmi:id=\"Int_id\" xmi:type=\"uml:DataType\"/>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzh3ht\" xmi:id=\"kbgzh3ht_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * OneOf
     * @returns {string}
     */
    static getXMI15() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9qy9mn\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9ms\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9mt\" name=\"OneOf\" visibility=\"public\" type=\"kb9qy9mu\" association=\"kb9qy9mv\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qy9mv\" memberEnd=\"kb9qy9mt kb9qy9mw\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qy9mw\" visibility=\"public\" type=\"kb9qy9ms\" association=\"kb9qy9mv\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9mu\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9mx\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9my\" name=\"EachOf\" visibility=\"public\" type=\"kb9qy9mz\" association=\"kb9qy9n0\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qy9n0\" memberEnd=\"kb9qy9my kb9qy9n1\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qy9n1\" visibility=\"public\" type=\"kb9qy9mu\" association=\"kb9qy9n0\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9mz\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n3\" name=\":givenName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qy9n2\" value=\"*\"/>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n4\" name=\":familyName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9n5\" name=\":Car\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n6\" name=\":model\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n7\" name=\"OneOf\" visibility=\"public\" type=\"kb9qy9n8\" association=\"kb9qy9n9\" aggregation=\"composite\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qy9na\" value=\"2\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qy9n9\" memberEnd=\"kb9qy9n7 kb9qy9nb\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qy9nb\" visibility=\"public\" type=\"kb9qy9n5\" association=\"kb9qy9n9\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9n8\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9nc\" name=\":turbo\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9nd\" name=\":misfiring\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9ne\" name=\":atm\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qy9mr\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qy9mo\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qy9mp\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qy9mq\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI15VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 oneof.profile.uml#6fwznU6GAqACHSDT_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"6fwznU6GAqACHSDT\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"6fwznU6GAqACHSDT_6fwznU6GAqACHSDT_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"6fwznU6GAqACHSDT_6fwznU6GAqACHSDT_content_annotations\">\n" +
            "\t\t\t\t<references href=\"oneof.profile.uml#6fwznU6GAqACHSDT_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"oneof.profile.uml#6fwznU6GAqACHSDT_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgzjtxf\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"OneOf\" type=\"kbgzjtxi\" visibility=\"public\" xmi:id=\"kbgzjtxh\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eVYznU6GAqACHSRX_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eVYznU6GAqACHSRX_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbgzjtxi\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgzjtxl\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"FVYznU6GAqACHSRa_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"FVYznU6GAqACHSRa_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"EachOf\" type=\"kbgzjtxn\" visibility=\"public\" xmi:id=\"kbgzjtxm\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRj_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRj_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbgzjtxn\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":givenName\" visibility=\"public\" xmi:id=\"kbgzjtxr\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRm_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"tVYznU6GAqACHSRm_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":familyName\" visibility=\"public\" xmi:id=\"kbgzjtxs\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRo_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRo_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Car\" visibility=\"public\" xmi:id=\"kbgzjtxg\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":model\" visibility=\"public\" xmi:id=\"kbgzjtxt\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRr_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRr_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"OneOf\" type=\"kbgzjtxv\" visibility=\"public\" xmi:id=\"kbgzjtxu\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"7VYznU6GAqACHSR0_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"2\" xmi:id=\"7VYznU6GAqACHSR0_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank3\" visibility=\"public\" xmi:id=\"kbgzjtxv\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":turbo\" visibility=\"public\" xmi:id=\"kbgzjtxz\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"PVYznU6GAqACHSR3_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"PVYznU6GAqACHSR3_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":misfiring\" visibility=\"public\" xmi:id=\"kbgzjty0\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"PVYznU6GAqACHSR5_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"PVYznU6GAqACHSR5_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":atm\" visibility=\"public\" xmi:id=\"kbgzjty1\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"PVYznU6GAqACHSR7_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"PVYznU6GAqACHSR7_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgzjtxe\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzjtxb\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgzjtxc\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzjtxd\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzjtxk kbgzjtxh\" name=\"\" xmi:id=\"kbgzjtxj\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzjtxf\" visibility=\"public\" xmi:id=\"kbgzjtxk\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eVYznU6GAqACHSRV_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eVYznU6GAqACHSRV_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzjtxp kbgzjtxm\" name=\"\" xmi:id=\"kbgzjtxo\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzjtxi\" visibility=\"public\" xmi:id=\"kbgzjtxp\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRh_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"tVYznU6GAqACHSRh_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzjtxy kbgzjtxu\" name=\"\" xmi:id=\"kbgzjtxw\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzjtxg\" visibility=\"public\" xmi:id=\"kbgzjtxy\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"7VYznU6GAqACHSRy_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"7VYznU6GAqACHSRy_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzjtxe\" xmi:id=\"kbgzjtxe_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Formas anidadas
     * @returns {string}
     */
    static getXMI16() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbam4jq9\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqe\" name=\":Car\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqk\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jql\" name=\":belongs\" visibility=\"public\" type=\"kbam4jqj\" association=\"kbam4jqm\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jqm\" memberEnd=\"kbam4jql kbam4jqn\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jqn\" visibility=\"public\" type=\"kbam4jqe\" association=\"kbam4jqm\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqf\" name=\":Garage\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqg\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqo\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqp\" name=\":worksFor\" visibility=\"public\" type=\"kbam4jqq\" association=\"kbam4jqr\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jqr\" memberEnd=\"kbam4jqp kbam4jqs\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jqs\" visibility=\"public\" type=\"kbam4jqg\" association=\"kbam4jqr\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqq\" name=\"_:2\">\n" +
            "\t<generalization xmi:id=\"kbam4jqt\" general=\"kbam4jqh\" name=\"a\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqh\" name=\":Company\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqi\" name=\":GreatGrandson\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqu\" name=\":parent\" visibility=\"public\" type=\"kbam4jqv\" association=\"kbam4jqw\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jqw\" memberEnd=\"kbam4jqu kbam4jqx\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jqx\" visibility=\"public\" type=\"kbam4jqi\" association=\"kbam4jqw\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqv\" name=\"_:3\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqy\" name=\":parent\" visibility=\"public\" type=\"kbam4jqz\" association=\"kbam4jr0\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jr0\" memberEnd=\"kbam4jqy kbam4jr1\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jr1\" visibility=\"public\" type=\"kbam4jqv\" association=\"kbam4jr0\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqz\" name=\"_:4\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbam4jr3\" name=\":parent\" visibility=\"public\" type=\"kbam4jr4\" isUnique=\"true\">\n" +
            "\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kbam4jr2\" value=\"*\"/>\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqj\" name=\"_:1\">\n" +
            "\t<generalization xmi:id=\"kbam4jr5\" general=\"kbam4jqf\" name=\"a\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbam4jqd\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbam4jqa\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbam4jqb\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbam4jqc\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbam4jr4\" name=\"Any\"/>\n" +
            "</uml:Model>";
    }

    static getXMI16VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 anid.profile.uml#cCxznU6GAqACHSSJ_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"cCxznU6GAqACHSSJ\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"cCxznU6GAqACHSSJ_cCxznU6GAqACHSSJ_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"cCxznU6GAqACHSSJ_cCxznU6GAqACHSSJ_content_annotations\">\n" +
            "\t\t\t\t<references href=\"anid.profile.uml#cCxznU6GAqACHSSJ_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"anid.profile.uml#cCxznU6GAqACHSSJ_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Car\" visibility=\"public\" xmi:id=\"kbgzmkt9\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgzmktf\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XfpznU6GAqACHSgG_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XfpznU6GAqACHSgG_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":belongs\" type=\"kbgzmkte\" visibility=\"public\" xmi:id=\"kbgzmktg\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"k_pznU6GAqACHSgP_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"k_pznU6GAqACHSgP_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Garage\" visibility=\"public\" xmi:id=\"kbgzmkta\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgzmktb\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgzmktj\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"c_pznU6GAqACHSgT_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"c_pznU6GAqACHSgT_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":worksFor\" type=\"kbgzmktl\" visibility=\"public\" xmi:id=\"kbgzmktk\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"x_pznU6GAqACHSgc_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"x_pznU6GAqACHSgc_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_:2\" visibility=\"public\" xmi:id=\"kbgzmktl\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbgzmktc\" name=\"a\" xmi:id=\"kbgzmkto\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Company\" visibility=\"public\" xmi:id=\"kbgzmktc\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":GreatGrandson\" visibility=\"public\" xmi:id=\"kbgzmktd\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":parent\" type=\"kbgzmktq\" visibility=\"public\" xmi:id=\"kbgzmktp\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgp_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgp_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_:3\" visibility=\"public\" xmi:id=\"kbgzmktq\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":parent\" type=\"kbgzmktu\" visibility=\"public\" xmi:id=\"kbgzmktt\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgz_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgz_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_:4\" visibility=\"public\" xmi:id=\"kbgzmktu\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":parent\" type=\"kbgzmktz\" visibility=\"public\" xmi:id=\"kbgzmkty\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"j_pznU6GAqACHSg2_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"j_pznU6GAqACHSg2_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_:1\" visibility=\"public\" xmi:id=\"kbgzmkte\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbgzmkta\" name=\"a\" xmi:id=\"kbgzmku0\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgzmkt8\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzmkt5\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgzmkt6\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzmkt7\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Any\" visibility=\"public\" xmi:id=\"kbgzmktz\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzmkti kbgzmktg\" name=\"\" xmi:id=\"kbgzmkth\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzmkt9\" visibility=\"public\" xmi:id=\"kbgzmkti\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"4_pznU6GAqACHSgN_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"4_pznU6GAqACHSgN_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzmktn kbgzmktk\" name=\"\" xmi:id=\"kbgzmktm\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzmktb\" visibility=\"public\" xmi:id=\"kbgzmktn\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"h_pznU6GAqACHSga_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"h_pznU6GAqACHSga_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzmkts kbgzmktp\" name=\"\" xmi:id=\"kbgzmktr\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzmktd\" visibility=\"public\" xmi:id=\"kbgzmkts\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgn_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgn_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzmktw kbgzmktt\" name=\"\" xmi:id=\"kbgzmktv\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzmktq\" visibility=\"public\" xmi:id=\"kbgzmktw\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgx_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"j_pznU6GAqACHSgx_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzmkt8\" xmi:id=\"kbgzmkt8_enumeration\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgzmktz\" xmi:id=\"kbgzmktz_primitive\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Formas cerradas
     * @returns {string}
     */
    static getXMI17() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kjsghtir" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kjsghtiw" name=":User">
	<ownedAttribute xmi:id="kjsghtj0" name="AND" visibility="public" type="kjsghtj1" association="kjsghtj2" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsghtj4" name="nodeKind" visibility="public" type="kjsghtj3" isUnique="true">
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="kjsghtiy" name="CLOSED" constrainedElement="kjsghtiw">
<specification body="CLOSED" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kjsghtiy" xmi:id="kjsghtiz" xmi:type="uml:Comment">
<body>kjsghtiw</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Association" xmi:id="kjsghtj2" memberEnd="kjsghtj0 kjsghtj5">
	<ownedEnd xmi:id="kjsghtj5" visibility="public" type="kjsghtiw" association="kjsghtj2"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsghtj1" name="_Blank1">
	<ownedAttribute xmi:id="kjsghtj6" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsghtja" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kjsghtj9" />
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kjsghtjc" name=":gender" visibility="public" type="kjsghtjb" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsghtjd" name=":knows" visibility="public" type="kjsghtiw" association="kjsghtje" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsghtje" memberEnd="kjsghtjd kjsghtjf">
	<ownedEnd xmi:id="kjsghtjf" visibility="public" type="kjsghtj1" association="kjsghtje"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsghtix" name=":Company">
	<ownedAttribute xmi:id="kjsghtjg" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="kjsghtj7" name="MaxLength 3" constrainedElement="kjsghtj6">
<specification body="MaxLength 3" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kjsghtj7" xmi:id="kjsghtj8" xmi:type="uml:Comment">
<body>kjsghtj6</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="kjsghtjh" name="CLOSED" constrainedElement="kjsghtix">
<specification body="CLOSED" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kjsghtjh" xmi:id="kjsghtji" xmi:type="uml:Comment">
<body>kjsghtix</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsghtiv" name="Prefixes">
	<ownedLiteral xmi:id="kjsghtis" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="kjsghtit" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kjsghtiu" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsghtjb" name=":gender">
	<ownedLiteral xmi:id="kjsghtjj" name=":Male"/>
	<ownedLiteral xmi:id="kjsghtjk" name=":Female"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsghtj3" name="IRI"/>
</uml:Model>`;
    }

    static getXMI17VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 closed.profile.uml#WlULnU6GAqACHShJ_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"WlULnU6GAqACHShJ\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"WlULnU6GAqACHShJ_WlULnU6GAqACHShJ_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"WlULnU6GAqACHShJ_WlULnU6GAqACHShJ_content_annotations\">\n" +
            "\t\t\t\t<references href=\"closed.profile.uml#WlULnU6GAqACHShJ_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"closed.profile.uml#WlULnU6GAqACHShJ_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgzpuoh\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"nodeKind\" type=\"kbgzpuop\" visibility=\"public\" xmi:id=\"kbgzpuoq\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"iGMLnU6GAqACHSvG_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"iGMLnU6GAqACHSvG_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbgzpuon\" visibility=\"public\" xmi:id=\"kbgzpuom\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"WGMLnU6GAqACHSvP_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"WGMLnU6GAqACHSvP_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbgzpuon\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbgzpuot\" visibility=\"public\" xmi:id=\"kbgzpuos\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"pGMLnU6GAqACHSvZ_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"pGMLnU6GAqACHSvZ_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbgzpuot\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgzpuow\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvc_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvc_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":age\" type=\"Int_id\" visibility=\"public\" xmi:id=\"kbgzpup1\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"0\" xmi:id=\"VGMLnU6GAqACHSve_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSve_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":gender\" type=\"kbgzpup2\" visibility=\"public\" xmi:id=\"kbgzpup3\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvg_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvg_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":knows\" type=\"kbgzpuoh\" visibility=\"public\" xmi:id=\"kbgzpup4\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvp_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvp_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Company\" visibility=\"public\" xmi:id=\"kbgzpuoi\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbgzpup7\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvs_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvs_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgzpuog\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzpuod\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgzpuoe\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzpuof\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":gender\" visibility=\"public\" xmi:id=\"kbgzpup2\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\":Male\" visibility=\"public\" xmi:id=\"kbgzpupb\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\":Female\" visibility=\"public\" xmi:id=\"kbgzpupc\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"IRI\" visibility=\"public\" xmi:id=\"kbgzpuop\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<ownedRule constrainedElement=\"oGMLnU6GAqACHSvF\" name=\"CLOSED\" xmi:id=\"kbgzpuok\">\n" +
            "\t\t\t<specification body=\"CLOSED\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgzpuok\" xmi:id=\"kbgzpuok_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgzpuoh</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"VGMLnU6GAqACHSvc\" name=\"MaxLength 3\" xmi:id=\"kbgzpuoy\">\n" +
            "\t\t\t<specification body=\"MaxLength 3\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgzpuoy\" xmi:id=\"kbgzpuoy_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgzpuow</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"VGMLnU6GAqACHSvr\" name=\"CLOSED\" xmi:id=\"kbgzpup9\">\n" +
            "\t\t\t<specification body=\"CLOSED\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbgzpup9\" xmi:id=\"kbgzpup9_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbgzpuoi</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzpuor kbgzpuom\" name=\"\" xmi:id=\"kbgzpuoo\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzpuoh\" visibility=\"public\" xmi:id=\"kbgzpuor\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"aGMLnU6GAqACHSvN_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"aGMLnU6GAqACHSvN_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzpuov kbgzpuos\" name=\"\" xmi:id=\"kbgzpuou\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzpuon\" visibility=\"public\" xmi:id=\"kbgzpuov\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"pGMLnU6GAqACHSvX_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"pGMLnU6GAqACHSvX_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzpup6 kbgzpup4\" name=\"\" xmi:id=\"kbgzpup5\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzpuot\" visibility=\"public\" xmi:id=\"kbgzpup6\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvn_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"VGMLnU6GAqACHSvn_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement name=\"Int\" visibility=\"public\" xmi:id=\"Int_id\" xmi:type=\"uml:DataType\"/>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzpuog\" xmi:id=\"kbgzpuog_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzpup2\" xmi:id=\"kbgzpup2_enumeration\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgzpuop\" xmi:id=\"kbgzpuop_primitive\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Propiedades repetidas
     * @returns {string}
     */
    static getXMI18() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamo85s\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamo85x\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamo85y\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamo85z\" name=\":parent\" visibility=\"public\" type=\"kbamo860\" association=\"kbamo861\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamo862\" name=\":parent\" visibility=\"public\" type=\"kbamo863\" association=\"kbamo864\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamo861\" memberEnd=\"kbamo85z kbamo865\">\n" +
            "\t<ownedEnd xmi:id=\"kbamo865\" visibility=\"public\" type=\"kbamo85x\" association=\"kbamo861\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamo864\" memberEnd=\"kbamo862 kbamo866\">\n" +
            "\t<ownedEnd xmi:id=\"kbamo866\" visibility=\"public\" type=\"kbamo85x\" association=\"kbamo864\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamo860\" name=\"_:1\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamo868\" name=\":gender\" visibility=\"public\" type=\"kbamo867\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamo863\" name=\"_:2\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamo86a\" name=\":gender\" visibility=\"public\" type=\"kbamo869\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo85w\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85t\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85u\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85v\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo867\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamo86b\" name=\":Male\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo869\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamo86c\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    /**
     * Restricción triple inversa
     * @returns {string}
     */
    static getXMI19() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamltd5\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamltda\" name=\":Person\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamltdb\" name=\":User\">\n" +
            "\t<generalization xmi:id=\"kbamltdd\" general=\"kbamltda\" name=\"^a\"/>\n" +
            "\t<ownedAttribute xmi:id=\"kbamltde\" name=\"^:name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamltdg\" name=\"^:gender\" visibility=\"public\" type=\"kbamltdf\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamltdc\" name=\":Company\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamltdh\" name=\"^:worksFor\" visibility=\"public\" type=\"kbamltdb\" association=\"kbamltdi\" >\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kbamltdj\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamltdi\" memberEnd=\"kbamltdh kbamltdk\">\n" +
            "\t<ownedEnd xmi:id=\"kbamltdk\" visibility=\"public\" type=\"kbamltdc\" association=\"kbamltdi\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamltd9\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamltd6\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamltd7\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamltd8\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamltdf\" name=\"^:gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamltdl\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamltdm\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI19VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 rti.profile.uml#lyZLnU6GAqACHSwF_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"lyZLnU6GAqACHSwF\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"lyZLnU6GAqACHSwF_lyZLnU6GAqACHSwF_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"lyZLnU6GAqACHSwF_lyZLnU6GAqACHSwF_content_annotations\">\n" +
            "\t\t\t\t<references href=\"rti.profile.uml#lyZLnU6GAqACHSwF_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"rti.profile.uml#lyZLnU6GAqACHSwF_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Person\" visibility=\"public\" xmi:id=\"kbgzs92g\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgzs92h\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\"^:name\" visibility=\"public\" xmi:id=\"kbgzs92k\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"RolLnU6GAqACHS.D_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"RolLnU6GAqACHS.D_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"^:gender\" type=\"kbgzs92l\" visibility=\"public\" xmi:id=\"kbgzs92m\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"NolLnU6GAqACHS.F_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"NolLnU6GAqACHS.F_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<generalization general=\"kbgzs92g\" name=\"^a\" xmi:id=\"kbgzs92j\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Company\" visibility=\"public\" xmi:id=\"kbgzs92i\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"^:worksFor\" type=\"kbgzs92h\" visibility=\"public\" xmi:id=\"kbgzs92n\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"jolLnU6GAqACHS.Q_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"jolLnU6GAqACHS.Q_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgzs92f\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzs92c\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgzs92d\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzs92e\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"^:gender\" visibility=\"public\" xmi:id=\"kbgzs92l\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\":Male\" visibility=\"public\" xmi:id=\"kbgzs92r\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\":Female\" visibility=\"public\" xmi:id=\"kbgzs92s\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzs92q kbgzs92n\" name=\"\" xmi:id=\"kbgzs92o\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzs92i\" visibility=\"public\" xmi:id=\"kbgzs92q\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"jolLnU6GAqACHS.O_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"jolLnU6GAqACHS.O_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzs92f\" xmi:id=\"kbgzs92f_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzs92l\" xmi:id=\"kbgzs92l_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * EXTRA
     * @returns {string}
     */
    static getXMI20() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbaml03i\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbaml03n\" name=\":FollowSpaniards\">\n" +
            "\t<ownedAttribute xmi:id=\"kbaml03o\" name=\":follows\" visibility=\"public\" type=\"kbaml03p\" association=\"kbaml03q\" aggregation=\"composite\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kbaml03r\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbaml03n\" name=\"Extra\" visibility=\"public\" type=\"kbaml03s\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbaml03q\" memberEnd=\"kbaml03o kbaml03u\">\n" +
            "\t<ownedEnd xmi:id=\"kbaml03u\" visibility=\"public\" type=\"kbaml03n\" association=\"kbaml03q\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbaml03p\" name=\"_:1\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbaml03w\" name=\":nationality\" visibility=\"public\" type=\"kbaml03v\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03m\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03j\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03k\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03l\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03s\" name=\"Extra_:FollowSpaniards\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03x\" name=\":follows\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03v\" name=\":nationality\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03y\" name=\":Spain\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI20VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 extra.profile.uml#5kornU6GAqACHS.i_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"5kornU6GAqACHS.i\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"5kornU6GAqACHS.i_5kornU6GAqACHS.i_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"5kornU6GAqACHS.i_5kornU6GAqACHS.i_content_annotations\">\n" +
            "\t\t\t\t<references href=\"extra.profile.uml#5kornU6GAqACHS.i_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"extra.profile.uml#5kornU6GAqACHS.i_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":FollowSpaniards\" visibility=\"public\" xmi:id=\"kbgzv6el\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"Extra\" type=\"kbgzv6eq\" visibility=\"public\" xmi:id=\"kbgzv6er\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"kvErnU6GAqACHTMf_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"kvErnU6GAqACHTMf_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":follows\" type=\"kbgzv6en\" visibility=\"public\" xmi:id=\"kbgzv6em\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"yvErnU6GAqACHTMo_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"*\" xmi:id=\"yvErnU6GAqACHTMo_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_:1\" visibility=\"public\" xmi:id=\"kbgzv6en\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":nationality\" type=\"kbgzv6et\" visibility=\"public\" xmi:id=\"kbgzv6eu\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"yvErnU6GAqACHTMr_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"yvErnU6GAqACHTMr_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgzv6ek\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzv6eh\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgzv6ei\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzv6ej\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Extra_:FollowSpaniards\" visibility=\"public\" xmi:id=\"kbgzv6eq\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\":follows\" visibility=\"public\" xmi:id=\"kbgzv6ev\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":nationality\" visibility=\"public\" xmi:id=\"kbgzv6et\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\":Spain\" visibility=\"public\" xmi:id=\"kbgzv6ew\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzv6es kbgzv6em\" name=\"\" xmi:id=\"kbgzv6eo\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzv6el\" visibility=\"public\" xmi:id=\"kbgzv6es\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"yvErnU6GAqACHTMm_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"yvErnU6GAqACHTMm_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzv6ek\" xmi:id=\"kbgzv6ek_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzv6eq\" xmi:id=\"kbgzv6eq_enumeration\"/>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzv6et\" xmi:id=\"kbgzv6et_enumeration\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Expresiones etiquetadas
     * @returns {string}
     */
    static getXMI21() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamkh16\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1b\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1d\" name=\"$:name\" visibility=\"public\" type=\"kbamkh1e\" association=\"kbamkh1f\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1h\" name=\":email\" visibility=\"public\" type=\"kbamkh1g\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1f\" memberEnd=\"kbamkh1d kbamkh1i\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1i\" visibility=\"public\" type=\"kbamkh1b\" association=\"kbamkh1f\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1e\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1j\" name=\"OneOf\" visibility=\"public\" type=\"kbamkh1k\" association=\"kbamkh1l\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1l\" memberEnd=\"kbamkh1j kbamkh1m\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1m\" visibility=\"public\" type=\"kbamkh1e\" association=\"kbamkh1l\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1k\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1n\" name=\":name\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1p\" name=\"EachOf\" visibility=\"public\" type=\"kbamkh1q\" association=\"kbamkh1r\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1r\" memberEnd=\"kbamkh1p kbamkh1s\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1s\" visibility=\"public\" type=\"kbamkh1k\" association=\"kbamkh1r\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1q\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1t\" name=\":givenName\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1u\" name=\":familyName\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1c\" name=\":Employee\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1v\" name=\"&#38;:name\" visibility=\"public\" type=\"kbamkh1e\" association=\"kbamkh1w\" ></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1x\" name=\":employeeId\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1w\" memberEnd=\"kbamkh1v kbamkh1y\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1y\" visibility=\"public\" type=\"kbamkh1c\" association=\"kbamkh1w\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamkh1a\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamkh17\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamkh18\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamkh19\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbamkh1o\" name=\"Any\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbamkh1g\" name=\"IRI\"/>\n" +
            "</uml:Model>";
    }

    static getXMI21VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 etiquetas.profile.uml#eCXrnU6GAqACHTM9_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"eCXrnU6GAqACHTM9\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"eCXrnU6GAqACHTM9_eCXrnU6GAqACHTM9_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"eCXrnU6GAqACHTM9_eCXrnU6GAqACHTM9_content_annotations\">\n" +
            "\t\t\t\t<references href=\"etiquetas.profile.uml#eCXrnU6GAqACHTM9_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"etiquetas.profile.uml#eCXrnU6GAqACHTM9_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbgzztrv\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":email\" type=\"kbgzzts0\" visibility=\"public\" xmi:id=\"kbgzzts1\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"OQvrnU6GAqACHTa6_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"OQvrnU6GAqACHTa6_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"$:name\" type=\"kbgzztry\" visibility=\"public\" xmi:id=\"kbgzztrx\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"1QvrnU6GAqACHTbD_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"1QvrnU6GAqACHTbD_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbgzztry\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"OneOf\" type=\"kbgzzts4\" visibility=\"public\" xmi:id=\"kbgzzts3\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbN_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbN_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbgzzts4\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":name\" type=\"kbgzzts8\" visibility=\"public\" xmi:id=\"kbgzzts7\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbQ_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbQ_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"EachOf\" type=\"kbgzztsa\" visibility=\"public\" xmi:id=\"kbgzzts9\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbZ_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbZ_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank3\" visibility=\"public\" xmi:id=\"kbgzztsa\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":givenName\" type=\"kbgzzts8\" visibility=\"public\" xmi:id=\"kbgzztsd\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbc_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbc_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":familyName\" type=\"kbgzzts8\" visibility=\"public\" xmi:id=\"kbgzztse\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbe_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbe_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Employee\" visibility=\"public\" xmi:id=\"kbgzztrw\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":employeeId\" type=\"kbgzzts8\" visibility=\"public\" xmi:id=\"kbgzztsh\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbh_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbh_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"&amp;:name\" type=\"kbgzztry\" visibility=\"public\" xmi:id=\"kbgzztsf\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbq_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbq_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbgzztru\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzztrr\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbgzztrs\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbgzztrt\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Any\" visibility=\"public\" xmi:id=\"kbgzzts8\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"IRI\" visibility=\"public\" xmi:id=\"kbgzzts0\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzzts2 kbgzztrx\" name=\"\" xmi:id=\"kbgzztrz\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzztrv\" visibility=\"public\" xmi:id=\"kbgzzts2\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"1QvrnU6GAqACHTbB_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"1QvrnU6GAqACHTbB_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzzts6 kbgzzts3\" name=\"\" xmi:id=\"kbgzzts5\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzztry\" visibility=\"public\" xmi:id=\"kbgzzts6\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbL_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbL_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzztsc kbgzzts9\" name=\"\" xmi:id=\"kbgzztsb\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzzts4\" visibility=\"public\" xmi:id=\"kbgzztsc\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbX_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"DQvrnU6GAqACHTbX_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbgzztsi kbgzztsf\" name=\"\" xmi:id=\"kbgzztsg\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbgzztrw\" visibility=\"public\" xmi:id=\"kbgzztsi\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbo_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XQvrnU6GAqACHTbo_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbgzztru\" xmi:id=\"kbgzztru_enumeration\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgzzts8\" xmi:id=\"kbgzzts8_primitive\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbgzzts0\" xmi:id=\"kbgzzts0_primitive\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Conjunciones
     * @returns {string}
     */
    static getXMI22() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbea7kya\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kyf\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kyj\" name=\"AND\" visibility=\"public\" type=\"kbea7kyk\" association=\"kbea7kyl\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbea7kyl\" memberEnd=\"kbea7kyj kbea7kym\">\n" +
            "\t<ownedEnd xmi:id=\"kbea7kym\" visibility=\"public\" type=\"kbea7kyf\" association=\"kbea7kyl\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kyk\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kyn\" name=\"Shape\" visibility=\"public\" type=\"kbea7kyo\" association=\"kbea7kyp\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kyq\" name=\"Shape\" visibility=\"public\" type=\"kbea7kyr\" association=\"kbea7kys\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbea7kyp\" memberEnd=\"kbea7kyn kbea7kyt\">\n" +
            "\t<ownedEnd xmi:id=\"kbea7kyt\" visibility=\"public\" type=\"kbea7kyk\" association=\"kbea7kyp\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbea7kys\" memberEnd=\"kbea7kyq kbea7kyu\">\n" +
            "\t<ownedEnd xmi:id=\"kbea7kyu\" visibility=\"public\" type=\"kbea7kyk\" association=\"kbea7kys\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kyo\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kyv\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbea7kyx\" name=\":owns\" visibility=\"public\" type=\"kbea7kyw\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kyr\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kyy\" name=\":owns\" visibility=\"public\" type=\"kbea7kyi\" association=\"kbea7kyz\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbea7kyz\" memberEnd=\"kbea7kyy kbea7kz0\">\n" +
            "\t<ownedEnd xmi:id=\"kbea7kz0\" visibility=\"public\" type=\"kbea7kyr\" association=\"kbea7kyz\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kyg\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kz1\" name=\"AND\" visibility=\"public\" type=\"kbea7kz2\" association=\"kbea7kz3\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kbea7kz4\" general=\"kbea7kyf\" name=\"AND\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbea7kz3\" memberEnd=\"kbea7kz1 kbea7kz5\">\n" +
            "\t<ownedEnd xmi:id=\"kbea7kz5\" visibility=\"public\" type=\"kbea7kyg\" association=\"kbea7kz3\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kz2\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kz6\" name=\"Shape\" visibility=\"public\" type=\"kbea7kz7\" association=\"kbea7kz8\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kz9\" name=\"Shape\" visibility=\"public\" type=\"kbea7kza\" association=\"kbea7kzb\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbea7kz8\" memberEnd=\"kbea7kz6 kbea7kzc\">\n" +
            "\t<ownedEnd xmi:id=\"kbea7kzc\" visibility=\"public\" type=\"kbea7kz2\" association=\"kbea7kz8\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbea7kzb\" memberEnd=\"kbea7kz9 kbea7kzd\">\n" +
            "\t<ownedEnd xmi:id=\"kbea7kzd\" visibility=\"public\" type=\"kbea7kz2\" association=\"kbea7kzb\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kz7\" name=\"_Blank5\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kze\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kza\" name=\"_Blank6\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbea7kzg\" name=\":owns\" visibility=\"public\" type=\"kbea7kzf\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kyh\" name=\":Ultrauser\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbea7kzh\" name=\"nodeKind\" visibility=\"public\" type=\"kbea7kzf\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kbea7kzi\" general=\"kbea7kyf\" name=\"AND\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbea7kyi\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:id=\"kbea7kzj\" name=\":productId\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbea7kzm\" name=\"MinLength 5\" constrainedElement=\"kbea7kzj\">\n" +
            "<specification body=\"MinLength 5\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbea7kzl\" xmi:id=\"kbea7kzn\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbea7kzj</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbea7kzp\" name=\"MaxLength 10\" constrainedElement=\"kbea7kzj\">\n" +
            "<specification body=\"MaxLength 10\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbea7kzo\" xmi:id=\"kbea7kzq\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbea7kzj</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbea7kye\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbea7kyb\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbea7kyc\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbea7kyd\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbea7kyw\" name=\"IRI\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbea7kzf\" name=\"Literal\"/>\n" +
            "</uml:Model>";
    }

    static getXMI22VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 conj.profile.uml#oF2bnU6GAqACHTb7_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"oF2bnU6GAqACHTb7\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"oF2bnU6GAqACHTb7_oF2bnU6GAqACHTb7_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"oF2bnU6GAqACHTb7_oF2bnU6GAqACHTb7_content_annotations\">\n" +
            "\t\t\t\t<references href=\"conj.profile.uml#oF2bnU6GAqACHTb7_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"conj.profile.uml#oF2bnU6GAqACHTb7_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbh02f1n\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbh02f1s\" visibility=\"public\" xmi:id=\"kbh02f1r\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XgebnU6GAqACHTp__multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XgebnU6GAqACHTp__multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbh02f1s\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh02f1w\" visibility=\"public\" xmi:id=\"kbh02f1v\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"IQebnU6GAqACHTqJ_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"IQebnU6GAqACHTqJ_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh02f1z\" visibility=\"public\" xmi:id=\"kbh02f1y\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqS_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqS_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbh02f1w\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbh02f23\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqV_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqV_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":owns\" type=\"kbh02f24\" visibility=\"public\" xmi:id=\"kbh02f25\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqX_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqX_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank3\" visibility=\"public\" xmi:id=\"kbh02f1z\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":owns\" type=\"kbh02f1q\" visibility=\"public\" xmi:id=\"kbh02f26\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eQebnU6GAqACHTqh_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eQebnU6GAqACHTqh_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Titanuser\" visibility=\"public\" xmi:id=\"kbh02f1o\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbh02f1n\" name=\"AND\" xmi:id=\"kbh02f2c\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"AND\" type=\"kbh02f2a\" visibility=\"public\" xmi:id=\"kbh02f29\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eQebnU6GAqACHTqs_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eQebnU6GAqACHTqs_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank4\" visibility=\"public\" xmi:id=\"kbh02f2a\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh02f2f\" visibility=\"public\" xmi:id=\"kbh02f2e\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq2_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq2_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh02f2i\" visibility=\"public\" xmi:id=\"kbh02f2h\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq__multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq__multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank5\" visibility=\"public\" xmi:id=\"kbh02f2f\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":titancode\" visibility=\"public\" xmi:id=\"kbh02f2m\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"5QebnU6GAqACHTrC_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"5QebnU6GAqACHTrC_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank6\" visibility=\"public\" xmi:id=\"kbh02f2i\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":owns\" type=\"kbh02f2n\" visibility=\"public\" xmi:id=\"kbh02f2o\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"jQebnU6GAqACHTrF_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"jQebnU6GAqACHTrF_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Ultrauser\" visibility=\"public\" xmi:id=\"kbh02f1p\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\"nodeKind\" type=\"kbh02f2n\" visibility=\"public\" xmi:id=\"kbh02f2p\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"jQebnU6GAqACHTrI_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"jQebnU6GAqACHTrI_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<generalization general=\"kbh02f1n\" name=\"AND\" xmi:id=\"kbh02f2q\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Product\" visibility=\"public\" xmi:id=\"kbh02f1q\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":productId\" visibility=\"public\" xmi:id=\"kbh02f2r\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"jQebnU6GAqACHTrM_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"jQebnU6GAqACHTrM_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbh02f1m\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbh02f1j\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbh02f1k\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbh02f1l\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"IRI\" visibility=\"public\" xmi:id=\"kbh02f24\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Literal\" visibility=\"public\" xmi:id=\"kbh02f2n\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<ownedRule constrainedElement=\"jQebnU6GAqACHTrM\" name=\"MinLength 5\" xmi:id=\"kbh02f2u\">\n" +
            "\t\t\t<specification body=\"MinLength 5\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbh02f2u\" xmi:id=\"kbh02f2u_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbh02f2r</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"jQebnU6GAqACHTrM\" name=\"MaxLength 10\" xmi:id=\"kbh02f2x\">\n" +
            "\t\t\t<specification body=\"MaxLength 10\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbh02f2x\" xmi:id=\"kbh02f2x_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbh02f2r</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh02f1u kbh02f1r\" name=\"\" xmi:id=\"kbh02f1t\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh02f1n\" visibility=\"public\" xmi:id=\"kbh02f1u\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"XgebnU6GAqACHTp9_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"XgebnU6GAqACHTp9_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh02f21 kbh02f1v\" name=\"\" xmi:id=\"kbh02f1x\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh02f1s\" visibility=\"public\" xmi:id=\"kbh02f21\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"IQebnU6GAqACHTqH_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"IQebnU6GAqACHTqH_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh02f22 kbh02f1y\" name=\"\" xmi:id=\"kbh02f20\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh02f1s\" visibility=\"public\" xmi:id=\"kbh02f22\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqQ_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"kQebnU6GAqACHTqQ_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh02f28 kbh02f26\" name=\"\" xmi:id=\"kbh02f27\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh02f1z\" visibility=\"public\" xmi:id=\"kbh02f28\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"GQebnU6GAqACHTqf_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"GQebnU6GAqACHTqf_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh02f2d kbh02f29\" name=\"\" xmi:id=\"kbh02f2b\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh02f1o\" visibility=\"public\" xmi:id=\"kbh02f2d\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"eQebnU6GAqACHTqq_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"eQebnU6GAqACHTqq_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh02f2k kbh02f2e\" name=\"\" xmi:id=\"kbh02f2g\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh02f2a\" visibility=\"public\" xmi:id=\"kbh02f2k\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq0_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq0_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh02f2l kbh02f2h\" name=\"\" xmi:id=\"kbh02f2j\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh02f2a\" visibility=\"public\" xmi:id=\"kbh02f2l\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq9_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"5QebnU6GAqACHTq9_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbh02f1m\" xmi:id=\"kbh02f1m_enumeration\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbh02f24\" xmi:id=\"kbh02f24_primitive\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbh02f2n\" xmi:id=\"kbh02f2n_primitive\"/>\n" +
            "</xmi:XMI>";
    }

    /**
     * Disyunciones
     * @returns {string}
     */
    static getXMI23() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbeacolp\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacolu\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacolx\" name=\"OR\" visibility=\"public\" type=\"kbeacoly\" association=\"kbeacolz\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbeacolz\" memberEnd=\"kbeacolx kbeacom0\">\n" +
            "\t<ownedEnd xmi:id=\"kbeacom0\" visibility=\"public\" type=\"kbeacolu\" association=\"kbeacolz\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacoly\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacom1\" name=\"Shape\" visibility=\"public\" type=\"kbeacom2\" association=\"kbeacom3\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeacom4\" name=\"Shape\" visibility=\"public\" type=\"kbeacom5\" association=\"kbeacom6\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbeacom3\" memberEnd=\"kbeacom1 kbeacom7\">\n" +
            "\t<ownedEnd xmi:id=\"kbeacom7\" visibility=\"public\" type=\"kbeacoly\" association=\"kbeacom3\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbeacom6\" memberEnd=\"kbeacom4 kbeacom8\">\n" +
            "\t<ownedEnd xmi:id=\"kbeacom8\" visibility=\"public\" type=\"kbeacoly\" association=\"kbeacom6\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacom2\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacom9\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbeacomb\" name=\":owns\" visibility=\"public\" type=\"kbeacoma\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacom5\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacomc\" name=\":owns\" visibility=\"public\" type=\"kbeacolw\" association=\"kbeacomd\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbeacomd\" memberEnd=\"kbeacomc kbeacome\">\n" +
            "\t<ownedEnd xmi:id=\"kbeacome\" visibility=\"public\" type=\"kbeacom5\" association=\"kbeacomd\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacolv\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacomf\" name=\"OR\" visibility=\"public\" type=\"kbeacomg\" association=\"kbeacomh\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kbeacomi\" general=\"kbeacolu\" name=\"OR\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbeacomh\" memberEnd=\"kbeacomf kbeacomj\">\n" +
            "\t<ownedEnd xmi:id=\"kbeacomj\" visibility=\"public\" type=\"kbeacolv\" association=\"kbeacomh\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacomg\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacomk\" name=\"Shape\" visibility=\"public\" type=\"kbeacoml\" association=\"kbeacomm\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbeacomn\" name=\"Shape\" visibility=\"public\" type=\"kbeacomo\" association=\"kbeacomp\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbeacomm\" memberEnd=\"kbeacomk kbeacomq\">\n" +
            "\t<ownedEnd xmi:id=\"kbeacomq\" visibility=\"public\" type=\"kbeacomg\" association=\"kbeacomm\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbeacomp\" memberEnd=\"kbeacomn kbeacomr\">\n" +
            "\t<ownedEnd xmi:id=\"kbeacomr\" visibility=\"public\" type=\"kbeacomg\" association=\"kbeacomp\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacoml\" name=\"_Blank5\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacoms\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacomo\" name=\"_Blank6\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbeacomu\" name=\":owns\" visibility=\"public\" type=\"kbeacomt\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbeacolw\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:id=\"kbeacomv\" name=\":productId\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbeacomy\" name=\"OR MinLength 5\" constrainedElement=\"kbeacomv\">\n" +
            "<specification body=\"OR MinLength 5\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeacomx\" xmi:id=\"kbeacomz\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeacomv</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbeacon1\" name=\"OR MaxLength 10\" constrainedElement=\"kbeacomv\">\n" +
            "<specification body=\"OR MaxLength 10\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "<ownedComment annotatedElement=\"kbeacon0\" xmi:id=\"kbeacon2\" xmi:type=\"uml:Comment\">\n" +
            "<body>kbeacomv</body>\n" +
            "</ownedComment>\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbeacolt\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbeacolq\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbeacolr\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbeacols\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbeacoma\" name=\"IRI\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbeacomt\" name=\"Literal\"/>\n" +
            "</uml:Model>";
    }

    static getXMI23VP() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<xmi:XMI xmi:version=\"2.1\" xmlns:ecore=\"http://www.eclipse.org/emf/2002/Ecore\" xmlns:uml=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmlns:untitled_profile=\"http:///schemas/untitled_profile/0\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http:///schemas/untitled_profile/0 disy.profile.uml#P2bbnU6GAqACHTri_content\">\n" +
            "\t<uml:Model name=\"untitled\" xmi:id=\"P2bbnU6GAqACHTri\">\n" +
            "\t\t<xmi:Documentation exporter=\"Visual Paradigm\" exporterVersion=\"7.0.2\">\n" +
            "\t\t\t\n" +
            "\t\t</xmi:Documentation>\n" +
            "\t\t<profileApplication xmi:id=\"P2bbnU6GAqACHTri_P2bbnU6GAqACHTri_content_profileApplication\">\n" +
            "\t\t\t<eAnnotations source=\"http://www.eclipse.org/uml2/2.0.0/UML\" xmi:id=\"P2bbnU6GAqACHTri_P2bbnU6GAqACHTri_content_annotations\">\n" +
            "\t\t\t\t<references href=\"disy.profile.uml#P2bbnU6GAqACHTri_content\" xmi:type=\"ecore:EPackage\"/>\n" +
            "\t\t\t</eAnnotations>\n" +
            "\t\t\t<appliedProfile href=\"disy.profile.uml#P2bbnU6GAqACHTri_profile\"/>\n" +
            "\t\t</profileApplication>\n" +
            "\t\t\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":User\" visibility=\"public\" xmi:id=\"kbh04zfw\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"OR\" type=\"kbh04zg0\" visibility=\"public\" xmi:id=\"kbh04zfz\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"nCHbnU6GAqACHT5m_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"nCHbnU6GAqACHT5m_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank1\" visibility=\"public\" xmi:id=\"kbh04zg0\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh04zg4\" visibility=\"public\" xmi:id=\"kbh04zg3\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"EiHbnU6GAqACHT5w_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"EiHbnU6GAqACHT5w_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh04zg7\" visibility=\"public\" xmi:id=\"kbh04zg6\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"siHbnU6GAqACHT55_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"siHbnU6GAqACHT55_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank2\" visibility=\"public\" xmi:id=\"kbh04zg4\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":name\" visibility=\"public\" xmi:id=\"kbh04zgb\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"siHbnU6GAqACHT58_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"siHbnU6GAqACHT58_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":owns\" type=\"kbh04zgc\" visibility=\"public\" xmi:id=\"kbh04zgd\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"siHbnU6GAqACHT5._multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"siHbnU6GAqACHT5._multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank3\" visibility=\"public\" xmi:id=\"kbh04zg7\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\":owns\" type=\"kbh04zfy\" visibility=\"public\" xmi:id=\"kbh04zge\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6I_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6I_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Titanuser\" visibility=\"public\" xmi:id=\"kbh04zfx\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<generalization general=\"kbh04zfw\" name=\"OR\" xmi:id=\"kbh04zgk\" xmi:type=\"uml:Generalization\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</generalization>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"OR\" type=\"kbh04zgi\" visibility=\"public\" xmi:id=\"kbh04zgh\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6T_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6T_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank4\" visibility=\"public\" xmi:id=\"kbh04zgi\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh04zgn\" visibility=\"public\" xmi:id=\"kbh04zgm\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"6iHbnU6GAqACHT6d_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"6iHbnU6GAqACHT6d_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t\t<ownedAttribute aggregation=\"composite\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isNavigable=\"true\" isReadOnly=\"false\" isStatic=\"false\" name=\"Shape\" type=\"kbh04zgq\" visibility=\"public\" xmi:id=\"kbh04zgp\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6m_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6m_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank5\" visibility=\"public\" xmi:id=\"kbh04zgn\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":titancode\" visibility=\"public\" xmi:id=\"kbh04zgu\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6p_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6p_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"_Blank6\" visibility=\"public\" xmi:id=\"kbh04zgq\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"true\" name=\":owns\" type=\"kbh04zgv\" visibility=\"public\" xmi:id=\"kbh04zgw\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6s_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6s_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\":Product\" visibility=\"public\" xmi:id=\"kbh04zfy\" xmi:type=\"uml:Class\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedAttribute aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isID=\"false\" isLeaf=\"false\" isOrdered=\"false\" isReadOnly=\"false\" isStatic=\"false\" isUnique=\"false\" name=\":productId\" visibility=\"public\" xmi:id=\"kbh04zgx\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"hiHbnU6GAqACHT6v_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"hiHbnU6GAqACHT6v_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<type href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\" xmi:type=\"uml:PrimitiveType\"/>\n" +
            "\t\t\t</ownedAttribute>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Prefixes\" visibility=\"public\" xmi:id=\"kbh04zfv\" xmi:type=\"uml:Enumeration\">\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedLiteral name=\"prefix : &lt;https://schema.org/&gt;\" visibility=\"public\" xmi:id=\"kbh04zfs\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;\" visibility=\"public\" xmi:id=\"kbh04zft\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t\t<ownedLiteral name=\"base &lt;http://example.org/&gt;\" visibility=\"public\" xmi:id=\"kbh04zfu\" xmi:type=\"uml:EnumerationLiteral\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedLiteral>\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"IRI\" visibility=\"public\" xmi:id=\"kbh04zgc\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isActive=\"false\" isLeaf=\"false\" name=\"Literal\" visibility=\"public\" xmi:id=\"kbh04zgv\" xmi:type=\"uml:PrimitiveType\">\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<ownedRule constrainedElement=\"hiHbnU6GAqACHT6v\" name=\"OR MinLength 5\" xmi:id=\"kbh04zh0\">\n" +
            "\t\t\t<specification body=\"OR MinLength 5\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbh04zh0\" xmi:id=\"kbh04zh0_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbh04zgx</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<ownedRule constrainedElement=\"hiHbnU6GAqACHT6v\" name=\"OR MaxLength 10\" xmi:id=\"kbh04zh3\">\n" +
            "\t\t\t<specification body=\"OR MaxLength 10\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
            "\t\t\t\n" +
            "\t\t\t<ownedComment annotatedElement=\"kbh04zh3\" xmi:id=\"kbh04zh3_documentaiton\" xmi:type=\"uml:Comment\">\n" +
            "\t\t\t\t<body>kbh04zgx</body>\n" +
            "\t\t\t\t\n" +
            "\t\t\t</ownedComment>\n" +
            "\t\t</ownedRule>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh04zg2 kbh04zfz\" name=\"\" xmi:id=\"kbh04zg1\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh04zfw\" visibility=\"public\" xmi:id=\"kbh04zg2\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"nCHbnU6GAqACHT5k_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"nCHbnU6GAqACHT5k_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh04zg9 kbh04zg3\" name=\"\" xmi:id=\"kbh04zg5\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh04zg0\" visibility=\"public\" xmi:id=\"kbh04zg9\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"EiHbnU6GAqACHT5u_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"EiHbnU6GAqACHT5u_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh04zga kbh04zg6\" name=\"\" xmi:id=\"kbh04zg8\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh04zg0\" visibility=\"public\" xmi:id=\"kbh04zga\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"EiHbnU6GAqACHT53_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"EiHbnU6GAqACHT53_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh04zgg kbh04zge\" name=\"\" xmi:id=\"kbh04zgf\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh04zg7\" visibility=\"public\" xmi:id=\"kbh04zgg\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6G_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6G_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh04zgl kbh04zgh\" name=\"\" xmi:id=\"kbh04zgj\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh04zfx\" visibility=\"public\" xmi:id=\"kbh04zgl\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6R_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"siHbnU6GAqACHT6R_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh04zgs kbh04zgm\" name=\"\" xmi:id=\"kbh04zgo\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh04zgi\" visibility=\"public\" xmi:id=\"kbh04zgs\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"6iHbnU6GAqACHT6b_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"6iHbnU6GAqACHT6b_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t\t<packagedElement isAbstract=\"false\" isDerived=\"false\" isLeaf=\"false\" memberEnd=\"kbh04zgt kbh04zgp\" name=\"\" xmi:id=\"kbh04zgr\" xmi:type=\"uml:Association\">\n" +
            "\t\t\t<ownedEnd aggregation=\"none\" isDerived=\"false\" isDerivedUnion=\"false\" isLeaf=\"false\" isReadOnly=\"false\" isStatic=\"false\" name=\"\" type=\"kbh04zgi\" visibility=\"public\" xmi:id=\"kbh04zgt\" xmi:type=\"uml:Property\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t\t\n" +
            "\t\t\t\t<lowerValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6k_multiplicity_lowerValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t\t<upperValue value=\"1\" xmi:id=\"OiHbnU6GAqACHT6k_multiplicity_upperValue\" xmi:type=\"uml:LiteralString\"/>\n" +
            "\t\t\t</ownedEnd>\n" +
            "\t\t\t\n" +
            "\t\t</packagedElement>\n" +
            "\t</uml:Model>\n" +
            "\t<untitled_profile:enumeration base_Enumeration=\"kbh04zfv\" xmi:id=\"kbh04zfv_enumeration\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbh04zgc\" xmi:id=\"kbh04zgc_primitive\"/>\n" +
            "\t<untitled_profile:primitive base_PrimitiveType=\"kbh04zgv\" xmi:id=\"kbh04zgv_primitive\"/>\n" +
            "</xmi:XMI>";
    }
	
	static getXMI24() {
		return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kjsf4gwj" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kjsf4gwo" name=":User">
	<ownedAttribute xmi:id="kjsf4gwr" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kjsf4gwt" name=":birthDate" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Date">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kjsf4gws" />
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsf4gwp" name=":NoUser">
	<generalization xmi:id="kjsf4gwu" general="kjsf4gwo" name="NOT"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsf4gwq" name=":NoName">
	<ownedAttribute xmi:id="kjsf4gwv" name="NOT" visibility="public" type="kjsf4gww" association="kjsf4gwx" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kjsf4gwx" memberEnd="kjsf4gwv kjsf4gwy">
	<ownedEnd xmi:id="kjsf4gwy" visibility="public" type="kjsf4gwq" association="kjsf4gwx"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kjsf4gww" name="_Blank1">
	<ownedAttribute xmi:id="kjsf4gwz" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsf4gwn" name="Prefixes">
	<ownedLiteral xmi:id="kjsf4gwk" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="kjsf4gwl" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kjsf4gwm" name="base &lt;http://example.org/>"/>
</packagedElement>
</uml:Model>`;
	}

}
module.exports = Xmirepository;