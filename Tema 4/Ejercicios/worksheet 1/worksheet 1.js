function alerta(){
    alert("Funciona");
}

function posicion(){
    $x = event.screenX;
    $y = event.screenY;
    console.log("X: ",$x ," Y: ", $y);
}
  
function dragLeave(event) {
    if ( event.target.className == "droptarget" ) {
        document.getElementById("demo").innerHTML = "Left the dropzone";
        event.target.style.border = "";
        alert("Funciona");
    }
}
  
function allowDrop(event) {
    event.preventDefault();
    
}
  
function drop(event) {
    alert("Funciona");
}
