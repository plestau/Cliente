if(localStorage.getItem("task") == null){
    var todoList = [];
    var tareaspendientes = 0;
    var tareascompletadas = 0;
}else{
    var todoList = JSON.parse(localStorage.getItem("task"));
    var tareaspendientes = todoList.length;
    var tareascompletadas = 0;
}

// si pulsamos el boton con id borrar, borra las tareas que estén marcadas como completadas y las elimina del localstorage
$("#borrar").click(function(){
    for(var i = 0; i < todoList.length; i++){
        if(todoList[i].completada == true){
            todoList.splice(i, 1);
            i--;
        }
    }
    localStorage.setItem("task", JSON.stringify(todoList));
    location.reload();
});


// si pulsas enter, se añade la tarea
$(document).ready(function() {
    $("#nueva").keypress(function(e) {
        if (e.which == 13) {
            creaTarjetas();
        }
    });
});

// si existe localstorage task, se carga en la lista al cargar la página
$(document).ready(function() {
    var task = JSON.parse(localStorage.getItem("task"));
    if (task != null) {
        for (var i = 0; i < task.length; i++) {
            // crea una tarjeta por cada tarea
            $("#contenido").append("<form");
            $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox'><p id='name'>" + task[i] + "</p></li>");
            $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
            $("#tarjeta").append("</form");
        }
        // comprueba cuantas tareas están completadas
        $("#checkbox").each(function() {
            if ($(this).is(":checked")) {
                tareascompletadas++;
            }
        }
        );
        // muestra el contador de tareas pendientes
        $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
    }
});

function creaTarjetas(){
    //coge los datos del input y los guarda en la variable task
    var task = $("#nueva").val();
    //si el input está vacío, no hace nada
    if (task == "") {
        return false;
    }
    //si el input no está vacío, añade la tarea a la lista
    else {
        //añade la tarea al array todoList
        todoList.push(task);
        //añade la tarea al localstorage
        localStorage.setItem("task", JSON.stringify(todoList));
        //añade la tarea al div contenido
            $("#contenido").append("<form");
            $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox'><p id='name'>" + task + "</p></li>");
            $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
            $("#tarjeta").append("</form");
        //añade 1 a tareaspendientes
        tareaspendientes++;
        //añade 1 a tareaspendientes en el contador
        $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
        //borra el input
        $("#nueva").val("");
    }
}

// si se pulsa el input checkbox, se añade 1 a tareascompletadas
$(document).on("click", "#checkbox", function() {
    // si el checkbox está marcado
    if ($(this).is(":checked")) {
    tareascompletadas++;
    //añade 1 a tareascompletadas en el contador
    $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
    // guarda el estado del checkbox en el localstorage para cada tarjeta
    var task = JSON.parse(localStorage.getItem("task"));
    var index = $(this).parent().index();
    task[index].completada = true;
    localStorage.setItem("task", JSON.stringify(task));
    }
    // si el checkbox no está marcado
    if (!$(this).is(":checked")) {
    tareascompletadas--;
    //resta 1 a tareascompletadas en el contador
    $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
    }
});

// si se pulsa el input low, se guarda la prioridad en el localstorage y se cambia el color de la tarjeta
$(document).on("click", "#low", function() {
    var task = $(this).parent().parent().find("#name").text();
    localStorage.setItem(task, "low");
    $(this).parent().parent().css("background-color", "#00FF00");
});


// si se pulsa el input medium, se guarda la prioridad en el localstorage y se cambia el color de la tarjeta
$(document).on("click", "#medium", function() {
    var task = $(this).parent().parent().find("#name").text();
    localStorage.setItem(task, "medium");
    $(this).parent().parent().css("background-color", "#FFFF00");
});


// si se pulsa el input up, se cambia el color de la tarjeta a rojo
$(document).on("click", "#up", function() {
    var task = $(this).parent().parent().find("#name").text();
    localStorage.setItem(task, "up");
    $(this).closest("li").css("background-color", "red");
});
