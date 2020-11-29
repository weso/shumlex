# Shumlex
[![Version Status](https://img.shields.io/badge/version-0.3.1-green.svg)](https://github.com/weso/shumlex)

## Introduction
Welcome to Shumlex. 

Its purpose is to develop a tool which allows an integration between both Shape Expressions and UML, enabling the user to create an UML equivalent to the desired set of Shape Expressions, as well as the opposite. Moreover, it seeks to ease such tasks by contributing some complementary features which allow a integrated display of the data.

Shumlex is available as a [NPM Package](https://www.npmjs.com/package/shumlex) as well as a [GitHub Package](https://github.com/weso/shumlex/packages/436974).

A creation by Mr. Jorge Álvarez Fidalgo for WESO Group.

## Installation

### NPM

#### Install the latest version.
> npm install shumlex

### GPK

You must log in to Github Packages or create a .npmrc file with the authentication info to install it. (See [link](https://docs.github.com/es/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages))

#### Install the latest version.
> npm install @weso/shumlex@0.2.2


## Test

#### You may run the available tests in the installed module:
> npm test

Both ShEx-XMI and XMI-ShEX conversions are tested, including all of the proposed examples in the application, as well as a few addons. Graph generation is tested as well.

## How to use

Once installed, import the package. For instance:

```
const shumlex = require('shumlex')
```

Shumlex provides four different methods, which are shown below.

### ShEx To XMI: _shExToXMI(shexValue)_

This method provides a XMI value (as a String) equivalent to any given ShEx value (as a String parameter).

```
let xmi = shumlex.shExToXMI(shex)
```

In this example, we are passing as a parameter a String variable (_shex_) which contains a ShEx-compliant value and we save the XMI in a String variable named _xmi_.

### XMI To ShEx: _XMIToShEx(xmiValue)_

This method provides a ShEx value (as a String) equivalent to any given XMI value (as a String parameter).

```
let shex = shumlex.XMIToShEx(xmi)
```

In this example, we are passing as a parameter a String variable (_xmi_) which contains a XMI schema and we save the ShEx in a String variable named _shex_.

### ShEx to Cytoscape Graph: _crearGrafo(shexValue):_

This method provides a JSON value which may be used to represent the ShEx value passed as a String parameter in a Cytoscape graph of Dagre layout.

```
 let grf = shumlex.crearGrafo(shex)
 ```

In this example, we are passing as a parameter a String variable (_shex_) which contains a ShEx-compliant value and we save the JSON in a variable named _grf_.

With such JSON value we can easily create a Cytoscape graph, just like this:

```
 let cy = cyto({
    container: document.getElementById('graph'), // Container
    elements: grf,  // JSON created by crearGrafo()
    style: style,
    layout: {
      name: 'dagre',
      nodeSep: 60,
      edgeSep: 40,
      rankSep: 80
    }
```

### XMI to SVG Class Diagram: _crearDiagramaUML(containerId, xmiValue, options)_

This method creates in the given container, using SVG, a UML Class Diagram corresponding to the XMI value passed as a String parameter.

```
shumlex.crearDiagramaUML("displaydiv", xmi)
```

In this example, we are passing as parameters two variables:
* The ID of the container element in our page where we want to display the SVG, as a String value.
* A String variable (_xmi_) which contains the XMI input value.

If an element with such ID exists, and the XMI is correct, the corresponding SVG will be displayed at the given container.

_options_ is an optional parameter, with JSON format, which may be used to configurate the SVG.
```
{
max_height: "500px",   // Max Height of the SVG
max_width: "100vw"     // Max Width of the SVG
}```

## Importing and exporting our XMI in Visual Paradigm

### Import
There are no further complications beyond clicking "Import XMI" and choosing our file with the Shumlex generated XMI, with the default options.

![Import](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/importxmi.PNG)

The UML elements corresponding to our imported XMI will be available at the Model Explorer. They will be automatically located by dropping them on a class diagram.

![Load VP](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/cargarvp.PNG)

### Export
When clicking "Export XMI", select the following options so that it exports in a Shumlex compatible format.

![Export](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/exportxmi.PNG)

