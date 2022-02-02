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
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qewr2\" name=\":gender-:User\">\n" +
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
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsfr89i" name="Extra-:VIPUser">
	<ownedLiteral xmi:id="kjsfr89k" name="a"/>
</packagedElement>
</uml:Model>`;
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
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsfvimk" name="Extra-:VIPUser">
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
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805f\" name=\":status-:Product\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805n\" name=\"codes:~ - codes:unknown - codes:bad.~ \"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8op805o\" name=\"&quot;111&quot;\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805h\" name=\":phone-:Product\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805p\" name=\"&quot;+34&quot;~ - &quot;+3468031&quot; - &quot;+3467182&quot;~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805j\" name=\":quantity-:Product\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805q\" name=\"99~ - 9987 - 991~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805l\" name=\":url-:Product\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805r\" name=\"codes:Personal~\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
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
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4n\" name=\":status-:Product\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4t\" name=\". - codes:bad \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4p\" name=\":name-:Product\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4u\" name=\". - &quot;Trademark&quot; \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4r\" name=\":price-:Product\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4y\" name=\". - 66 \"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
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
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql3\" name=\":frlabel-:FrenchProduct\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqle\" name=\"@fr \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql6\" name=\":enlabel-:EnglishProduct\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlf\" name=\"@en~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql9\" name=\":splabel-:SpanishProduct\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlg\" name=\"@es~ - @es-AR - @es-ES \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszqlc\" name=\":label-:AnyProduct\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlh\" name=\". - @kz \"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
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
<packagedElement xmi:type="uml:Enumeration" xmi:id="kjsghtjb" name=":gender-_Blank1">
	<ownedLiteral xmi:id="kjsghtjj" name=":Male"/>
	<ownedLiteral xmi:id="kjsghtjk" name=":Female"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kjsghtj3" name="IRI"/>
</uml:Model>`;
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
			"\t<ownedLiteral xmi:id=\"kbamo85u\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85t\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85v\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo867\" name=\":gender-_:1\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamo86b\" name=\":Male\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo869\" name=\":gender-_:2\">\n" +
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
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamltdf\" name=\"^:gender-:User\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamltdl\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamltdm\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
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
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03s\" name=\"Extra-:FollowSpaniards\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03x\" name=\":follows\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03v\" name=\":nationality-_:1\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03y\" name=\":Spain\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
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
            "<ownedRule xmi:id=\"kbea7kzp\" name=\"AND MaxLength 10\" constrainedElement=\"kbea7kzj\">\n" +
            "<specification body=\"AND MaxLength 10\" xmi:type=\"uml:OpaqueExpression\"/>\n" +
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

    /**
     * Disyunciones
     * @returns {string}
     */
    static getXMI23() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kz4axwxb" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwxg" name=":User">
	<ownedAttribute xmi:id="kz4axwxj" name="OR" visibility="public" type="kz4axwxk" association="kz4axwxl" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4axwxl" memberEnd="kz4axwxj kz4axwxm">
	<ownedEnd xmi:id="kz4axwxm" visibility="public" type="kz4axwxg" association="kz4axwxl"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwxk" name="_Blank1">
	<ownedAttribute xmi:id="kz4axwxn" name="Shape" visibility="public" type="kz4axwxo" association="kz4axwxp" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="kz4axwxq" name="Shape" visibility="public" type="kz4axwxr" association="kz4axwxs" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4axwxp" memberEnd="kz4axwxn kz4axwxt">
	<ownedEnd xmi:id="kz4axwxt" visibility="public" type="kz4axwxk" association="kz4axwxp"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4axwxs" memberEnd="kz4axwxq kz4axwxu">
	<ownedEnd xmi:id="kz4axwxu" visibility="public" type="kz4axwxk" association="kz4axwxs"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwxo" name="_Blank2">
	<ownedAttribute xmi:id="kz4axwxv" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4axwxx" name=":owns" visibility="public" type="kz4axwxw" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwxr" name="_Blank3">
	<ownedAttribute xmi:id="kz4axwxy" name=":owns" visibility="public" type="kz4axwxi" association="kz4axwxz" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4axwxz" memberEnd="kz4axwxy kz4axwy0">
	<ownedEnd xmi:id="kz4axwy0" visibility="public" type="kz4axwxr" association="kz4axwxz"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwxh" name=":Titanuser">
	<ownedAttribute xmi:id="kz4axwy1" name="OR" visibility="public" type="kz4axwy2" association="kz4axwy3" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="kz4axwy4" general="kz4axwxg" name="OR"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4axwy3" memberEnd="kz4axwy1 kz4axwy5">
	<ownedEnd xmi:id="kz4axwy5" visibility="public" type="kz4axwxh" association="kz4axwy3"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwy2" name="_Blank4">
	<ownedAttribute xmi:id="kz4axwy6" name="Shape" visibility="public" type="kz4axwy7" association="kz4axwy8" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="kz4axwy9" name="Shape" visibility="public" type="kz4axwya" association="kz4axwyb" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4axwy8" memberEnd="kz4axwy6 kz4axwyc">
	<ownedEnd xmi:id="kz4axwyc" visibility="public" type="kz4axwy2" association="kz4axwy8"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4axwyb" memberEnd="kz4axwy9 kz4axwyd">
	<ownedEnd xmi:id="kz4axwyd" visibility="public" type="kz4axwy2" association="kz4axwyb"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwy7" name="_Blank5">
	<ownedAttribute xmi:id="kz4axwye" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwya" name="_Blank6">
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4axwyg" name=":owns" visibility="public" type="kz4axwyf" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4axwxi" name=":Product">
	<ownedAttribute xmi:id="kz4axwyh" name=":productId" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kz4axwyi" />
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4axwyk" name=":productId" visibility="public" type="kz4axwyp" isUnique="true">

		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kz4axwyl" />	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4axwyq" name=":productId" visibility="public" type="kz4axwyp" isUnique="true">

		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kz4axwyr" />	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="kz4axwyn" name="MinLength 5" constrainedElement="kz4axwyk">
<specification body="MinLength 5" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kz4axwyn" xmi:id="kz4axwyo" xmi:type="uml:Comment">
<body>kz4axwyk</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="kz4axwyt" name="MaxLength 10" constrainedElement="kz4axwyq">
<specification body="MaxLength 10" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kz4axwyt" xmi:id="kz4axwyu" xmi:type="uml:Comment">
<body>kz4axwyq</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kz4axwxf" name="Prefixes">
	<ownedLiteral xmi:id="kz4axwxc" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="kz4axwxd" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kz4axwxe" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kz4axwyp" name="Any"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kz4axwxw" name="IRI"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kz4axwyf" name="Literal"/>
</uml:Model>`;
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
	
	static getXMI25() {
		return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="kz4b0mvr" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="kz4b0mvy" name=":AdultPerson">
	<generalization xmi:id="kz4b0mw3" general="kz4b0mw2" name="a"/>
	<ownedAttribute xmi:id="kz4b0mw4" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4b0mw7" name=":age" visibility="public" type="kz4b0mwa" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4b0mwb" name=":gender" visibility="public" type="kz4b0mwd" isUnique="true">

		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kz4b0mwc" />	</ownedAttribute>
	<ownedAttribute xmi:id="kz4b0mwf" name=":gender" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kz4b0mwg" />
	</ownedAttribute>
	<ownedAttribute xmi:id="kz4b0mwi" name=":address" visibility="public" type="kz4b0mvz" association="kz4b0mwj" >
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kz4b0mwk" /></ownedAttribute>
	<ownedAttribute xmi:id="kz4b0mwl" name=":worksFor" visibility="public" type="kz4b0mw0" association="kz4b0mwm" >
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kz4b0mwn" value="*"/></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4b0mwp" name="Extra" visibility="public" type="kz4b0mwo" isUnique="true">
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="kz4b0mw8" name="MinInclusive 18" constrainedElement="kz4b0mw7">
<specification body="MinInclusive 18" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kz4b0mw8" xmi:id="kz4b0mw9" xmi:type="uml:Comment">
<body>kz4b0mw7</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Association" xmi:id="kz4b0mwj" memberEnd="kz4b0mwi kz4b0mwq">
	<ownedEnd xmi:id="kz4b0mwq" visibility="public" type="kz4b0mvy" association="kz4b0mwj"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4b0mwm" memberEnd="kz4b0mwl kz4b0mwr">
	<ownedEnd xmi:id="kz4b0mwr" visibility="public" type="kz4b0mvy" association="kz4b0mwm"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4b0mw2" name="schema:Person"/>
<packagedElement xmi:type="uml:Class" xmi:id="kz4b0mvz" name=":Address">
	<ownedAttribute xmi:id="kz4b0mwt" name=":addressLine" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kz4b0mws" value="3"/>
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="kz4b0mwu" name=":postalCode" visibility="public" type="kz4b0mwa" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:id="kz4b0mwx" name=":state" visibility="public" type="kz4b0mw1" association="kz4b0mwy" ></ownedAttribute>
	<ownedAttribute xmi:id="kz4b0mwz" name=":city" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="kz4b0mwv" name="/[0-9]{5}/" constrainedElement="kz4b0mwu">
<specification body="/[0-9]{5}/" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kz4b0mwv" xmi:id="kz4b0mww" xmi:type="uml:Comment">
<body>kz4b0mwu</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="kz4b0mx0" name="CLOSED" constrainedElement="kz4b0mvz">
<specification body="CLOSED" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kz4b0mx0" xmi:id="kz4b0mx1" xmi:type="uml:Comment">
<body>kz4b0mvz</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Association" xmi:id="kz4b0mwy" memberEnd="kz4b0mwx kz4b0mx2">
	<ownedEnd xmi:id="kz4b0mx2" visibility="public" type="kz4b0mvz" association="kz4b0mwy"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4b0mw0" name=":Company">
	<ownedAttribute xmi:id="kz4b0mx3" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="kz4b0mx4" name=":state" visibility="public" type="kz4b0mw1" association="kz4b0mx5" ></ownedAttribute>
	<ownedAttribute xmi:id="kz4b0mx6" name=":employee" visibility="public" type="kz4b0mvy" association="kz4b0mx7" >
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="kz4b0mx8" />
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="kz4b0mx9" value="*"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4b0mx5" memberEnd="kz4b0mx4 kz4b0mxa">
	<ownedEnd xmi:id="kz4b0mxa" visibility="public" type="kz4b0mw0" association="kz4b0mx5"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="kz4b0mx7" memberEnd="kz4b0mx6 kz4b0mxb">
	<ownedEnd xmi:id="kz4b0mxb" visibility="public" type="kz4b0mw0" association="kz4b0mx7"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="kz4b0mw1" name=":State"/>
<ownedRule xmi:id="kz4b0mxc" name="/[A-Z]{2}/" constrainedElement="kz4b0mw1">
<specification body="/[A-Z]{2}/" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="kz4b0mxc" xmi:id="kz4b0mxd" xmi:type="uml:Comment">
<body>kz4b0mw1</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kz4b0mvx" name="Prefixes">
	<ownedLiteral xmi:id="kz4b0mvs" name="prefix rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#>"/>
	<ownedLiteral xmi:id="kz4b0mvt" name="prefix : &lt;http://example.org/>"/>
	<ownedLiteral xmi:id="kz4b0mvu" name="prefix schema: &lt;http://schema.org/>"/>
	<ownedLiteral xmi:id="kz4b0mvv" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="kz4b0mvw" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kz4b0mwa" name="Any"/>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kz4b0mwd" name=":gender-:AdultPerson">
	<ownedLiteral xmi:id="kz4b0mxe" name=":Male"/>
	<ownedLiteral xmi:id="kz4b0mxf" name=":Female"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="kz4b0mwo" name="Extra-:AdultPerson">
	<ownedLiteral xmi:id="kz4b0mxg" name="rdf:type"/>
</packagedElement>
</uml:Model>`;
	}

}
module.exports = Xmirepository;