// funcion que crea cookies preguntandole al usuario su nombre que caducan en 5 minutos
function createCookie() {
    var name = prompt("Introduce tu nombre");
    var date = new Date();
    date.setTime(date.getTime() + (5 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = "nombre=" + name + ";" + expires + ";path=/";
    document.write("<p id='texto'>Hola, ", name, "</p></br>");
}
  
// funcion que lee las cookies y las muestra
function readCookie(cname) {
    var name = "nombre=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            document.write("<p id='texto'>Hola de nuevo, ", c.substring(name.length, c.length), "</p></br>");
        }
    }
}

// funcion que borra las cookies
function deleteCookies() {
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkCookie(cname) {
    var name = "nombre=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}

if (checkCookie("Nombre") === false){
    createCookie();
} else {
    readCookie("Nombre");
}

// funcion que cambia el color de fondo del body
function changeColor() {
    var color = prompt("Introduce el color de fondo (en inglés)");
    document.body.style.backgroundColor = color;
}

function subirTamaño() {
      var text = document.getElementById("texto");
      var size = parseInt(window.getComputedStyle(text).fontSize);
      text.style.fontSize = (size + 2) + "px";
}

function bajarTamaño(){
      var text = document.getElementById("texto");
      var size = parseInt(window.getComputedStyle(text).fontSize);
      text.style.fontSize = (size - 2) + "px";
}

// En respuesta a la pregunta 3, simplemente, no poniendo expire

// Ejercicio 4, funciones genéricas
function createCookies(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function readCookies(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteAllCookies() {
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
