const Contador = {
    data() {
      return {
        tareas:[],
        titulo:"",

        completas:false,
        incom:false,
        todas:false,
        completadas:[],
        incompletas:[],
    }},
    methods:{
        añade(){
          this.tareas.push({titulo:this.titulo, completada: false, fecha: new Date().toLocaleString(), prioridad: 0});
          this.anadirLocalStorage(); 
        },
        completar(i){   
            this.tareas[i].completada = !this.tareas[i].completada;
            this.anadirLocalStorage();//llamamos al metodo
          },
        borrar(i){
          this.tareas.splice(i,1);
          this.anadirLocalStorage();
        },
        borrarTareasCompletadas(){
          this.tareas=this.tareas.filter((nota)=>{
              return !nota.completada;
          })
          this.anadirLocalStorage();
        },
        anadirLocalStorage(){
          localStorage.setItem('notas', JSON.stringify(this.tareas));
        },

        
        mostrarTareasCompletadas(){
         this.completas=!this.completas;
         this.incom= false;
         this.todas=false;
        },
        mostrarTareasActivas(){
          this.incom= !this.incom;
          this.completas=false;
          this.todas=false;
        },
        mostrarTodasTareas(){
          this.todas=!this.todas;
          this.incom= false;
          this.completas=false;
        }

        
    },
    computed:{

      miListaFiltrada: function(){
        let listaFiltrada;
        if(this.buscar==""){
            listaFiltrada=this.tareas;
        }
        else{
            listaFiltrada= this.tareas.filter((nota)=>{
                if(nota.titulo.indexOf(this.buscar)>=0){
                    return true;
                }else{
                    return false;
                }
            }); 
        
            
      }
        if(this.todas==true){
          listaFiltrada= this.tareas.filter((nota)=>{
            if(nota.completada==true || nota.completada==false){//TODAS
                return true;
            }else{
                return false;
            }
        }); 
      }
        if(this.completas==true){
          listaFiltrada= this.tareas.filter((nota)=>{//FILTRO COMPLETADAS
            if(nota.completada==true){
                return true;
            }else{
                return false;
            }
        });
      }
        if(this.incom==true){
          listaFiltrada= this.tareas.filter((nota)=>{//FILTRO INCOMPLETAS
            if(nota.completada==false){
                return true;
            }else{
                return false;
            }
        });
        }

        return listaFiltrada;
    },
      cuenta(){
        var terminadas = 0;
        for(let i = 0; i<this.tareas.length; i++){//CONTADOR COMPLETADAS
          if(this.tareas[i].completada){
              terminadas++;
          }
        }
        return terminadas;
      },
      anadirCompletadas(){//AÑADO AL ARRAY DE COMPLETADAS TODAS LAS QUE TENGAN 'COMPLETADA:TRUE'
        if(this.tareas.length >= 1){
          for(t of this.tareas){
            if(t.competada == true){
              this.completadas.push(t);
             }
          }
          return this.completadas;
        }
        return 0;
      },
      anadirIncompletas(){
        if(this.tareas.length >= 1){//AÑADO AL ARRAY DE INCOMPLETAS TODAS LAS QUE TENGAN 'COMPLETADA:FALSE'
          for(t of this.tareas){
            if(t.competada == false){
              this.incompletas.push(t);
             }
          }
          return this.incompletas;
        }
        return 0
        
      }


      },
    mounted(){//ONLOAD
      if(localStorage.getItem('notas')){
        this.tareas = JSON.parse(localStorage.getItem('notas'));

        $('uno').show();
      }
    }
  }
  window.onload = () =>{
  Vue.createApp(Contador).mount('#appVue')
}