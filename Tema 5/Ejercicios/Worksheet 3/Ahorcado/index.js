window.onload=function(){
    word = "palabra";
    n_vidas = 10;
    var wordArray = word.split("");
    var wordLength = wordArray.length;
    var resultado = document.getElementById("resultado");
    var vidas = document.getElementById("vidas");
    vidas.innerHTML = "Tienes " + n_vidas + " vidas";
    for (x=0; x<wordLength; x++) {
        resultado.innerHTML += " _ ";
    }

    var button = document.querySelectorAll("button");
    for (i=0; i<button.length; i++) {
        button[i].addEventListener("click", function(){
            var letra = this.innerHTML;
            for (y=0; y<wordLength; y++) {
                console.log("Word: " + wordArray[y]);
                console.log("Letra: " + letra);
                if (letra == wordArray[y]) {
                    console.log("funciona");
                    // Aqui no se como hacer que cuando sean iguales el resultado muestre el acierto, pero nada :(
                    resultado.innerHTML = resultado.innerHTML.replace(wordArray[y], letra);
                }
            }
            if (resultado.innerHTML.indexOf(" _ ") == -1) {
                alert("Has ganado!");
            }
            if (resultado.innerHTML.indexOf(letra) == -1) {
                n_vidas--;
                vidas.innerHTML = "Tienes " + n_vidas + " vidas";
            }
            if (n_vidas == 0) {
                alert("Has perdido!");
            }
        });
    }  
}
