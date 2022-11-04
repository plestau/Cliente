function normal(){
    document.getElementById("oculto").style.opacity = 1;
    document.getElementById("columna").style.width = "100px";
    document.getElementById("caja1").style.border = "1px solid black";
    document.getElementById("caja2").style.border = "1px solid black";
    document.getElementById("caja1").style.backgroundColor = "lightgrey";
    document.getElementById("caja1").style.justifyContent = "space-around";
    document.getElementById("caja2").style.justifyContent = "center";
    document.getElementById("caja2").style.backgroundColor = "yellow";
    document.getElementById("textos").style.backgroundColor = "lightyellow";
}

function minimalista(){
    document.getElementById("oculto").style.opacity = 0;
    document.getElementById("columna").style.width = 0;
    document.getElementById("caja1").style.border = "none";
    document.getElementById("caja2").style.border = "none";
    document.getElementById("caja1").style.backgroundColor = "white";
    document.getElementById("caja1").style.justifyContent = "start";
    document.getElementById("caja2").style.justifyContent = "start";
    document.getElementById("caja2").style.backgroundColor = "white";
    document.getElementById("textos").style.backgroundColor = "white";
}

function minimalista2(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "noexiste.css";
    document.getElementById("oculto").style.display = "none";
}