# STW-6
ExpressJS: Aplicación cliente servidor / Modificar la práctica anterior STW-5 de la temperatura con objetos y herencia (sin web workers) para que sea una aplicación ExpressJS. La tarea de conversión se ejecuta en el servidor. No hace falta que haga pruebas.

## HTTP
https://github.com/SYTW/miriada-upm-dsnh5jsnode/#m%C3%B3dulo-iv-http

## Transparencias de "HTTP" (Módulo IV) Archivo
https://campusvirtual.ull.es/1516/mod/resource/view.php?id=101216

## Repositorio de Introducción a Express
https://github.com/SYTW/hello-express

## Commands & Utilities
#### express generator instalation

    $ npm install express-generator

  For global installation use the -g option

    $ npm install express-generator -g

  For a specific version installation, in the previous case the latest version is installed.

    $ npm install express-generator@4.9.0

#### Express basic structure generation

    $ node_modules/express-generator/bin/express

  For global installation (-g)

    $ express --ejs converter

#### install dependencies:

    $ cd converter
    $ npm install

#### run the app:

    $ SET DEBUG=converter:*
    $ npm start

## Layout & partial

### Install the package express-partials
#### For last version

   $ npm install --save express-partials

#### For this proyect version

    $ npm install --save express-partials@0.3.0

### Import/install MW	express-partials in app.js
#### add lines in app.js

 `var partials = require('express-partials');`

 `app.use(partials());`

### add	template layout (views/layout.ejs)
  `<header>`
  `<nav>`
  `<section> here set body changes for each view`
  `<footer>`

 - note : The view layout.ejs has common code as template, only the body code.
in <section > which will be changed for each view, the others views have only
their own code of body.
