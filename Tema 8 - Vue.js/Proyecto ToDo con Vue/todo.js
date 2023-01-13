// VARIABLES
if(localStorage.getItem("task") == "[]" || localStorage.getItem("task") == null){
    var todoList = [];
    var tareaspendientes = 0;
    var tareascompletadas = 0;
}else{
    var todoList = JSON.parse(localStorage.getItem("task"));
    var tareaspendientes = todoList.length;
    var tareascompletadas = 0;
}
completadas = [];

// FUNCIONES

function actualizaContador(){
    $("#resultado").html(tareaspendientes - tareascompletadas + " tareas pendientes de un total de "+ tareaspendientes);
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
    // se guardan los cambios (el orden) en el localstorage
    localStorage.setItem("task", JSON.stringify(orden));
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
        var descripcion = "Rellenuto";
        //guarda la hora y el día a la que se crea la tarea
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
        // guarda la tarea con la fecha, el dia y la prioridad en el localstorage con un diccionario
        todoList.push({
            "Tarea": task,
            "dia": dia,
            "hora": hora,
            "descripcion": descripcion,
            "prioridad": "Sin determinar",
            "completada": false
        });
        localStorage.setItem("task", JSON.stringify(todoList));
        // añade la tarjeta con sus datos
        $("#contenido").append("<form");
        $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox'><p id='name'>" + task + "</p></li>");
        $("#tarjeta:last-child").append("<div id='description'>", descripcion);
        $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
        $("#tarjeta:last-child").append("<div id='time'> Añadido el " + dia + " a las " + hora + "</div>");
        $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='papelera.webp'></div>");
        $("#tarjeta").append("</form");
        tareaspendientes++;
        actualizaContador();
        $("#nueva").val("");
    }
}

function cargaTarjetas(){
    //carga las tareas del localstorage
    var task = JSON.parse(localStorage.getItem("task"));
    if (task != null) {
        for (var i = 0; i < task.length; i++) {
            // crea una tarjeta por cada tarea
            $("#contenido").append("<form");
            $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox'><p id='name'>" + task[i]["Tarea"] + "</p></li>");
            $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
            $("#tarjeta:last-child").append("<div id='time'> Añadido el dia: " + task[i]["dia"]  + " a las " + task[i]["hora"]  + "</div>");
            $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='papelera.webp'></div>");
            $("#tarjeta").append("</form");
        }
        // ordena las tareas por prioridad
        ordenar();
        // comprueba cuantas tareas están completadas
        $("#checkbox").each(function() {
            if ($(this).is(":checked")) {
                tareascompletadas++;
            }
        });
        // si estaba completada la tarea la marca como completada
        $("#contenido").find("input").each(function() {
            var tarea = $(this).parent().find("#name").text();
            for (var i = 0; i < task.length; i++) {
                if (task[i]["Tarea"] == tarea) {
                    if (task[i]["completada"] == true) {
                        $(this).prop("checked", true);
                    }
                }
            }
        });
        // muestra el contador de tareas pendientes
        actualizaContador();
        // al pulsar el boton de prioridad se cambia éste y el color del botón
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
    actualizaContador();
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
                $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox'><p id='name'>" + task[i]["Tarea"] + "</p></li>");
                $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' id='low' value='Low'><input type='button' id='medium' value='Normal'><input type='button' id='up' value='High'></div>");
                $("#tarjeta:last-child").append("<div id='time'> Añadido el dia: " + task[i]["dia"]  + " a las " + task[i]["hora"]  + "</div>");
                $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='papelera.webp'></div>");
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
    // vaciamos el input de texto
    $("#nueva").val("");
}

// EVENTOS
// Al cargar
$(document).ready(function() {
    $("#nueva").keypress(function(e) {
        if (e.which == 13) {
            creaTarjetas();
        }
    });
    cargaTarjetas();
});

// si se pulsa el input checkbox, se añade 1 a tareascompletadas
$(document).on("click", "#checkbox", function() {
    // cambia el color de p a verde y añade text decoration line-through
    if ($(this).is(":checked")) {
        $(this).parent().find("#name").css("color", "green");
        $(this).parent().find("#name").css("text-decoration", "line-through");
    }
    // si el checkbox está marcado añade 1 a tareascompletadas en el contador
    if ($(this).is(":checked")) {
        tareascompletadas++;
        actualizaContador();
        // guarda el estado del checkbox en el localstorage para cada tarjeta
        var task = JSON.parse(localStorage.getItem("task"));
        var index = $(this).parent().index();
        task[index].completada = true;
        localStorage.setItem("task", JSON.stringify(task));
    }
    // si el checkbox no está marcado
    if (!$(this).is(":checked")) {
        // vuelve a poner a p en su estado normal
        $(this).parent().find("#name").css("color", "white");
        $(this).parent().find("#name").css("text-decoration", "none");
        tareascompletadas--;
        actualizaContador();
        var task = JSON.parse(localStorage.getItem("task"));
        var index = $(this).parent().index();
        task[index].completada = false;
        localStorage.setItem("task", JSON.stringify(task));
    }
});

// Al pulsar borrar tarea, se borran las tareas completadas
$(document).on("click", "#borrartarea", function() {
    var task = JSON.parse(localStorage.getItem("task"));
    var index = $(this).parent().parent().index();
    task.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(task));
    $(this).parent().parent().remove();
    tareaspendientes--;
    actualizaContador();
});

// si hago click en buscar, se ejecuta la función buscarTarea
$(document).on("click", "#buscar", function() {
    buscarTarea();
});

$(document).on("click", "#borrar", function() {
    borrarTarea();
});

// Botones de prioridad
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
