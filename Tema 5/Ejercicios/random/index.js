function contarClick(){
    let contador1 = 0;
    let contador2 = 0;
    let imagen1 = document.getElementById("gato1");
    let imagen2 = document.getElementById("gato2");
    imagen1.onclick = () => {
        contador1++;
        document.getElementById("contador1").innerHTML = "Misifú: " +contador1;
        localStorage.setItem("Misifú", contador1);
    }
    imagen2.onclick = () => {
        contador2++;
        document.getElementById("contador2").innerHTML = "Wilfredo: " +contador2;
        localStorage.setItem("Wilfredo", contador2);
    }
}

window.onload = () => {
    document.getElementById("contador1").innerHTML = "Misifú tenía " + localStorage.getItem("Misifú");
    document.getElementById("contador2").innerHTML = "Wilfredo tenía " + localStorage.getItem("Wilfredo");
    contarClick();
}
