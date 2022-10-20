// Ejercicio 2
document.write("<h1>Ejercicio 2</h1>");

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function lanzamiento(){
    resultado = random(1, 6);
    document.write("Resultado del dado: " + resultado + "</br>");
}

lanzamiento();

// Ejercicio 3
document.write("<h1>Ejercicio 3</h1>");

let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;

for (let tiradas = 0; tiradas <= 6000; tiradas++){
    if (resultado == 1){
        contador1++;
    }
    else if (resultado == 2){
        contador2++;
    }
    else if (resultado == 3){
        contador3++
    }
    else if (resultado == 4){
        contador4++
    }
    else if (resultado == 5){
        contador5++
    }
    else if (resultado == 6){
        contador6++
    }
    lanzamiento();
}

document.write("</br>");
document.write("Numero de 1's: " + contador1 + "</br>");
document.write("Numero de 2's: " + contador2 + "</br>");
document.write("Numero de 3's: " + contador3 + "</br>");
document.write("Numero de 4's: " + contador4 + "</br>");
document.write("Numero de 5's: " + contador5 + "</br>");
document.write("Numero de 6's: " + contador6 + "</br>");

// Ejercicio 6
document.write("<h1>Ejercicio 6</h1>");
// función recursiva que calcula la potencia de
// un entero
function potencia(base, exponente){
    if(exponente == 0){
        return 1;
    }
    else{
        return base * potencia(base, exponente - 1);
    }
}
var base = 3;
var exponente = 4;
  
document.write(base + " elevado a " + exponente + " = " + potencia(base, exponente));

// Ejercicio 7
document.write("<h1>Ejercicio 7</h1>");

const dato = prompt("Escribe el número que factorizaremos"); // Número del que queremos calcular el factorial
let r = 1;
for(let i = dato; i>0; i--){
    r *= i;
}
document.write(r);