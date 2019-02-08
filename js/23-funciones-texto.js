'use strict'

//transformacion de textos

var numero=444;
var text1="Bienvenido a curso de JS";
var text2="Buen curso";
/*
var dato=numero.toString(); //se convierte a string
    dato=text1.toUpperCase();//MAYUCUSLAS
    dato=text1.toLowerCase();//minusculas

console.log(dato);

//Calcular longitud

var nombre="";
    nombre=["hoa","hola"];
console.log(nombre.length);//longitud de texto


var totaltext=text1.concat(" ",text2);
console.log(totaltext); 
**/
var busqueda=text1.indexOf("curso");//busqueda de texto, tambien existe lastIndexof y search
console.log(busqueda);

busqueda=text1.match("curso");

var busqueda=text1.substr(14,5);//a partir del caracter 14, 5 caracteres
var busqueda=text1.charAt(22);//quiero un caracter con un indice

var busqueda=text1.startsWith("Bien"); //daria true
busqueda=text1.endsWith("JS");//true
busqueda=text1.includes("de");//en cualquier parte del string


busqueda=text1.replace("JS","SQL");
busqueda=text1.slice(12,22);//recorta desde el caracter 12 al 22

busqueda=text1.split(" ");//crea un array con base en el separador que se ha dicho, en este caso un espacio

busqueda=text1.trim();//quita espacios sobrantes