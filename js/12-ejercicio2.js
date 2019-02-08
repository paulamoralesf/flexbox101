'use strict'

var suma=0;
var contador=0;

do{
    var numero=parseInt(prompt("Introduce números hasta uno negativo",0));
    if(isNaN(numero)){
        numero=0;
    }else if(numero>=0){
        suma+=numero;
        contador++;
        //suma=suma+numero;
    }
}while(numero>=0)
alert("suma es: "+suma);
alert("promedio es: "+suma/contador);