var numero1=parseInt(prompt("Introduce el primer nuúmero",0));
var numero2=parseInt(prompt("Introduce el segundo nuúmero",0));

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
    numero1=parseInt(prompt("Introduce el primer nuúmero",0));
    numero2=parseInt(prompt("Introduce el segundo nuúmero",0));
}
if(numero1==numero2){
    alert("son iguales");
} else if(numero1>numero2){
    alert("no son iguales");
}else{
    alert("introduzca números");
}