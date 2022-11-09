window.onload=function(){

    word = "Palabra";
    var wordArray = word.split("");
    var wordLength = wordArray.length;
    var resultado = document.getElementById("resultado");
    for (x=0; x<wordLength; x++) {
        resultado.innerHTML += " _ ";
    }

    var button = document.getElementsByTagName("button");
    for (i=0; i<button.length; i++) {
        console.log(button[i]);
        button[i].onclick = function() {
            var letter = button.innerHTML;
            var letterArray = letter.split("");
            var letterLength = letterArray.length;
            for (y=0; y<letterLength; y++) {
                if (letterArray[y] == wordArray[y]) {
                    resultado.innerHTML = letterArray[y];
                }
            }
        }
    }

}
