class Nota {
    constructor(nombre, prioridad = "normal", date = Date.now(), completed = false) {
        this.nombre = nombre;
        this.prioridad = prioridad;
        this.date = date;
        this.completed = completed
    }
}


const { createApp } = Vue;
    
createApp({
    // DATOS
    data() {
    return {
        notas: this.getAllNotas(),
        campoFiltro: "",
        newNotaInputText: "",
        searchNotaInputText: "",
        priorityFilter: ""
    }
    },
    // MÉTODOS
    methods:{
        calculateDate(nota){
            return Math.floor((Date.now() - nota.date)/1000/60);
        },
        completedNota(nota){
            return nota.completed;
        },
        ordenarArray(array){
            let arrayOrdenado = array.sort((notaA, notaB)=>{
                if(notaA.prioridad == notaB.prioridad){
                    return 0;
                }else if(notaB.prioridad == "high"){
                    return 1;
                }else if((notaB.prioridad == "normal") && (notaA.prioridad == "low")){
                    return 1;
                }else if((notaA.prioridad == "high") && (notaB.prioridad != "high")){
                    return -1;
                }else if((notaA.prioridad == "normal") && (notaB.prioridad == "low")){
                    return -1;
                }
            });
        
            return arrayOrdenado;
        },
        completarNota(nota){
            nota.completed = !nota.completed;
            localStorage.notas = JSON.stringify(this.notas);
        },
        nuevaNota(){
            miNota = new Nota(this.newNotaInputText);
            this.notas.push(miNota);
            localStorage.notas = JSON.stringify(this.notas);
            this.newNotaInputText = "";
        },
        searchNota(){
            miArray = this.notas.filter((nota) => nota.nombre.toLowerCase().includes(this.searchNotaInputText.toLowerCase()));
            if(this.priorityFilter == ""){
                return this.ordenarArray(miArray);
            }else{
                resultado = miArray.filter((nota) => nota.prioridad == this.priorityFilter);
                return this.ordenarArray(resultado);
            }
        },
        filterByPriority(){
            miArray = this.notas.filter((nota) => nota.prioridad == this.priorityFilter);
            return this.ordenarArray(miArray);
        },
        getAllNotas(){
            if(localStorage.notas != null){
                var notas = JSON.parse(localStorage.getItem('notas'))
            }else{
                var notas = [];
            }
            return notas;
        },
        setPriority(nota, prioridad){
            nota.prioridad = prioridad;
            localStorage.notas = JSON.stringify(this.notas);
        },
        deleteNota(task){
            var resultado = this.notas.filter(nota => nota.nombre != task.nombre);
            this.notas = resultado;
            localStorage.notas = JSON.stringify(this.notas);
        },
        deleteCompletedNotas(){
            var resultado = this.notas.filter((nota) => nota.completed != true);
            this.notas = resultado;
            localStorage.notas = JSON.stringify(this.notas);
        }
    },
    // COMPUTED CACHING
    computed:{
        notasPendientes(){
            return this.notas.filter((nota) => nota.completed == false).length;
        },
        totalNotas(){
            return this.notas.length;
        }
    }
}).mount('#app')