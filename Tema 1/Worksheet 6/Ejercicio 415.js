let correcto = prompt("Escribe el número ganador");
let respuesta = prompt("Escribe un número");

while (respuesta != correcto){
    respuesta = prompt("Escribe un número");
    if (respuesta < correcto){
        alert("El número correcto es mayor");}
    if (respuesta > correcto){
        alert("El número correcto es menor");}}
alert("Has ganado");
