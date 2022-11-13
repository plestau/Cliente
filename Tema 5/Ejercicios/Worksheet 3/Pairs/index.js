var cartas = document.getElementById("contenedor2");
var arrayResultado = [];
var contador = 0;var text = document.getElementById("texto");
var segundos = 00;
var decimas = 00;
var apenDecimas = document.getElementById("decimas");
var apendSegundos = document.getElementById("segundos");
var Interval;
var imagenes = ['mario', 'luigi', 'waluigi', 'wario', 'bowser'];
var clon = imagenes.slice(0);
var carta = imagenes.concat(clon);

function barajar(o){
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
    
barajar(carta);

for (var i = 0; i < carta.length; i++){
    card = document.createElement("div");
    card.dataset.item = carta[i];
    card.dataset.view = "carta";
    cartas.appendChild(card);
    card.onclick = function () {
        if (this.className != "volteada" && this.className != "correcto"){
            this.className = "volteada";
            var resultado = this.dataset.item;
            arrayResultado.push(resultado);
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        }
        if(arrayResultado.length > 1){
            if(arrayResultado[0] === arrayResultado[1]){
                check("correcto");
                contador++;
                ganar();
                arrayResultado = [];
            }
            else{
                check("vuelta");
                arrayResultado = [];
            }
        }
    }
}

var check = function(className){
    var x = document.getElementsByClassName("volteada");
    setTimeout(function(){
        for(var i = (x.length - 1); i >= 0; i--){
            x[i].className = className;
        }
    },500);
}

var ganar = function(){
    if(contador === 5){
        clearInterval(Interval);
        text.innerHTML = "Has tardado ", segundos, " segundos y ", decimas, " decimas";
    }
}

function startTimer(){
    decimas++;
    if(decimas < 9){
        apenDecimas.innerHTML = "0" + decimas;
    }
    if(decimas > 9){
        apenDecimas.innerHTML = decimas;
    }
    if(decimas > 99){
        segundos++;
        apendSegundos.innerHTML = "0" + segundos;
        decimas = 0;
        apenDecimas.innerHTML = "0" + 0;
    }
    if(segundos > 9){
        apendSegundos.innerHTML = segundos;
    }
}
