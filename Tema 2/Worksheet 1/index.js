// Ejercicio 1
let fecha = new Date();

document.write(fecha.getYear() + "</br>");
document.write(fecha.getMonth() + "</br>");
document.write(fecha.getDay() + "</br>");
document.write(fecha.getHours() + "</br>");
document.write(fecha.getMinutes() + "</br>");
document.write(fecha.getSeconds() + "</br>");

// Ejercicio 2
let fechaHoy = new Date();

fechaHoy.setYear(2022);
fechaHoy.setMonth(9);
fechaHoy.setDate(27);
document.write(fechaHoy + "</br>") ;

let fecha85 = new Date();
fecha85.setDate(fechaHoy.getDay() + 85);
document.write(fecha85 + "</br>");

let fecha187 = new Date();
fecha187.setDate(fechaHoy.getDay() - 187);
document.write(fecha187 + "</br>");

let fecharesto = fecha85 - fecha187;
document.write(fecharesto);

// Ejercicio 3
function temporizador(){
    time = new Date();
    document.write(time.getSeconds()+ "</br>");
    if (time.getSeconds() <= 0)
        clearInterval(interval);
}

var interval = setInterval(time, 1000);

// Ejercicio 5
let reloj = new Date();

function relojero(){
    document.open();
    reloj = new Date();
    document.write(fecha.getHours()+":");
    document.write(fecha.getHours()+":");
    document.write(fecha.getHours()+":");
    if (fecha.getSeconds() === 0){
        clearInterval(intervalo);
    }
}

var intervalo = setinterval(reloj, 1000);