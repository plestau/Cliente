var miVariable; //Comentario de una linea, para multilineas es */ */

//console.log("El valor de miVariable es= "+miVariable);
miVariable=32;

console.log(`El valor de miVariable es = ${miVariable}`);


miVariable=true;
console.log("El valor de miVariable es = "+miVariable);


// Operaciones con variables
let a = 3;
let b = 5;

let suma = a + b;
let mult = a * b;

console.log("El valor de suma es = "+suma);
console.log("El valor de la multiplicación es = "+mult);

// Variable if
let booleano = false;
if (booleano)
{
    console.log("La variable booleana es True");
    console.log("Fin del 'if'");
}
else{
    console.log("La variable booleana es False");
}

let c = 3;
let d = 5;

if (c===3){
    console.log("La condición es True")
}

// Switches
switch(c){
case 3:
    console.log("c vale 3");
    console.log("Fin del case");
case 5:
    console.log("c vale 5");
default:
    console.log("c no vale ni 3 ni 5");
}

// Uso de bucle for
let i = 3;
for (let i = 10; i >= 0; i--)
{
    
    document.write(i + "<br>")
}

// Listas
let nombres = ["Pepe", "Juan", "Armando", "Jose", "Luis"]
for (let i = 0; i < nombres.length; i++){
    document.write(nombres[i] + "<br>");
}

for (let nombre of nombres)
document.write(nombre + "<br>");


let contador = 0;
while (contador <= 10){
    document.write(contador + "<br>");
    contador++;
}

// Funciones
function suma(a, b, c){
    let resultado = a + b + c;
    document.write(resultado);
}
let numeros = [1, 3, 5];
suma(numeros[0], numeros[1], numeros[2]);

function sumar(a = 0, b = 0, c = 0){
    let resultado = a + b + c;
    document.write(resultado);
}
let numero = [1];
suma(... numero);
