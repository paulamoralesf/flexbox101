'use strict'

function listadoFrutas(f1,f2,...RestoFrutas){//REST
    console.log("fruta 1: ",f1);
    console.log("fruta 2: ",f2);
    console.log(RestoFrutas);

}
listadoFrutas("Manzana", "Naranja","Pera","Fresa", "Melon"); 

var frutas=["Naranja","Manzana"];
listadoFrutas(...frutas,"Pera","Fresa", "Melon");//SPREAD