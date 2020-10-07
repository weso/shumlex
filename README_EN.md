# Shumlex
[![Build Status](https://travis-ci.org/jorgealvarezfidalgo/Shumlex.svg?branch=master)](https://travis-ci.org/jorgealvarezfidalgo/Shumlex)
[![Coverage Status](https://coveralls.io/repos/github/jorgealvarezfidalgo/Shumlex/badge.svg?branch=master)](https://coveralls.io/github/jorgealvarezfidalgo/Shumlex?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f7a79a92342844138f7fa6f8095f12a7)](https://app.codacy.com/manual/jorgealvarezfidalgo/Shumlex?utm_source=github.com&utm_medium=referral&utm_content=jorgealvarezfidalgo/Shumlex&utm_campaign=Badge_Grade_Dashboard)
[![Version Status](https://img.shields.io/badge/version-1.0.4-green.svg)](https://jorgealvarezfidalgo.github.io/Shumlex/)

## Introduction
Welcome to Shumlex. 
https://jorgealvarezfidalgo.github.io/Shumlex

Its purpose is to develop a tool which allows an integration between both Shape Expressions and UML, enabling the user to create an UML equivalent to the desired set of Shape Expressions, as well as the opposite. Moreover, it seeks to ease such tasks by contributing some complementary features which allow a integrated display of the data.

A creation by Mr. Jorge Álvarez Fidalgo.

## Installation

If your only wish is to try this app, there is no need for an installation. You may either access this app [at GitHub Pages](https://jorgealvarezfidalgo.github.io/Shumlex), or clone this repo if you'd rather work locally.
> git clone https://github.com/jorgealvarezfidalgo/Shumlex.git

_Browserify_ is used in order to solve dependencies in the main.js script. This enables us, without any need to perform ulterior tasks, to have available its whole functionality just by cloning: you just need to access any of the HTML with a browser.

Furthermore, if you'd like to change its code or recompile for whichever reasons, it is only required to:

* Install node_modules, in case it's not been done yet.
> npm install

* Compile with browserify.
> npm run-script build

## Test

You may run the available tests:
> npm test

Both ShEx-XMI and XMI-ShEX conversions are tested, including all of the proposed examples in the application, as well as a few addons. Graph generation is tested as well.

## How to use

This app consists of the following sections, which you may access through the navbar:

![Navbar](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/navbarEN.PNG)

### ShEx to XMI
There are two editors, ShEx and XMI, respectively. Each editor offers the following options in its taskbar:
* Delete its content.
* Swap editors. In this example, it would relocate us to the XMI to ShEx window.
* Graphical representation. Graph and UML, respectively.
* Download. It downloads a file with the related editor's content.

_Generate XMI_ sets the obtained XMI as the right editor's value, input ShEx as its source.

![ShEx to XMI](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/shexxmiEN.PNG)

### XMI to ShEx
Just like the previous one, although in reverse.
_Generate ShEx_ sets the obtained ShEx as the right editor's value, input XMI as its source.

![XMI to ShEx](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/xmishexEN.PNG)

### Graph generation
Available at the navbar (empty) or at _Graph_ at ShEx editor (carries its content).
It offers a ShEx editor.
_Generate graph_ represents such editor's content as a graph by means of Cytoscape. In order to achieve that, we parse the ShEx and generate the corresponding graph in Cytoscape notation.

![Graph generation](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/grafo1EN.PNG)

It incorporates a movement and zoom functionality. Double arrow button restitutes the original size.

![Graph zoom](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/grafo2.PNG)

Moreover, nodes' motion by the user is enabled. 

![Move nodes](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/grafo3.PNG)

### UML generation
Available at the navbar (empty) or at _UML_ at XMI editor (carries its content).
It offers a XMI editor.
_Generate UML_ represents such editor's content as a graph by means of PlantUML. In order to achieve that, we parse the XMI and generate the corresponding UML in PlantUML notation.

![UML generation](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/umlEN.PNG)

### Load examples
A series of examples to load are available, so that the user may swiftly check the possibilities at hand. Choosing any of them will take us to the ShEx to XMI window, loading said example at ShEx editor.

![Load examples](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/EjemplosEN.PNG)

### Settings.
Pretty basic for now. Editors' theme may be changed.

![Settings](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/conf1EN.PNG)
![Settings: Light theme](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/conf2EN.PNG)

### Language
Shumlex is available not only in the distinguished language of Cervantes, but in Shakespeare's as well.

![Language](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/idioma.PNG)

## Importing and exporting our XMI in Visual Paradigm

### Import
There are no further complications beyond clicking "Import XMI" and choosing our file with the Shumlex generated XMI, with the default options.

![Import](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/importxmi.PNG)

The UML elements corresponding to our imported XMI will be available at the Model Explorer. They will be automatically located by dropping them on a class diagram.

![Load VP](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/cargarvp.PNG)

### Export
When clicking "Export XMI", select the following options so that it exports in a Shumlex compatible format.

![Export](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/exportxmi.PNG)

