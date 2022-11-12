window.onload=function(){
    word = "Palabra";
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
                if (wordArray[y] == letra) {
                    resultado.innerHTML = resultado.innerHTML.replaceAt(y*2, letra);
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
