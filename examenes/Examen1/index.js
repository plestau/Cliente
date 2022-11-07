// Ejercicio 1
function Exa5(cadena) {
    // se crea un objeto vacio
    var letras = {};
    // se recorre la cadena
    for (var i = 0; i < cadena.length; i++) {
        // se crea una variable temporal que almacena el caracter en la posicion actual
        var letra = cadena[i];
        // si la letra no existe en el objeto letras
        if (!letras[letra]) {
            // se agrega la letra con valor +
            letras[letra] = "+";
        } else {
            // si ya existe se incrementa el valor en +
            letras[letra]+="+";
        }
    }
    // se crea una variable que almacena la cadena a mostrar
    var resultado = cadena + " --> ";
    // se recorre el objeto letras
    for (var key in letras) {
        // se concatena al resultado la letra y el valor
        resultado += key + ": " + letras[key] + " ";
    }
    return resultado;
}
document.write(Exa5("hola mundo"));
document.write("</br>");

// Ejercicio 2
function Exa6(array) {
    // se ordena el array de mayor a menor segun la suma de los elementos de cada fila
    array.sort(function(a, b) {
        return b.reduce(function(a, b) {
            return a + b;
        }) - a.reduce(function(a, b) {
            return a + b;
        });
    });
    return array;
}
document.write(Exa6([[1, 3], [4, 2], [2, 1]]));

// Ejercicio 3
const id = document.getElementById("div");
function Exa7(id) {
    id.style.fontSize = "12px";
    id.style.color = "green";
    id.style.backgroundColor = "blue";
    id.style.fontFamily = "Comic Sans";
}

// Ejercicio 4

function Exa8(){
    for (x = 0; x<=4; x++){
        const div = document.getElementById("div"+x);
        const getRandomNumber = (maxNum) => {
            return Math.floor(Math.random() * maxNum);
        };
        function countClicks() {
            var clicks = 0;
            for (x = 0; x<=4; x++){
                div = document.getElementById("div"+x);
                div.onclick = function() {
                    clicks += 1;
                    document.getElementById("clicks").innerHTML = clicks;
                };
            }
        }        
        
        const getRandomColor = () => {
            const h = getRandomNumber(360);
            const s = getRandomNumber(100);
            const l = getRandomNumber(100);
           
            return `hsl(${h}deg, ${s}%, ${l}%)`;
        };
        
        const setBackgroundColor = () => {
            const randomColor = getRandomColor();
            div.style.backgroundColor = randomColor;
            div.style.color = randomColor;
        };
        
        setBackgroundColor();
        countClicks();
    }
}
