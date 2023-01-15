const { createApp } = Vue

createApp({
    data() {
        if (localStorage.getItem("task") == "[]" || localStorage.getItem("task") == null) {
            return {
                todoList: [],
                tareaspendientes: 0,
                tareascompletadas: 0,
                completadas: []
            }
        } else {
            return {
                todoList: JSON.parse(localStorage.getItem("task")),
                tareaspendientes: JSON.parse(localStorage.getItem("task")).length,
                tareascompletadas: 0,
                completadas: []
            }
        }
    },
    methods: {
        actualizaContador() {
            $("#resultado").html(this.tareaspendientes - this.tareascompletadas + " tareas pendientes de un total de " + this.tareaspendientes);
        },
        ordenar() {
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
        },
        creaTarjetas() {
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
                for (var i = 0; i < this.todoList.length; i++) {
                    if (this.todoList[i]["Tarea"] == task) {
                        alert("Ya existe una tarea con ese nombre");
                        location.reload();
                        return false;
                    }
                }
                // guarda la tarea con la fecha, el dia y la prioridad en el localstorage con un diccionario
                this.todoList.push({
                    "Tarea": task,
                    "dia": dia,
                    "hora": hora,
                    "descripcion": descripcion,
                    "prioridad": "Sin determinar",
                    "completada": false
                });
                localStorage.setItem("task", JSON.stringify(this.todoList));
                // añade la tarjeta con sus datos
                $("#contenido").append("<form");
                $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox' @click='anadir1'><p id='name'>" + task + "</p></li>");
                $("#tarjeta:last-child").append("<div id='description'>", descripcion);
                $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' @click='botonlow' id='low' value='Low'><input type='button' @click='botonmedium' id='medium' value='Normal'><input type='button' @click='botonup' id='up' value='High'></div>");
                $("#tarjeta:last-child").append("<div id='time'> Añadido el " + dia + " a las " + hora + "</div>");
                $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='papelera.webp' @click='botonborrar'></div>");
                $("#tarjeta").append("</form");
                this.tareaspendientes++;
                this.actualizaContador();
                $("#nueva").val("");
            }
        },
        cargaTarjetas() {
            //carga las tareas del localstorage
            var task = JSON.parse(localStorage.getItem("task"));
            if (task != null) {
                for (var i = 0; i < task.length; i++) {
                    // crea una tarjeta por cada tarea
                    $("#contenido").append("<form");
                    $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox' @click='anadir1'><p id='name'>" + task[i]["Tarea"] + "</p></li>");
                    $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' @click='botonlow' id='low' value='Low'><input type='button' @click='botonmedium' id='medium' value='Normal'><input type='button' @click='botonup' id='up' value='High'></div>");
                    $("#tarjeta:last-child").append("<div id='time'> Añadido el dia: " + task[i]["dia"] + " a las " + task[i]["hora"] + "</div>");
                    $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='papelera.webp' @click='botonborrar'></div>");
                    $("#tarjeta").append("</form");
                }
                // ordena las tareas por prioridad
                this.ordenar();
                // comprueba cuantas tareas están completadas
                $("#checkbox").each(function () {
                    if ($(this).is(":checked")) {
                        this.tareascompletadas++;
                    }
                });
                // si estaba completada la tarea la marca como completada
                $("#contenido").find("input").each(function () {
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
                this.actualizaContador();
                // al pulsar el boton de prioridad se cambia éste y el color del botón
                $("#contenido").find("input").each(function () {
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
        },
        borrarTarea() {
            // eliminamos las tareas completadas de todolist
            $("#contenido").find("input:checked").each(function () {
                var tarea = $(this).parent().find("#name").text();
                for (var i = 0; i < this.todoList.length; i++) {
                    if (this.todoList[i]["Tarea"] == tarea) {
                        this.todoList.splice(i, 1);
                    }
                }
            });
            // elimina las tarjetas de las tareas completadas
            $("#contenido").find("input:checked").parent().remove();
            // borra las tareas del contador
            this.tareaspendientes = this.tareaspendientes - this.tareascompletadas;
            this.tareascompletadas = 0;
            this.actualizaContador();
            // eliminamos todo rastro del localstorage
            localStorage.setItem("task", JSON.stringify(this.todoList));
        },
        buscarTarea() {
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
                        $("#contenido").append("<li id='tarjeta'><input id='checkbox' type='checkbox' @click='anadir1'><p id='name'>" + task[i]["Tarea"] + "</p></li>");
                        $("#tarjeta:last-child").append("<div id='buttons'> Priority: <input type='button' @click='botonlow' id='low' value='Low'><input type='button' @click='botonmedium' id='medium' value='Normal'><input type='button' @click='botonup'id='up' value='High'></div>");
                        $("#tarjeta:last-child").append("<div id='time'> Añadido el dia: " + task[i]["dia"] + " a las " + task[i]["hora"] + "</div>");
                        $("#tarjeta:last-child").append("<div><img id=borrartarea style=width:40px; height:40px; src='papelera.webp'></div>");
                        $("#tarjeta").append("</form");
                        // cambia la prioridad de la tarea buscada
                        $("#contenido").find("input").each(function () {
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
        },
        anadir1(){
            console.log("Hola");
            // cambia el color de p a verde y añade text decoration line-through
            if ($(this).is(":checked")) {
                $(this).parent().find("#name").css("color", "green");
                $(this).parent().find("#name").css("text-decoration", "line-through");
            }
            // si el checkbox está marcado añade 1 a tareascompletadas en el contador
            if ($(this).is(":checked")) {
                this.tareascompletadas++;
                this.actualizaContador();
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
                this.tareascompletadas--;   
                this.actualizaContador();
                var task = JSON.parse(localStorage.getItem("task"));
                var index = $(this).parent().index();
                task[index].completada = false;
                localStorage.setItem("task", JSON.stringify(task));
            }
        },
        botonborrar(){
            var task = JSON.parse(localStorage.getItem("task"));
            var index = $(this).parent().parent().index();
            task.splice(index, 1);
            localStorage.setItem("task", JSON.stringify(task));
            $(this).parent().parent().remove();
            this.tareaspendientes--;
            this.actualizaContador();
        },
        botonlow(){
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
        },
        botonmedium(){
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
        },
        botonup(){
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
        }
    },
    mounted(){
        this.cargaTarjetas();
        this.actualizaContador();
    }
}).mount('#app')
