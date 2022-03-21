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
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qewr2\" name=\"Enum0\">\n" +
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
 xmi:id="l10k9ev1" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10k9ev6" name=":User">
	<ownedAttribute xmi:id="l10k9evc" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10k9eve" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10k9evh" name=":knows" visibility="public" type="l10k9ev6" association="l10k9evi" ></ownedAttribute>
	<ownedAttribute xmi:id="l10k9evj" name=":worksFor" visibility="public" type="l10k9ev9" association="l10k9evk" ></ownedAttribute>
	<ownedAttribute xmi:id="l10k9evl" name=":buys" visibility="public" type="l10k9eva" association="l10k9evm" >
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10k9evn" value="10"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9evi" memberEnd="l10k9evh l10k9evo">
	<ownedEnd xmi:id="l10k9evo" visibility="public" type="l10k9ev6" association="l10k9evi"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9evk" memberEnd="l10k9evj l10k9evp">
	<ownedEnd xmi:id="l10k9evp" visibility="public" type="l10k9ev6" association="l10k9evk"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9evm" memberEnd="l10k9evl l10k9evq">
	<ownedEnd xmi:id="l10k9evq" visibility="public" type="l10k9ev6" association="l10k9evm"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10k9ev7" name=":Ultrauser">
	<generalization xmi:id="l10k9evr" general="l10k9ev6" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10k9ev8" name=":Titanuser">
	<ownedAttribute xmi:id="l10k9evs" name="Shape" visibility="public" type="l10k9evt" association="l10k9evu" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="l10k9evv" general="l10k9ev6" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10k9evt" name="_Blank1">
	<ownedAttribute xmi:id="l10k9evw" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9evu" memberEnd="l10k9evs l10k9evx">
	<ownedEnd xmi:id="l10k9evx" visibility="public" type="l10k9evt" association="l10k9evu"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10k9ev9" name=":Company">
	<ownedAttribute xmi:id="l10k9evy" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10k9evz" name=":hasEmployee" visibility="public" type="l10k9ev6" association="l10k9ew0" >
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10k9ew1" />
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10k9ew2" value="*"/></ownedAttribute>
	<ownedAttribute xmi:id="l10k9ew3" name=":possess" visibility="public" type="l10k9eva" association="l10k9ew4" >
		<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10k9ew5" value="5"/>
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10k9ew6" value="*"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9ew0" memberEnd="l10k9evz l10k9ew7">
	<ownedEnd xmi:id="l10k9ew7" visibility="public" type="l10k9ev9" association="l10k9ew0"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9ew4" memberEnd="l10k9ew3 l10k9ew8">
	<ownedEnd xmi:id="l10k9ew8" visibility="public" type="l10k9ev9" association="l10k9ew4"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10k9eva" name="&lt;Product&gt;">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10k9ew9" name=":name" visibility="public" type="l10k9ewa" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:id="l10k9ewb" name=":sku" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Boolean">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10k9ewc" name=":manufacturer" visibility="public" type="l10k9evb" association="l10k9ewd" >
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10k9ewe" value="*"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9ewd" memberEnd="l10k9ewc l10k9ewf">
	<ownedEnd xmi:id="l10k9ewf" visibility="public" type="l10k9eva" association="l10k9ewd"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10k9evb" name="&lt;Organization&gt;">
	<ownedAttribute xmi:id="l10k9ewg" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10k9ewh" name=":isPartOf" visibility="public" type="l10k9evb" association="l10k9ewi" >
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10k9ewj" /></ownedAttribute>
	<ownedAttribute xmi:id="l10k9ewk" name=":hasDirectives" visibility="public" type="l10k9ev6" association="l10k9ewl" >
		<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10k9ewm" value="5"/>
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10k9ewn" value="5"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9ewi" memberEnd="l10k9ewh l10k9ewo">
	<ownedEnd xmi:id="l10k9ewo" visibility="public" type="l10k9evb" association="l10k9ewi"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10k9ewl" memberEnd="l10k9ewk l10k9ewp">
	<ownedEnd xmi:id="l10k9ewp" visibility="public" type="l10k9evb" association="l10k9ewl"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10k9ev5" name="Prefixes">
	<ownedLiteral xmi:id="l10k9ev2" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10k9ev3" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10k9ev4" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10k9ewa" name="Any"/>
</uml:Model>`;
    }

    /**
     * Herencia simple
     * @returns {string}
     */
    static getXMI5() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kag64" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kag69" name=":User">
	<ownedAttribute xmi:id="l10kag6d" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kag6f" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kag6e" />
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kag6a" name=":Ultrauser">
	<generalization xmi:id="l10kag6g" general="l10kag69" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kag6b" name=":Titanuser">
	<ownedAttribute xmi:id="l10kag6h" name="Shape" visibility="public" type="l10kag6i" association="l10kag6j" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="l10kag6k" general="l10kag69" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kag6i" name="_Blank1">
	<ownedAttribute xmi:id="l10kag6l" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kag6j" memberEnd="l10kag6h l10kag6m">
	<ownedEnd xmi:id="l10kag6m" visibility="public" type="l10kag6i" association="l10kag6j"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kag6c" name=":VIPUser">
	<generalization xmi:id="l10kag6n" general="l10kag69" name="a"/>
	<ownedAttribute xmi:type="uml:Property" xmi:id=":VIPUser" name="Extra" visibility="public" type="l10kag6p" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kag68" name="Prefixes">
	<ownedLiteral xmi:id="l10kag65" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kag66" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kag67" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kag6p" name="a"/>
</uml:Model>`;
    }

    /**
     * Herencia múltiple
     * @returns {string}
     */
    static getXMI6() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10lm9q6" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10lm9qb" name=":User">
	<ownedAttribute xmi:id="l10lm9qg" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10lm9qi" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10lm9qh" />
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lm9qc" name="&lt;Citizen&gt;">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10lm9qj" name=":id" visibility="public" type="l10lm9qk" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lm9qd" name=":Ultrauser">
	<generalization xmi:id="l10lm9ql" general="l10lm9qb" name="a"/>
	<generalization xmi:id="l10lm9qm" general="l10lm9qc" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lm9qe" name=":Titanuser">
	<ownedAttribute xmi:id="l10lm9qn" name="Shape" visibility="public" type="l10lm9qo" association="l10lm9qp" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="l10lm9qq" general="l10lm9qb" name="AND"/>
	<generalization xmi:id="l10lm9qr" general="l10lm9qc" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lm9qo" name="_Blank1">
	<ownedAttribute xmi:id="l10lm9qs" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10lm9qp" memberEnd="l10lm9qn l10lm9qt">
	<ownedEnd xmi:id="l10lm9qt" visibility="public" type="l10lm9qo" association="l10lm9qp"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lm9qf" name=":VIPUser">
	<generalization xmi:id="l10lm9qu" general="l10lm9qb" name="a"/>
	<generalization xmi:id="l10lm9qv" general="l10lm9qc" name="a"/>
	<ownedAttribute xmi:type="uml:Property" xmi:id=":VIPUser" name="Extra" visibility="public" type="l10lm9qx" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10lm9qa" name="Prefixes">
	<ownedLiteral xmi:id="l10lm9q7" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10lm9q8" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10lm9q9" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10lm9qk" name="Any"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10lm9qx" name="a"/>
</uml:Model>`;
    }

    /**
     * Tipos de nodo
     * @returns {string}
     */
    static getXMI7() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kau2b" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kau2g" name=":User">
	<ownedAttribute xmi:id="l10kau2l" name="Shape" visibility="public" type="l10kau2m" association="l10kau2n" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kau2p" name="nodeKind" visibility="public" type="l10kau2o" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kau2m" name="_Blank1">
	<ownedAttribute xmi:id="l10kau2q" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kau2n" memberEnd="l10kau2l l10kau2r">
	<ownedEnd xmi:id="l10kau2r" visibility="public" type="l10kau2m" association="l10kau2n"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kau2h" name=":Ultrauser">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kau2t" name="nodeKind" visibility="public" type="l10kau2s" isUnique="true">
	</ownedAttribute>
	<generalization xmi:id="l10kau2u" general="l10kau2g" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kau2i" name=":Titanuser">
	<ownedAttribute xmi:id="l10kau2v" name="Shape" visibility="public" type="l10kau2w" association="l10kau2x" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="l10kau2y" general="l10kau2g" name="AND"/>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kau30" name="nodeKind" visibility="public" type="l10kau2z" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kau2w" name="_Blank2"/>
<packagedElement xmi:type="uml:Association" xmi:id="l10kau2x" memberEnd="l10kau2v l10kau31">
	<ownedEnd xmi:id="l10kau31" visibility="public" type="l10kau2w" association="l10kau2x"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kau2j" name="&lt;Product&gt;">
	<ownedAttribute xmi:id="l10kau32" name="Shape" visibility="public" type="l10kau33" association="l10kau34" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kau36" name="nodeKind" visibility="public" type="l10kau35" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kau33" name="_Blank3"/>
<packagedElement xmi:type="uml:Association" xmi:id="l10kau34" memberEnd="l10kau32 l10kau37">
	<ownedEnd xmi:id="l10kau37" visibility="public" type="l10kau33" association="l10kau34"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kau2k" name="&lt;AThing&gt;">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kau38" name="nodeKind" visibility="public" type="l10kau2o" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kau2f" name="Prefixes">
	<ownedLiteral xmi:id="l10kau2c" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kau2d" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kau2e" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kau2o" name="IRI"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kau2s" name="Literal"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kau2z" name="NonLiteral"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kau35" name="BNode"/>
</uml:Model>`;
    }

    /**
     * Facetas de literales
     * @returns {string}
     */
    static getXMI9() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kbbi3" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kbbi8" name=":User">
	<ownedAttribute xmi:id="l10kbbi9" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kbbid" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kbbic" />
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kbbig" name=":c" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kbbij" name=":d" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kbbim" name=":e" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kbbip" name=":f" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kbbis" name=":g" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="l10kbbia" name="/[a-z]+/" constrainedElement="l10kbbi9">
<specification body="/[a-z]+/" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kbbia" xmi:id="l10kbbib" xmi:type="uml:Comment">
<body>l10kbbi9</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10kbbie" name="MinInclusive 18" constrainedElement="l10kbbid">
<specification body="MinInclusive 18" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kbbie" xmi:id="l10kbbif" xmi:type="uml:Comment">
<body>l10kbbid</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10kbbih" name="TotalDigits 3" constrainedElement="l10kbbig">
<specification body="TotalDigits 3" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kbbih" xmi:id="l10kbbii" xmi:type="uml:Comment">
<body>l10kbbig</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10kbbik" name="FractionDigits 4" constrainedElement="l10kbbij">
<specification body="FractionDigits 4" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kbbik" xmi:id="l10kbbil" xmi:type="uml:Comment">
<body>l10kbbij</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10kbbin" name="Length 6" constrainedElement="l10kbbim">
<specification body="Length 6" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kbbin" xmi:id="l10kbbio" xmi:type="uml:Comment">
<body>l10kbbim</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10kbbiq" name="MinLength 3" constrainedElement="l10kbbip">
<specification body="MinLength 3" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kbbiq" xmi:id="l10kbbir" xmi:type="uml:Comment">
<body>l10kbbip</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10kbbit" name="MaxLength 15" constrainedElement="l10kbbis">
<specification body="MaxLength 15" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kbbit" xmi:id="l10kbbiu" xmi:type="uml:Comment">
<body>l10kbbis</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbbi7" name="Prefixes">
	<ownedLiteral xmi:id="l10kbbi4" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kbbi5" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kbbi6" name="base &lt;http://example.org/>"/>
</packagedElement>
</uml:Model>`;
    }

    /**
     * Rangos y exclusiones
     * @returns {string}
     */
    static getXMI10() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kbmff" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kbmfk" name=":Product">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kbmfm" name=":status" visibility="public" type="l10kbmfl" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kbmfo" name=":phone" visibility="public" type="l10kbmfn" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kbmfq" name=":quantity" visibility="public" type="l10kbmfp" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kbmfs" name=":url" visibility="public" type="l10kbmfr" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbmfj" name="Prefixes">
	<ownedLiteral xmi:id="l10kbmfg" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kbmfh" name="prefix codes: &lt;http://example.codes/>"/>
	<ownedLiteral xmi:id="l10kbmfi" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbmfl" name="Enum0">
	<ownedLiteral xmi:id="l10kbmft" name="codes:~ - codes:unknown - codes:bad.~ "/>
	<ownedLiteral xmi:id="l10kbmfu" name="&quot;111&quot;"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbmfn" name="Enum1">
	<ownedLiteral xmi:id="l10kbmfv" name="&quot;+34&quot;~ - &quot;+3468031&quot; - &quot;+3467182&quot;~ "/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbmfp" name="Enum2">
	<ownedLiteral xmi:id="l10kbmfw" name="99~ - 9987 - 991~ "/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbmfr" name="Enum3">
	<ownedLiteral xmi:id="l10kbmfx" name="codes:Personal~"/>
</packagedElement>
</uml:Model>`;
    }

    /**
     * Conjuntos genéricos con exclusiones
     * @returns {string}
     */
    static getXMI11() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kbslu" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kbslz" name=":Product">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kbsm1" name=":status" visibility="public" type="l10kbsm0" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kbsm3" name=":name" visibility="public" type="l10kbsm2" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kbsm5" name=":price" visibility="public" type="l10kbsm4" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbsly" name="Prefixes">
	<ownedLiteral xmi:id="l10kbslv" name="prefix codes: &lt;http://example.codes/>"/>
	<ownedLiteral xmi:id="l10kbslw" name="prefix : &lt;http://schema.org/>"/>
	<ownedLiteral xmi:id="l10kbslx" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbsm0" name="Enum0">
	<ownedLiteral xmi:id="l10kbsm6" name=". - codes:bad "/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbsm2" name="Enum1">
	<ownedLiteral xmi:id="l10kbsm7" name=". - &quot;Trademark&quot; "/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kbsm4" name="Enum2">
	<ownedLiteral xmi:id="l10kbsm8" name=". - 66 "/>
</packagedElement>
</uml:Model>`;
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
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kc49v" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kc4a0" name=":FrenchProduct">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kc4a5" name=":frlabel" visibility="public" type="l10kc4a4" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kc4a1" name=":EnglishProduct">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kc4a7" name=":enlabel" visibility="public" type="l10kc4a6" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kc4a2" name=":SpanishProduct">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kc4a9" name=":splabel" visibility="public" type="l10kc4a8" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kc4a3" name=":AnyProduct">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kc4ab" name=":label" visibility="public" type="l10kc4aa" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kc49z" name="Prefixes">
	<ownedLiteral xmi:id="l10kc49w" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kc49x" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kc49y" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kc4a4" name="Enum0">
	<ownedLiteral xmi:id="l10kc4ac" name="@fr "/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kc4a6" name="Enum1">
	<ownedLiteral xmi:id="l10kc4ad" name="@en~ "/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kc4a8" name="Enum2">
	<ownedLiteral xmi:id="l10kc4ae" name="@es~ - @es-AR - @es-ES "/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kc4aa" name="Enum3">
	<ownedLiteral xmi:id="l10kc4af" name=". - @kz "/>
</packagedElement>
</uml:Model>`;
    }

    /**
     * Cardinalidades aplicadas a conjuntos
     * @returns {string}
     */
    static getXMI14() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kclyr" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kclyw" name=":User">
	<ownedAttribute xmi:id="l10kclyz" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kclz0" name="EachOf" visibility="public" type="l10kclz1" association="l10kclz2" aggregation="composite">
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kclz3" /></ownedAttribute>
	<ownedAttribute xmi:id="l10kclz4" name="EachOf" visibility="public" type="l10kclz5" association="l10kclz6" aggregation="composite">
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kclz7" />
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10kclz8" value="*"/></ownedAttribute>
	<ownedAttribute xmi:id="l10kclz9" name=":owns" visibility="public" type="l10kclyx" association="l10kclza" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kclza" memberEnd="l10kclz9 l10kclzb">
	<ownedEnd xmi:id="l10kclzb" visibility="public" type="l10kclyw" association="l10kclza"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kclz1" name="_Blank1">
	<ownedAttribute xmi:id="l10kclzc" name=":givenName" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kclzd" name=":familyName" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kclz2" memberEnd="l10kclz0 l10kclze">
	<ownedEnd xmi:id="l10kclze" visibility="public" type="l10kclz1" association="l10kclz2"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kclz6" memberEnd="l10kclz4 l10kclzf">
	<ownedEnd xmi:id="l10kclzf" visibility="public" type="l10kclz1" association="l10kclz6"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kclz5" name="_Blank2">
	<ownedAttribute xmi:id="l10kclzg" name=":has" visibility="public" type="l10kclyy" association="l10kclzh" >
		<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10kclzi" value="2"/>
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10kclzj" value="*"/></ownedAttribute>
	<ownedAttribute xmi:id="l10kclzk" name=":c" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kclyx" name=":Garage">
	<ownedAttribute xmi:id="l10kclzl" name="EachOf" visibility="public" type="l10kclzm" association="l10kclzn" aggregation="composite">
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10kclzo" value="*"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kclzh" memberEnd="l10kclzg l10kclzp">
	<ownedEnd xmi:id="l10kclzp" visibility="public" type="l10kclyx" association="l10kclzh"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kclzm" name="_Blank3">
	<ownedAttribute xmi:id="l10kclzq" name="&lt;AE86&gt;" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kclzr" name="EachOf" visibility="public" type="l10kclzs" association="l10kclzt" aggregation="composite">
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kclzu" /></ownedAttribute>
	<ownedAttribute xmi:id="l10kclzv" name="EachOf" visibility="public" type="l10kclzw" association="l10kclzx" aggregation="composite">
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kclzy" /></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kclzn" memberEnd="l10kclzl l10kclzz">
	<ownedEnd xmi:id="l10kclzz" visibility="public" type="l10kclzm" association="l10kclzn"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kclzt" memberEnd="l10kclzr l10kcm00">
	<ownedEnd xmi:id="l10kcm00" visibility="public" type="l10kclzm" association="l10kclzt"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kclzx" memberEnd="l10kclzv l10kcm01">
	<ownedEnd xmi:id="l10kcm01" visibility="public" type="l10kclzm" association="l10kclzx"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kclzs" name="_Blank4">
	<ownedAttribute xmi:id="l10kcm02" name="&lt;Levin&gt;" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kcm03" name="&lt;Cilinders&gt;" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kclzw" name="_Blank5">
	<ownedAttribute xmi:id="l10kcm04" name="&lt;Trueno&gt;" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kcm05" name="&lt;Cilinders&gt;" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kclyy" name="&lt;Something&gt;"/>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kclyv" name="Prefixes">
	<ownedLiteral xmi:id="l10kclys" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kclyt" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kclyu" name="base &lt;http://example.org/>"/>
</packagedElement>
</uml:Model>`;
    }

    /**
     * OneOf
     * @returns {string}
     */
    static getXMI15() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l110hmh0" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l110hmh5" name=":User">
	<ownedAttribute xmi:id="l110hmh7" name="Shape" visibility="public" type="l110hmh8" association="l110hmh9" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="l110hmha" name="Shape" visibility="public" type="l110hmhb" association="l110hmhc" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l110hmh8" name="_Blank1">
	<ownedAttribute xmi:id="l110hmhf" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l110hmhd" name="OneOf" visibility="public" type="l110hmhb" association="l110hmhe" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmh9" memberEnd="l110hmh7 l110hmhg">
	<ownedEnd xmi:id="l110hmhg" visibility="public" type="l110hmh8" association="l110hmh9"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmhc" memberEnd="l110hmha l110hmhh">
	<ownedEnd xmi:id="l110hmhh" visibility="public" type="l110hmh8" association="l110hmhc"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmhe" memberEnd="l110hmhd l110hmhi">
	<ownedEnd xmi:id="l110hmhi" visibility="public" type="l110hmh8" association="l110hmhe"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l110hmhb" name="_Blank2">
	<ownedAttribute xmi:id="l110hmhk" name=":givenName" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l110hmhj" value="*"/>
	</ownedAttribute>
	<ownedAttribute xmi:id="l110hmhl" name=":familyName" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l110hmh6" name=":Car">
	<ownedAttribute xmi:id="l110hmhm" name=":model" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l110hmhn" name="Shape" visibility="public" type="l110hmho" association="l110hmhp" aggregation="composite">
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l110hmhq" value="2"/></ownedAttribute>
	<ownedAttribute xmi:id="l110hmhr" name="Shape" visibility="public" type="l110hmhs" association="l110hmht" aggregation="composite">
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l110hmhu" value="2"/></ownedAttribute>
	<ownedAttribute xmi:id="l110hmhv" name="Shape" visibility="public" type="l110hmhw" association="l110hmhx" aggregation="composite">
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l110hmhy" value="2"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l110hmho" name="_Blank3">
	<ownedAttribute xmi:id="l110hmi1" name=":turbo" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l110hmhz" name="OneOf" visibility="public" type="l110hmhs" association="l110hmi0" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmhp" memberEnd="l110hmhn l110hmi2">
	<ownedEnd xmi:id="l110hmi2" visibility="public" type="l110hmho" association="l110hmhp"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmht" memberEnd="l110hmhr l110hmi3">
	<ownedEnd xmi:id="l110hmi3" visibility="public" type="l110hmho" association="l110hmht"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmhx" memberEnd="l110hmhv l110hmi4">
	<ownedEnd xmi:id="l110hmi4" visibility="public" type="l110hmho" association="l110hmhx"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmi0" memberEnd="l110hmhz l110hmi5">
	<ownedEnd xmi:id="l110hmi5" visibility="public" type="l110hmho" association="l110hmi0"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l110hmhs" name="_Blank4">
	<ownedAttribute xmi:id="l110hmi8" name=":misfiring" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l110hmi6" name="OneOf" visibility="public" type="l110hmhw" association="l110hmi7" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l110hmi7" memberEnd="l110hmi6 l110hmi9">
	<ownedEnd xmi:id="l110hmi9" visibility="public" type="l110hmhs" association="l110hmi7"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l110hmhw" name="_Blank5">
	<ownedAttribute xmi:id="l110hmia" name=":atm" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l110hmh4" name="Prefixes">
	<ownedLiteral xmi:id="l110hmh1" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l110hmh2" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l110hmh3" name="base &lt;http://example.org/>"/>
</packagedElement>
</uml:Model>`;
    }

    /**
     * Formas anidadas
     * @returns {string}
     */
    static getXMI16() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kd5uz" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5v4" name=":Car">
	<ownedAttribute xmi:id="l10kd5va" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kd5vb" name=":belongs" visibility="public" type="l10kd5v9" association="l10kd5vc" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kd5vc" memberEnd="l10kd5vb l10kd5vd">
	<ownedEnd xmi:id="l10kd5vd" visibility="public" type="l10kd5v4" association="l10kd5vc"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5v5" name=":Garage"/>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5v6" name=":User">
	<ownedAttribute xmi:id="l10kd5ve" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kd5vf" name=":worksFor" visibility="public" type="l10kd5vg" association="l10kd5vh" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5vg" name="_:2">
	<generalization xmi:id="l10kd5vi" general="l10kd5v7" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kd5vh" memberEnd="l10kd5vf l10kd5vj">
	<ownedEnd xmi:id="l10kd5vj" visibility="public" type="l10kd5vg" association="l10kd5vh"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5v7" name=":Company"/>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5v8" name=":GreatGrandson">
	<ownedAttribute xmi:id="l10kd5vk" name=":parent" visibility="public" type="l10kd5vl" association="l10kd5vm" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5vl" name="_:3">
	<ownedAttribute xmi:id="l10kd5vn" name=":parent" visibility="public" type="l10kd5vo" association="l10kd5vp" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kd5vm" memberEnd="l10kd5vk l10kd5vq">
	<ownedEnd xmi:id="l10kd5vq" visibility="public" type="l10kd5vl" association="l10kd5vm"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kd5vp" memberEnd="l10kd5vn l10kd5vr">
	<ownedEnd xmi:id="l10kd5vr" visibility="public" type="l10kd5vl" association="l10kd5vp"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5vo" name="_:4">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kd5vt" name=":parent" visibility="public" type="l10kd5vu" isUnique="true">

		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10kd5vs" value="*"/>	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kd5v9" name="_:1">
	<generalization xmi:id="l10kd5vv" general="l10kd5v5" name="a"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kd5v3" name="Prefixes">
	<ownedLiteral xmi:id="l10kd5v0" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kd5v1" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kd5v2" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kd5vu" name="Any"/>
</uml:Model>`;
    }

    /**
     * Formas cerradas
     * @returns {string}
     */
    static getXMI17() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10lop5a" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10lop5f" name=":User">
	<ownedAttribute xmi:id="l10lop5j" name="Shape" visibility="public" type="l10lop5k" association="l10lop5l" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10lop5n" name="nodeKind" visibility="public" type="l10lop5m" isUnique="true">
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="l10lop5h" name="CLOSED" constrainedElement="l10lop5f">
<specification body="CLOSED" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10lop5h" xmi:id="l10lop5i" xmi:type="uml:Comment">
<body>l10lop5f</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Class" xmi:id="l10lop5k" name="_Blank1">
	<ownedAttribute xmi:id="l10lop5o" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10lop5s" name=":age" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10lop5r" />
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10lop5u" name=":gender" visibility="public" type="l10lop5t" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:id="l10lop5v" name=":knows" visibility="public" type="l10lop5f" association="l10lop5w" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10lop5l" memberEnd="l10lop5j l10lop5x">
	<ownedEnd xmi:id="l10lop5x" visibility="public" type="l10lop5k" association="l10lop5l"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lop5g" name=":Company">
	<ownedAttribute xmi:id="l10lop5y" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="l10lop5p" name="MaxLength 3" constrainedElement="l10lop5o">
<specification body="MaxLength 3" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10lop5p" xmi:id="l10lop5q" xmi:type="uml:Comment">
<body>l10lop5o</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10lop5z" name="CLOSED" constrainedElement="l10lop5g">
<specification body="CLOSED" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10lop5z" xmi:id="l10lop60" xmi:type="uml:Comment">
<body>l10lop5g</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Association" xmi:id="l10lop5w" memberEnd="l10lop5v l10lop61">
	<ownedEnd xmi:id="l10lop61" visibility="public" type="l10lop5g" association="l10lop5w"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10lop5e" name="Prefixes">
	<ownedLiteral xmi:id="l10lop5b" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10lop5c" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10lop5d" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10lop5t" name="Enum0">
	<ownedLiteral xmi:id="l10lop62" name=":Male"/>
	<ownedLiteral xmi:id="l10lop63" name=":Female"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10lop5m" name="IRI"/>
</uml:Model>`;
    }

    /**
     * Propiedades repetidas
     * @returns {string}
     */
    static getXMI18() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10lq2n0" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10lq2n5" name=":User">
	<ownedAttribute xmi:id="l10lq2n6" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10lq2nb" name=":parent" visibility="public" type="l10lq2nc" association="l10lq2nd" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="l10lq2ne" name=":parent" visibility="public" type="l10lq2nf" association="l10lq2ng" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lq2nc" name="_:1">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10lq2nh" name=":gender" visibility="public" type="l10lq2ni" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10lq2nd" memberEnd="l10lq2nb l10lq2nj">
	<ownedEnd xmi:id="l10lq2nj" visibility="public" type="l10lq2nc" association="l10lq2nd"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10lq2ng" memberEnd="l10lq2ne l10lq2nk">
	<ownedEnd xmi:id="l10lq2nk" visibility="public" type="l10lq2nc" association="l10lq2ng"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10lq2nf" name="_:2">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10lq2nl" name=":gender" visibility="public" type="l10lq2nm" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10lq2n4" name="Prefixes">
	<ownedLiteral xmi:id="l10lq2n1" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10lq2n2" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10lq2n3" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10lq2ni" name=":Male"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10lq2nm" name=":Female"/>
</uml:Model>`;
    }

    /**
     * Restricción triple inversa
     * @returns {string}
     */
    static getXMI19() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kdtwa" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kdtwf" name=":Person"/>
<packagedElement xmi:type="uml:Class" xmi:id="l10kdtwg" name=":User">
	<generalization xmi:id="l10kdtwi" general="l10kdtwf" name="^a"/>
	<ownedAttribute xmi:id="l10kdtwj" name="^:name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kdtwl" name="^:gender" visibility="public" type="l10kdtwk" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kdtwh" name=":Company">
	<ownedAttribute xmi:id="l10kdtwm" name="^:worksFor" visibility="public" type="l10kdtwg" association="l10kdtwn" >
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10kdtwo" value="*"/></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kdtwn" memberEnd="l10kdtwm l10kdtwp">
	<ownedEnd xmi:id="l10kdtwp" visibility="public" type="l10kdtwh" association="l10kdtwn"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kdtwe" name="Prefixes">
	<ownedLiteral xmi:id="l10kdtwb" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kdtwc" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kdtwd" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kdtwk" name="Enum0">
	<ownedLiteral xmi:id="l10kdtwq" name=":Male"/>
	<ownedLiteral xmi:id="l10kdtwr" name=":Female"/>
</packagedElement>
</uml:Model>`;
    }

    /**
     * EXTRA
     * @returns {string}
     */
    static getXMI20() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10ke4k1" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10ke4k6" name=":FollowSpaniards">
	<ownedAttribute xmi:id="l10ke4k7" name=":follows" visibility="public" type="l10ke4k8" association="l10ke4k9" aggregation="composite">
		<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="l10ke4ka" value="*"/></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id=":FollowSpaniards" name="Extra" visibility="public" type="l10ke4kc" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10ke4k8" name="_:1">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10ke4kd" name=":nationality" visibility="public" type="l10ke4ke" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10ke4k9" memberEnd="l10ke4k7 l10ke4kf">
	<ownedEnd xmi:id="l10ke4kf" visibility="public" type="l10ke4k8" association="l10ke4k9"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10ke4k5" name="Prefixes">
	<ownedLiteral xmi:id="l10ke4k2" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10ke4k3" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10ke4k4" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10ke4kc" name=":follows"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10ke4ke" name=":Spain"/>
</uml:Model>`;
    }

    /**
     * Expresiones etiquetadas
     * @returns {string}
     */
    static getXMI21() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10wwb6h" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10wwb6m" name=":User">
	<ownedAttribute xmi:id="l10wwb6o" name="$:name" visibility="public" type="l10wwb6p" association="l10wwb6q" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10wwb6p" name="_Blank1">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10wwb6r" name=":givenName" visibility="public" type="l10wwb6s" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10wwb6t" name=":familyName" visibility="public" type="l10wwb6s" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10wwb6v" name=":email" visibility="public" type="l10wwb6u" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10wwb6q" memberEnd="l10wwb6o l10wwb6w">
	<ownedEnd xmi:id="l10wwb6w" visibility="public" type="l10wwb6p" association="l10wwb6q"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10wwb6n" name=":Employee">
	<ownedAttribute xmi:id="l10wwb6x" name="&#38;:name" visibility="public" type="l10wwb6p" association="l10wwb6y" ></ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10wwb6z" name=":employeeId" visibility="public" type="l10wwb6s" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10wwb6y" memberEnd="l10wwb6x l10wwb70">
	<ownedEnd xmi:id="l10wwb70" visibility="public" type="l10wwb6n" association="l10wwb6y"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10wwb6l" name="Prefixes">
	<ownedLiteral xmi:id="l10wwb6i" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10wwb6j" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10wwb6k" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10wwb6s" name="Any"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10wwb6u" name="IRI"/>
</uml:Model>`;
    }

    /**
     * Conjunciones
     * @returns {string}
     */
    static getXMI22() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10z7hl9" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hle" name=":User">
	<ownedAttribute xmi:id="l10z7hli" name="Shape" visibility="public" type="l10z7hlj" association="l10z7hlk" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="l10z7hll" name="Shape" visibility="public" type="l10z7hlm" association="l10z7hln" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hlj" name="_Blank1">
	<ownedAttribute xmi:id="l10z7hlq" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10z7hls" name=":owns" visibility="public" type="l10z7hlr" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:id="l10z7hlo" name="AND" visibility="public" type="l10z7hlm" association="l10z7hlp" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10z7hlk" memberEnd="l10z7hli l10z7hlt">
	<ownedEnd xmi:id="l10z7hlt" visibility="public" type="l10z7hlj" association="l10z7hlk"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10z7hln" memberEnd="l10z7hll l10z7hlu">
	<ownedEnd xmi:id="l10z7hlu" visibility="public" type="l10z7hlj" association="l10z7hln"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10z7hlp" memberEnd="l10z7hlo l10z7hlv">
	<ownedEnd xmi:id="l10z7hlv" visibility="public" type="l10z7hlj" association="l10z7hlp"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hlm" name="_Blank2">
	<ownedAttribute xmi:id="l10z7hlw" name=":owns" visibility="public" type="l10z7hlh" association="l10z7hlx" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hlf" name=":Titanuser">
	<ownedAttribute xmi:id="l10z7hly" name="Shape" visibility="public" type="l10z7hlz" association="l10z7hm0" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="l10z7hm1" name="Shape" visibility="public" type="l10z7hm2" association="l10z7hm3" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="l10z7hm4" general="l10z7hle" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10z7hlx" memberEnd="l10z7hlw l10z7hm5">
	<ownedEnd xmi:id="l10z7hm5" visibility="public" type="l10z7hlf" association="l10z7hlx"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hlz" name="_Blank3">
	<ownedAttribute xmi:id="l10z7hm8" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10z7hm6" name="AND" visibility="public" type="l10z7hm2" association="l10z7hm7" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10z7hm0" memberEnd="l10z7hly l10z7hm9">
	<ownedEnd xmi:id="l10z7hm9" visibility="public" type="l10z7hlz" association="l10z7hm0"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10z7hm3" memberEnd="l10z7hm1 l10z7hma">
	<ownedEnd xmi:id="l10z7hma" visibility="public" type="l10z7hlz" association="l10z7hm3"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10z7hm7" memberEnd="l10z7hm6 l10z7hmb">
	<ownedEnd xmi:id="l10z7hmb" visibility="public" type="l10z7hlz" association="l10z7hm7"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hm2" name="_Blank4">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10z7hmd" name=":owns" visibility="public" type="l10z7hmc" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hlg" name=":Ultrauser">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10z7hme" name="nodeKind" visibility="public" type="l10z7hmc" isUnique="true">
	</ownedAttribute>
	<generalization xmi:id="l10z7hmf" general="l10z7hle" name="AND"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10z7hlh" name=":Product">
	<ownedAttribute xmi:id="l10z7hmg" name=":productId" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="l10z7hmi" name="MinLength 5" constrainedElement="l10z7hmg">
<specification body="MinLength 5" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10z7hmi" xmi:id="l10z7hmj" xmi:type="uml:Comment">
<body>l10z7hmg</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10z7hmk" name="AND MaxLength 10" constrainedElement="l10z7hmg">
<specification body="AND MaxLength 10" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10z7hmk" xmi:id="l10z7hml" xmi:type="uml:Comment">
<body>l10z7hmg</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10z7hld" name="Prefixes">
	<ownedLiteral xmi:id="l10z7hla" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10z7hlb" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10z7hlc" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10z7hlr" name="IRI"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10z7hmc" name="Literal"/>
</uml:Model>`;
    }

    /**
     * Disyunciones
     * @returns {string}
     */
    static getXMI23() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kf0mh" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kf0mm" name=":User">
	<ownedAttribute xmi:id="l10kf0mp" name="Shape" visibility="public" type="l10kf0mq" association="l10kf0mr" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="l10kf0ms" name="Shape" visibility="public" type="l10kf0mt" association="l10kf0mu" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf0mq" name="_Blank1">
	<ownedAttribute xmi:id="l10kf0mx" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kf0mz" name=":owns" visibility="public" type="l10kf0my" isUnique="true">
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kf0mv" name="OR" visibility="public" type="l10kf0mt" association="l10kf0mw" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf0mr" memberEnd="l10kf0mp l10kf0n0">
	<ownedEnd xmi:id="l10kf0n0" visibility="public" type="l10kf0mq" association="l10kf0mr"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf0mu" memberEnd="l10kf0ms l10kf0n1">
	<ownedEnd xmi:id="l10kf0n1" visibility="public" type="l10kf0mq" association="l10kf0mu"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf0mw" memberEnd="l10kf0mv l10kf0n2">
	<ownedEnd xmi:id="l10kf0n2" visibility="public" type="l10kf0mq" association="l10kf0mw"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf0mt" name="_Blank2">
	<ownedAttribute xmi:id="l10kf0n3" name=":owns" visibility="public" type="l10kf0mo" association="l10kf0n4" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf0mn" name=":Titanuser">
	<ownedAttribute xmi:id="l10kf0n5" name="Shape" visibility="public" type="l10kf0n6" association="l10kf0n7" aggregation="composite"></ownedAttribute>
	<ownedAttribute xmi:id="l10kf0n8" name="Shape" visibility="public" type="l10kf0n9" association="l10kf0na" aggregation="composite"></ownedAttribute>
	<generalization xmi:id="l10kf0nb" general="l10kf0mm" name="OR"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf0n4" memberEnd="l10kf0n3 l10kf0nc">
	<ownedEnd xmi:id="l10kf0nc" visibility="public" type="l10kf0mn" association="l10kf0n4"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf0n6" name="_Blank3">
	<ownedAttribute xmi:id="l10kf0nf" name=":titancode" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kf0nd" name="OR" visibility="public" type="l10kf0n9" association="l10kf0ne" ></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf0n7" memberEnd="l10kf0n5 l10kf0ng">
	<ownedEnd xmi:id="l10kf0ng" visibility="public" type="l10kf0n6" association="l10kf0n7"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf0na" memberEnd="l10kf0n8 l10kf0nh">
	<ownedEnd xmi:id="l10kf0nh" visibility="public" type="l10kf0n6" association="l10kf0na"/>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf0ne" memberEnd="l10kf0nd l10kf0ni">
	<ownedEnd xmi:id="l10kf0ni" visibility="public" type="l10kf0n6" association="l10kf0ne"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf0n9" name="_Blank4">
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kf0nk" name=":owns" visibility="public" type="l10kf0nj" isUnique="true">
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf0mo" name=":Product">
	<ownedAttribute xmi:id="l10kf0nm" name=":productId" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kf0nn" />
	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kf0np" name=":productId" visibility="public" type="l10kf0nu" isUnique="true">

		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kf0nq" />	</ownedAttribute>
	<ownedAttribute xmi:type="uml:Property" xmi:id="l10kf0nv" name=":productId" visibility="public" type="l10kf0nu" isUnique="true">

		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kf0nw" />	</ownedAttribute>
</packagedElement>
<ownedRule xmi:id="l10kf0ns" name="MinLength 5" constrainedElement="l10kf0np">
<specification body="MinLength 5" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kf0ns" xmi:id="l10kf0nt" xmi:type="uml:Comment">
<body>l10kf0np</body>
</ownedComment>

</ownedRule>
<ownedRule xmi:id="l10kf0ny" name="MaxLength 10" constrainedElement="l10kf0nv">
<specification body="MaxLength 10" xmi:type="uml:OpaqueExpression"/>
<ownedComment annotatedElement="l10kf0ny" xmi:id="l10kf0nz" xmi:type="uml:Comment">
<body>l10kf0nv</body>
</ownedComment>

</ownedRule>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kf0ml" name="Prefixes">
	<ownedLiteral xmi:id="l10kf0mi" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kf0mj" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kf0mk" name="base &lt;http://example.org/>"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kf0nu" name="Any"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kf0my" name="IRI"/>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="l10kf0nj" name="Literal"/>
</uml:Model>`;
    }
	
	static getXMI24() {
		return `<?xml version="1.0" encoding="UTF-8"?>
<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"
 xmi:id="l10kf83t" name="ShExGeneratedXMI">
<packagedElement xmi:type="uml:Class" xmi:id="l10kf83y" name=":User">
	<ownedAttribute xmi:id="l10kf841" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
	<ownedAttribute xmi:id="l10kf843" name=":birthDate" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Date">
		</type>
		<lowerValue xmi:type="uml:LiteralInteger" xmi:id="l10kf842" />
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf83z" name=":NoUser">
	<generalization xmi:id="l10kf844" general="l10kf83y" name="NOT"/>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf840" name=":NoName">
	<ownedAttribute xmi:id="l10kf845" name="NOT" visibility="public" type="l10kf846" association="l10kf847" aggregation="composite"></ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Class" xmi:id="l10kf846" name="_Blank1">
	<ownedAttribute xmi:id="l10kf848" name=":name" visibility="public" isUnique="false">
		<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String">
		</type>
	</ownedAttribute>
</packagedElement>
<packagedElement xmi:type="uml:Association" xmi:id="l10kf847" memberEnd="l10kf845 l10kf849">
	<ownedEnd xmi:id="l10kf849" visibility="public" type="l10kf846" association="l10kf847"/>
</packagedElement>
<packagedElement xmi:type="uml:Enumeration" xmi:id="l10kf83x" name="Prefixes">
	<ownedLiteral xmi:id="l10kf83u" name="prefix : &lt;https://schema.org/>"/>
	<ownedLiteral xmi:id="l10kf83v" name="prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>"/>
	<ownedLiteral xmi:id="l10kf83w" name="base &lt;http://example.org/>"/>
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
	<ownedAttribute xmi:type="uml:Property" xmi:id=":AdultPerson" name="Extra" visibility="public" type="kz4b0mwo" isUnique="true">
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
<packagedElement xmi:type="uml:Enumeration" xmi:id="kz4b0mwd" name="Enum0">
	<ownedLiteral xmi:id="kz4b0mxe" name=":Male"/>
	<ownedLiteral xmi:id="kz4b0mxf" name=":Female"/>
</packagedElement>
<packagedElement xmi:type="uml:PrimitiveType" xmi:id="kz4b0mwo" name="rdf:type"/>
</uml:Model>`;
	}

}
module.exports = Xmirepository;