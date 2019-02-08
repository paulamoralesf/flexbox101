'use strict'
function porConsola(x,y){
    console.log("Suma: "+(x+y));
        console.log("Resta: "+(x-y));
        console.log("Mult: "+(x*y));
        console.log("División: "+(x/y));

}
function porPantalla(x,y){
    document.write("Suma: "+(x+y));
}

function calculadora(x,y,mostrar=false){
    if(mostrar==false){
        porConsola(x,y);
    }else{
        porPantalla(x,y);
    }


}
/*
for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,m);

}*/
calculadora(2,3);
calculadora(2,5,true);