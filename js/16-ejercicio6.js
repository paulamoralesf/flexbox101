'use strict'
var numero1=parseInt(prompt("Introduzca primer nummero",0));

while(numero1<0 || isNaN(numero1)){
    numero1=parseInt(prompt("Introduzca primer nummero",0));
}
if(numero1%2==0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}
