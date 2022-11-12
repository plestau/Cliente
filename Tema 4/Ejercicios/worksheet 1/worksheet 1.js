window.onclick = function(event) {
    document.getElementById("ejercicio1").innerHTML= "Sabemos que has hecho click en la pagina";
}

window.onmouseover = function(event) {
    $x = event.screenX;
    $y = event.screenY;
    document.getElementById("coords").innerHTML = "X coords: " + $x + ", Y coords: " + $y;
}

tiempo = 0;
window.onload = function(event) {
    tiempo++;
    document.getElementById("tiempo").innerHTML = "La pagina ha sido cargada en "+tiempo +" sec.";
}

function tpcanvas() {
    location.href = "canvas/canvas.html";
}
  
function dragLeave(event) {
    if ( event.target.className == "droptarget" ) {
        document.getElementById("demo").innerHTML = "Left the dropzone";
        event.target.style.border = "";
        alert("Has arrastrado la");
    }
}

function allowDrop(event) {
    event.preventDefault();
    
}
  
function drop(event) {
    alert("Funciona");
}
