// Ejercicio 1
function sum(num1, num2){
    return num1 + num2
}

sum(40,2);
sum(42,0);
console.log("the answer to everything is", sum(42,0));

suma = (num1, num2) => {return num1+num2}

// Ejercicio 2
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld);

stringLength = str => console.log(`the length of "${str}" is:`, str.length);

// Ejercicio 3
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly");

stringLength = str => {let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length}