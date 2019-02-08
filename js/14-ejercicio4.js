'use strict'

var numero1=parseInt(prompt("Introduce primer númoero"),0);

var numero2=parseInt(prompt("Introduce segundo númoero"),0);
while(numero1<numero2){
    if(numero1%2==1){
        document.write(numero1);
    }
    numero1++;
}