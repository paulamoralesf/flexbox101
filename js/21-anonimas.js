'use strict'

//ANONIMAS: SIN NOMBRE

var pelicula=function(nombre){
    return "La pelicula es: "+nombre; //LA FUNCION EN ESTE MOMENTO SE LLAMA PELICULA 
}
function sumame(x1,x2,showsum,sum2){
    var sum=x1+x2;
    showsum(sum);
    sum2(sum);
    return sum;
}
sumame(5,6,function(dato){
    console.log("La suma es: ",dato);
},
function(dato){
    console.log("La suma por dos es: "+(dato*2));
});//CALLBACK
//ASÍ TAMBIÉN
/*sumame(5,6,dato =>{
    console.log("La suma es: ",dato);
},
dato=>{
    console.log("La suma por dos es: "+(dato*2));
});//CALLBACK*/