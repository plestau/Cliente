if(localStorage.getItem("task") == "[]" || localStorage.getItem("task") == null){
    var todoList = [];
    var tareaspendientes = 0;
    var tareascompletadas = 0;
    completadas = [];
}else{
    var todoList = JSON.parse(localStorage.getItem("task"));
    var tareaspendientes = todoList.length;
    var tareascompletadas = 0;
    completadas = [];
}

function creaTarjetas(){
    //coge los datos del input y los guarda en la variable task
    var task = $("#nueva").val();
    //si el input está vacío, no hace nada
    if (task == "") {
        return false;
    }
    //si el input no está vacío, añade la tarea a la lista
    else {
        //guarda la hora a la que se crea la tarea
        var fecha = new Date();
        var dia = fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
        var hora = fecha.getHours() + ":" + fecha.getMinutes();
        // si ya existe una tarea con el mismo nombre salta un alert
        for (var i = 0; i < todoList.length; i++) {
            if (todoList[i]["Tarea"] == task) {
                alert("Ya existe una tarea con ese nombre");
                location.reload();
                return false;
            }
        }
        // guarda la tarea con la fecha, el dia y la prioridad en el localstorage
        todoList.push({
            "Tarea": task,
            "dia": dia,
            "hora": hora,
            "prioridad": "Sin determinar",
            "completada": false
        });
        localStorage.setItem("task", JSON.stringify(todoList));
            $("#contenido").append("<form");
            $("#contenido").append("<li id='tarjeta'><input id='radio' type='radio'><p id='name'>" + task + "</p></li>");
            $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
            $("#tarjeta:last-child").append("<div id='time'> Añadido el " + dia + " a las " + hora + "</div>");
            $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='borrar.png'></div>");
            $("#tarjeta").append("</form");
        tareaspendientes++;
        $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
        $("#nueva").val("");
    }
}

function ordenar(){
    // ordena las tarjetas por prioridad, de mayor a menor
    var task = JSON.parse(localStorage.getItem("task"));
    var orden = [];
    for (var i = 0; i < task.length; i++) {
        if (task[i]["prioridad"] == "up") {
            orden.push(task[i]);
        }
    }
    for (var i = 0; i < task.length; i++) {
        if (task[i]["prioridad"] == "medium") {
            orden.push(task[i]);
        }
    }
    for (var i = 0; i < task.length; i++) {
        if (task[i]["prioridad"] == "low") {
            orden.push(task[i]);
        }
    }
    for (var i = 0; i < task.length; i++) {
        if (task[i]["prioridad"] == "Sin determinar") {
            orden.push(task[i]);
        }
    }
    localStorage.setItem("task", JSON.stringify(orden));
}

function cargaTarjetas(){
    //carga las tareas del localstorage
    var task = JSON.parse(localStorage.getItem("task"));
    if (task != null) {
        for (var i = 0; i < task.length; i++) {
            // crea una tarjeta por cada tarea
            $("#contenido").append("<form");
            $("#contenido").append("<li id='tarjeta'><input id='radio' type='radio'><p id='name'>" + task[i]["Tarea"] + "</p></li>");
            $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
            $("#tarjeta:last-child").append("<div id='time'> Añadido el dia: " + task[i]["dia"]  + " a las " + task[i]["hora"]  + "</div>");
            $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='borrar.png'></div>");
            $("#tarjeta").append("</form");
        }
        // ordena las tareas por prioridad
        ordenar();
        // comprueba cuantas tareas están completadas
        $("#radio").each(function() {
            if ($(this).is(":checked")) {
                tareascompletadas++;
            }
        }
        );
        // muestra el contador de tareas pendientes
        $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
        // cambia la prioridad de cada tarea
        $("#contenido").find("input").each(function() {
            var tarea = $(this).parent().find("#name").text();
            for (var i = 0; i < task.length; i++) {
                if (task[i]["Tarea"] == tarea) {
                    if (task[i]["prioridad"] == "low") {
                        $(this).parent().find("#low").css("background-color", "green");
                        $(this).parent().find("#low").css("color", "white");
                    }
                    if (task[i]["prioridad"] == "medium") {
                        $(this).parent().find("#medium").css("background-color", "yellow");
                        $(this).parent().find("#medium").css("color", "white");
                    }
                    if (task[i]["prioridad"] == "up") {
                        $(this).parent().find("#up").css("background-color", "red");
                        $(this).parent().find("#up").css("color", "white");
                    }
                }
            }
        });
    }
}

function borrarTarea(){
    // eliminamos las tareas completadas de todolist
    $("#contenido").find("input:checked").each(function() {
        var tarea = $(this).parent().find("#name").text();
        for (var i = 0; i < todoList.length; i++) {
            if (todoList[i]["Tarea"] == tarea) {
                todoList.splice(i, 1);
            }
        }
    });
    // elimina las tarjetas de las tareas completadas
    $("#contenido").find("input:checked").parent().remove();
    // borra las tareas del contador
    tareaspendientes = tareaspendientes - tareascompletadas;
    tareascompletadas = 0;
    $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
    // eliminamos todo rastro del localstorage
    localStorage.setItem("task", JSON.stringify(todoList));
}

function buscarTarea(){
    // busca la tarea en el input y la muestra
    var tarea = $("#nueva").val();
    var task = JSON.parse(localStorage.getItem("task"));
    if (task != null) {
        for (var i = 0; i < task.length; i++) {
            if (task[i]["Tarea"] == tarea) {
                //vacia el contenido
                $("#contenido").empty();
                //añade la tarea buscada
                $("#contenido").append("<form");
                $("#contenido").append("<li id='tarjeta'><input id='radio' type='radio'><p id='name'>" + task[i]["Tarea"] + "</p></li>");
                $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
                $("#tarjeta:last-child").append("<div id='time'> Añadido el dia: " + task[i]["dia"]  + " a las " + task[i]["hora"]  + "</div>");
                $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='borrar.png'></div>");
                $("#tarjeta").append("</form");
                // cambia la prioridad de la tarea buscada
                $("#contenido").find("input").each(function() {
                    var tarea = $(this).parent().find("#name").text();
                    for (var i = 0; i < task.length; i++) {
                        if (task[i]["Tarea"] == tarea) {
                            if (task[i]["prioridad"] == "low") {
                                $(this).parent().css("background-color", "green");
                                $(this).parent().find("#low").css("background-color", "green");
                                $(this).parent().find("#low").css("color", "white");
                            }
                            if (task[i]["prioridad"] == "medium") {
                                $(this).parent().css("background-color", "yellow");
                                $(this).parent().find("#medium").css("background-color", "yellow");
                                $(this).parent().find("#medium").css("color", "white");
                            }
                            if (task[i]["prioridad"] == "up") {
                                $(this).parent().css("background-color", "red");
                                $(this).parent().find("#up").css("background-color", "red");
                                $(this).parent().find("#up").css("color", "white");
                            }
                        }
                    }
                });
            }
        }
    }
    $("#nueva").val("");
}


$(document).ready(function() {
    $("#nueva").keypress(function(e) {
        if (e.which == 13) {
            creaTarjetas();
        }
    });
    cargaTarjetas();
});

// si se pulsa el input radio, se añade 1 a tareascompletadas
$(document).on("click", "#radio", function() {
    // cambia el color de p a verde y añade text decoration line-through
    if ($(this).is(":checked")) {
        $(this).parent().find("#name").css("color", "green");
        $(this).parent().find("#name").css("text-decoration", "line-through");
    }
    // si el radio está marcado añade 1 a tareascompletadas en el contador
    if ($(this).is(":checked")) {
        tareascompletadas++;
        $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
        // guarda el estado del radio en el localstorage para cada tarjeta
        var task = JSON.parse(localStorage.getItem("task"));
        var index = $(this).parent().index();
        task[index].completada = true;
        localStorage.setItem("task", JSON.stringify(task));
    }
    // si el radio no está marcado
    if (!$(this).is(":checked")) {
        // vuelve a poner a p en su estado normal
        $(this).parent().find("#name").css("color", "white");
        $(this).parent().find("#name").css("text-decoration", "none");
        tareascompletadas--;
        $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
        var task = JSON.parse(localStorage.getItem("task"));
        var index = $(this).parent().index();
        task[index].completada = false;
        localStorage.setItem("task", JSON.stringify(task));
    }
});

$(document).on("click", "#borrartarea", function() {
    var task = JSON.parse(localStorage.getItem("task"));
    var index = $(this).parent().parent().index();
    task.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(task));
    $(this).parent().parent().remove();
    tareaspendientes--;
    $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
});

// si hago click en buscar, se ejecuta la función buscarTarea
$(document).on("click", "#buscar", function() {
    buscarTarea();
});

$(document).on("click", "#borrar", function() {
    borrarTarea();
});

$(document).on("click", "#low", function() {
    var task = JSON.parse(localStorage.getItem("task"));
    var index = $(this).parent().parent().index();
    task[index].prioridad = "low";
    $(this).parent().find("#low").css("background-color", "green");
    $(this).parent().find("#low").css("color", "white");
    $(this).parent().find("#medium").css("background-color", "black");
    $(this).parent().find("#medium").css("color", "white");
    $(this).parent().find("#up").css("background-color", "black");
    $(this).parent().find("#up").css("color", "white");
    localStorage.setItem("task", JSON.stringify(task));
    ordenar();
    location.reload();
});

$(document).on("click", "#medium", function() {
    var task = JSON.parse(localStorage.getItem("task"));
    var index = $(this).parent().parent().index();
    task[index].prioridad = "medium";
    $(this).parent().find("#low").css("background-color", "black");
    $(this).parent().find("#low").css("color", "white");
    $(this).parent().find("#medium").css("background-color", "yellow");
    $(this).parent().find("#medium").css("color", "white");
    $(this).parent().find("#up").css("background-color", "black");
    $(this).parent().find("#up").css("color", "white");
    localStorage.setItem("task", JSON.stringify(task));
    ordenar();
    location.reload();
});

$(document).on("click", "#up", function() {
    var task = JSON.parse(localStorage.getItem("task"));
    var index = $(this).parent().parent().index();
    task[index].prioridad = "up";
    $(this).parent().find("#low").css("background-color", "black");
    $(this).parent().find("#low").css("color", "white");
    $(this).parent().find("#medium").css("background-color", "black");
    $(this).parent().find("#medium").css("color", "white");
    $(this).parent().find("#up").css("background-color", "red");
    $(this).parent().find("#up").css("color", "white");
    localStorage.setItem("task", JSON.stringify(task));
    ordenar();
    location.reload();
});
