'use strict'

var nombre=prompt("mete nombre");
var apellidos=prompt("apellidos");

var texto= `
    <h1>Hola qué tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
    `; //importante las comillas invertidas

document.write(texto);