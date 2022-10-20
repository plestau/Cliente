number = parseInt(prompt("Introduce un número"));

if (number > 100){
    let numero = number * 15 / 100;
    let total = number - numero;
    alert(total);
}
