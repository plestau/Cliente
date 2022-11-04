function subirTamaño() {
    for(n=1; n<=4; n++) {
        var text = document.getElementById("texto"+n);
        var size = parseInt(window.getComputedStyle(text).fontSize);
        text.style.fontSize = (size + 2) + "px";
    }
}

function bajarTamaño(){
    for(n=1; n<=4; n++){
        var text = document.getElementById("texto"+n);
        var size = parseInt(window.getComputedStyle(text).fontSize);
        text.style.fontSize = (size - 2) + "px";
    }
}

function resetTamaño(){
    for(n=1; n<=4; n++){
    var text = document.getElementById("texto"+n);
    text.style.fontSize = "16px";
    }
}

function justificar(){
    for(n=1; n<=4; n++){
        var text = document.getElementById("texto"+n);
        text.style.textAlign = "justify";
    }
}

function izquierda(){
    for(n=1; n<=4; n++){
        var text = document.getElementById("texto"+n);
        text.style.textAlign = "left";
    }
}

function derecha(){
    for(n=1; n<=4; n++){
        var text = document.getElementById("texto"+n);
        text.style.textAlign = "right";
    }
}