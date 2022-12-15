// con jquery, cambia el color de fondo a rojo a aquellas celdas por encima de la tercera fila
// y a azul a aquellas celdas por debajo de la tercera fila


$(document).ready(function(){
    $("th").css("background-color", "white");
    $("tr:gt(3)").css("background-color", "blue");
    $("tr:lt(3)").css("background-color", "red");
});
