// la página oculta el contenido de las noticias al cargar
$(document).ready(function(){
    $("p").hide();
});

//cuando hago click en el botón x, se cambia el tamaño de la fuente
$(document).ready(function(){
    $("#btn").click(function(){
        $("p").css("font-size", "15px");
    });
});

$(document).ready(function(){
    $("#btn2").click(function(){
        $("p").css("font-size", "30px");
    });
});

$(document).ready(function(){
    $("#btn3").click(function(){
        $("p").css("font-size", "50px");
    });
});

// cuando hago click en el titulo de la noticia, muestra su contenido
$(document).ready(function(){
    $("h1").click(function(){
        $(this).next().toggle();
    });
});

// cuando pongo el cursor sobre el contenido de la noticia, se cambia el color de fondo
$(document).ready(function(){
    $("p").hover(function(){
        $("p").mouseover(function(){
            $(this).css("background-color", "lightgreen");
        });
    });
});

// cuando quito el cursor sobre el contenido de la noticia, se reinicia el color de fondo
$(document).ready(function(){
    $("p").hover(function(){
        $("p").mouseleave(function(){
            $(this).css("background-color", "white");
        });
    });
});
