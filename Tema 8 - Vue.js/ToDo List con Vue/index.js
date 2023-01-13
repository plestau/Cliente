import Vue from 'vue/dist/vue.js'

var x = new Vue({
  /* root component options */
    el: '#listatareas',
    data:{
        titulo: 'to do list',
        tareas: [
            {nombre: "Hoy: Reunión con el jefe"},
            {nombre: "Mañana: Leer un libro"},
            {nombre: "Diaria: Hacer deporte"},
        ]
    },
    methods:{
        agregarTarea: function(){
            if (!this.tarea.nombre){
                return;
            }
            this.tarea.push({
                nombre: this.tarea.nombre,
                del: ''
            });
            this.tarea.nombre = "";
        },
        borrarTarea: function(tarea){
            this.tarea.splice(this.tarea.indexOf(tarea), 1)
        }
    }
})
