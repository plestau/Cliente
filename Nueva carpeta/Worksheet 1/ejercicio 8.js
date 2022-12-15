// la página oculta el contenido de las noticias al cargar
$(document).ready(function(){
    $("p").hide();
});

//cuando hago click en el botón x, se cambia el tamaño de la fuente
$(document).ready(function(){
    $("#btn").click(function(){
        $("p").css("font-size", "15px");
    });
    $("#btn2").click(function(){
        $("p").css("font-size", "30px");
    });
    $("#btn3").click(function(){
        $("p").css("font-size", "50px");
    });
});

// cuando hago click en el titulo de la noticia, muestra su contenido
$(document).ready(function(){
    $("h1").click(function(){
        $(this).next().toggle("slow");
    });
});

// cuando pongo el cursor sobre el contenido de la noticia, se cambia el color de fondo
$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("background-color", "lightgreen");
    }), // cuando quito el cursor, se vuelve al color original (la coma es porque se ejecuta justo después de la anterior)
    $("p").mouseleave(function(){
        $(this).css("background-color", "white");
    });
});

// realmente todo se puede poner dentro de la misma función ready, pero lo he separado para que se vea mejor
