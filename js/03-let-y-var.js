'use strict'
//Let y var, alcance de variables en diferentes bloques
var numero=40;
if(true){
    var numero=50;
    console.log(numero);
}
console.log(numero);

//Prueba con let
var texto="curso JS";
console.log(texto);//js
if(true){
    let texto="Curso Laravel"
    console.log(texto);//laravel
}
console.log(texto);//js