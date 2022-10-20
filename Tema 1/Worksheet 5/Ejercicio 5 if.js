exam1 = parseInt(prompt("Introduce la nota del examen 1"));
exam2 = parseInt(prompt("Introduce la nota del examen 2"));
work1 = parseInt(prompt("Introduce la nota del trabajo 1"));
work2 = parseInt(prompt("Introduce la nota del trabajo 2"));

let mediaexam = (exam1 + exam2) / 2;
let mediawork = (work1 + work2) / 2;

if ((mediaexam * 75 / 100) + (mediawork * 25 / 100) > 5){
    alert("Has aprobado");
}
if ((mediaexam * 75 / 100) + (mediawork * 25 / 100) < 5){
    alert("Has suspendido");
}
if (exam1 > 4.5 && exam2 > 4.5 && work1 > 4.5 && work2 > 4.5){
    alert("Todas las notas son mejores de 4.5")
}
