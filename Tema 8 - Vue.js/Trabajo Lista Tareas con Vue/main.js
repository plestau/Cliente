import { ref, onMounted, computed, watch } from 'vue'

const app = Vue.createApp({
    data() { 
        return{
            todos: ref([]),
            nombre: ref(''),
            input_content: ref(''),
            input_category: ref(null),
            todos_asc: computed(() => todos.value.sort((a, b) => {
            return a.createdAt - b.createdAt}))
        }
    },
    watch: {
        todos: (newVal) => {
            localStorage.setitem('todos', JSON.stringify(newVal))
        },
        nombre: (newVal) => {
            localStorage.setitem('nombre', newVal)
        }
    },
    onMounted: () => {
        nombre.value = localStorage.getItem('nombre') || ''
        todos.value = JSON.parse(localStorage.getItem('todos')) || '[]'
    },
    methods: {
        guardarEvento() {
            // si un campo está vacío no se guarda y salta alert
            if (this.datos.nombre == '' || this.datos.edad == '' || this.datos.nivel == '') {
                alert('No se puede guardar un campo vacío')
                return
            }
            // si el campo nombre es igual a otro ya guardado no se guarda y salta alert
            for (let i = 0; i < this.tareas.length; i++) {
                if (this.tareas[i].nombre == this.datos.nombre) {
                    alert('No se puede guardar un nombre igual a otro ya guardado')
                    return
                }
            }
        },
            // guarda la tarea
        addtodo: () => {
            if(input_category.value.trim() === '' || input_category.value === null){
                return
            }
            todos.value.push({
                content: input_content.value,
                prioridad: input_category.value,
                done: false,
                createdAt: new Date.getTime()
            })
            input_content.value = ''
            input_category.value = null
        },
        removeTodo(){
            todos.value = todos.value.filter(t => t !== todo)
        }
    }
})
app.mount('#app')