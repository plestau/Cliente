let correcto = prompt("Escribe el número ganador");

do {
    respuesta = prompt("Escribe un número")
    if (respuesta < correcto){
        alert("El número correcto es mayor");}
    if (respuesta > correcto){
        alert("El número correcto es menor");}
}while (respuesta != correcto);
alert("Has ganado");
