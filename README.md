# Shumlex
[![Version Status](https://img.shields.io/badge/version-0.2.2-green.svg)](https://github.com/weso/shumlex)

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

### In construction

## Importing and exporting our XMI in Visual Paradigm

### Import
There are no further complications beyond clicking "Import XMI" and choosing our file with the Shumlex generated XMI, with the default options.

![Import](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/importxmi.PNG)

The UML elements corresponding to our imported XMI will be available at the Model Explorer. They will be automatically located by dropping them on a class diagram.

![Load VP](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/cargarvp.PNG)

### Export
When clicking "Export XMI", select the following options so that it exports in a Shumlex compatible format.

![Export](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/exportxmi.PNG)

