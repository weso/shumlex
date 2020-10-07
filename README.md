# Shumlex
[![Build Status](https://travis-ci.org/jorgealvarezfidalgo/Shumlex.svg?branch=master)](https://travis-ci.org/jorgealvarezfidalgo/Shumlex)
[![Coverage Status](https://coveralls.io/repos/github/jorgealvarezfidalgo/Shumlex/badge.svg?branch=master)](https://coveralls.io/github/jorgealvarezfidalgo/Shumlex?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f7a79a92342844138f7fa6f8095f12a7)](https://app.codacy.com/manual/jorgealvarezfidalgo/Shumlex?utm_source=github.com&utm_medium=referral&utm_content=jorgealvarezfidalgo/Shumlex&utm_campaign=Badge_Grade_Dashboard)
[![Version Status](https://img.shields.io/badge/version-1.0.4-green.svg)](https://jorgealvarezfidalgo.github.io/Shumlex/)

## Introducción
Bienvenidos al Proyecto Shumlex. 
https://jorgealvarezfidalgo.github.io/Shumlex

El objeto del mismo consiste en elaborar una herramienta que permita llevar a cabo una integración entre las Shape Expressions y UML, otorgando al usuario la capacidad de generar el equivalente en UML del conjunto deseado de ShEx, o viceversa; aportando asimismo características que permitan la visualización in situ de los datos trabajados.

Obra de D. Jorge Álvarez Fidalgo.

## English ver.

Given the sudden surge in visits that has blessed this humble repository, a need has arisen to increase its usability by any foreign visitors, which I presume are the vast majority and may not speak the language of Cervantes.

This is a Spanish project intended to be defended before a Spanish University. Hence, Spanish shall be kept as the main language of this project, not only because of the academic requirements, i might add. Since it is my conviction that it is my responsibility to contribute to the conservation and further development of our language.

Nonetheless, there is no harm in enabling alternatives. Therefore, [there is an English version of this README available.](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/README_EN.md)

## Instalación

Si usted sólo desea probar la aplicación, la instalación no es necesaria. Puede acceder a ella  [en GitHub Pages](https://jorgealvarezfidalgo.github.io/Shumlex), o bien clonar el repositorio si desea probar localmente.
> git clone https://github.com/jorgealvarezfidalgo/Shumlex.git

Se emplea _Browserify_ para resolver las dependencias en el script main.js. Gracias a lo cual, sin necesidad de realizar labores ulteriores, al clonar ya se dispone de la funcionalidad completa: accediendo navegador mediante a cualquiera de los HTML.

Si, por otra parte, desea realizar cambios al código o recompilar por cualesquiera otros motivos, sólo requiere:

* Instalar node_modules, si aún no se ha llevado a cabo.
> npm install

* Compilar mediante browserify.
> npm run-script build

## Test

Puede realizar las pruebas del sistema mediante:
> npm test

Se prueban sendas transformaciones ShEx a XMI y viceversa, tomando como base los ejemplos propuestos en la aplicación y algún añadido más. Se prueban también las generaciones de grafo a partir de dichos ejemplos.

## Uso

La aplicación web consta de las siguientes secciones, a las cuales se accede mediante la barra de navegación:

![Barra de navegación](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/navbar.PNG)

### ShEx a XMI
Consiste de dos editores, de ShEx y XMI, respectivamente. Cada editor dispone de las siguientes opciones en la barra de tareas:
* Borrar el contenido.
* Intercambiar los editores. En este caso, nos llevaría a la ventana XMI a ShEx.
* Representación gráfica. Grafo y UML, respectivamente.
* Descargar. Descarga un archivo con el contenido del editor.

El botón Generar XMI establece el XMI obtenido como valor del editor derecho, a partir del ShEx introducido.


![ShEx a XMI](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/shexxmi.PNG)

### XMI a ShEx
Igual que el anterior, en inverso. 
El botón Generar ShEx establece el ShEx obtenido como valor del editor derecho, a partir del XMI introducido.


![XMI a ShEx](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/xmishex.PNG)

### Generación de grafo
Accesible desde la barra de navegación (sin contenido) o desde _Grafo_ en el editor de ShEx (traslada el contenido).
Dispone de un editor de ShEx y un elemento Cytoscape.
El botón "Generar grafo" representa el contenido del editor como un grafo mediante la herramienta Cytoscape. Para ello, parseamos las Shape Expressions y generamos el grafo pertinente en la notación de Cytoscape.

![Generar Grafo](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/grafo1.PNG)

Se incluye una funcionalidad de movimiento y zoom. El botón de doble flecha permite restituir el grafo a su tamaño original.

![Zoom del grafo](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/grafo2.PNG)

Asimismo, se permite el movimiento de los nodos a gusto del usuario, de cara a modificar la presentación del grafo.

![Modificar grafo](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/grafo3.PNG)

### Generación de UML
Accesible desde la barra de navegación (sin contenido) o desde _UML_ en el editor de XMI (traslada el contenido).
Dispone de un editor de XMI.
El botón "Generar UML" representa el contenido del editor como UML mediante la herramienta PlantUML. Para ello, parseamos el XMI y generamos el UML pertinente en la notación de PlantUML, el cual codificamos y enviamos a la API de PlantUML para obtener la imagen.

![Generar UML](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/uml.PNG)

### Cargar ejemplos
Se ofrece una serie de ejemplos ShEx a cargar en el sistema para una rápida comprobación de las posibilidades que ofrece la aplicación. Seleccionar cualquiera de ellos nos lleva a la ventana ShEx a XMI, cargando en el editor de ShEx el ejemplo correspondiente.

![Cargar ejemplos](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/Ejemplos.PNG)

### Configuración.
Muy básica por el momento. Permite cambiar el tema de los editores.

![Configuración](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/conf1.PNG)
![Configuración: Tema Claro](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/conf2.PNG)

### Idioma
La aplicación web se ofrece, además de en la insigne lengua de Cervantes, en inglés.

![Idioma](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/idioma.PNG)

## Importar y exportar nuestro XMI en Visual Paradigm

### Importar
No requiere mayor complicación que escoger la opción de importación XMI y seleccionar nuestro archivo con el XMI que Shumlex ha generado, dejando las opciones por defecto.

![Importar](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/importxmi.PNG)

En la pestaña de Exploración del Modelo (Model Explorer) aparecerán los elementos UML de nuestro XMI importado. Al arrastrarlos a un diagrama, se situarán automáticamente.

![Cargar VP](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/cargarvp.PNG)

### Exportar
En la opción "Exportar XMI", seleccionar las siguientes opciones para que el formato sea reconocible por Shumlex.

![Export](https://github.com/jorgealvarezfidalgo/Shumlex/blob/master/docs/img/exportxmi.PNG)