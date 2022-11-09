// Ejercicio 1.1
var paginas = document.getElementsByClassName("a").length;
console.log(paginas);
// Ejercicio 1.2
var penultima = document.getElementsByTagName("a")[10];
console.log(penultima);

//Ejercicio 1.3
var links = document.getElementsByTagName("a");
var count = 0;
for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("https://www.google.es/") != -1) {
        count++;
    }
}
console.log(count);

// Ejercicio 1.4
// console.log(document.getElementsByClassName("p"[2].getElementsByClassName("a")));


// Ejercicio 4
function crear() {
    var li = document.createElement("li");
    li.innerHTML = document.getElementById("texto").value;
    document.getElementById("lista").appendChild(li);
    document.getElementById("texto").value = "";
}

// Ejercicio 5
function crearInput() {
    var input = document.createElement("input");
    input.type = "file";
    input.name = "archivo";
    document.getElementById("inputs").appendChild(input);
    document.getElementById("inputs").appendChild(document.createElement("br"));
}

// Ejercicio 6
var imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.png", "img5.jpg"];
var indice = 0;
function siguiente(){
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    document.getElementById("imagen").src = imagenes[indice];
}
function anterior(){
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    document.getElementById("imagen").src = imagenes[indice];
}
