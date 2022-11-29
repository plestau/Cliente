// Elimina el primer elemento de la lista al clicar con jquery

$(document).ready(function(){
    $("li:first").click(function(){
        $("li:first").remove();
    });
});
