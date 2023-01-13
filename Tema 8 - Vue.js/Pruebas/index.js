import { createApp } from 'vue'
const app = Vue

createApp({
  data(){
    return{
      entradas: [
        {
          codigoArt: 1,
          titulo: "Fin de semana en Madrid",
          texto: "lorem ipsum faofhbiabawdqDHBWAFGWYBWAIFBWAKnvjrsbvseib eisfbi se  ebisbvisbveisn vjseb isn eaobsibesnneshosejo snejsv",
          url: "https://www.google.es",
          ubicacion: {
            ciudad: "Madrid",
            pais: "España",
          },
          resaltar:true
        },
        {
          codigoArt: 2,
          titulo: "Vacaciones en Londres",
          texto: "lorem ipsum faofhbiabawdqDHBWAFGWYBWAIFBWAKnvjrsbvseib eisfbi se  ebisbvisbveisn vjseb isn eaobsibesnneshosejo snejsv",
          url: "https://www.google.es",
          ubicacion: {
            ciudad: "Londres",
            pais: "Reino Unido",
          },
          resaltar:false
        },
        {
          codigoArt: 3,
          titulo: "Semana Santa en Londres",
          texto: "lorem ipsum faofhbiabawdqDHBWAFGWYBWAIFBWAKnvjrsbvseib eisfbi se  ebisbvisbveisn vjseb isn eaobsibesnneshosejo snejsv",
          url: "https://www.google.es",
          ubicacion: {
            ciudad: "Londres",
            pais: "Reino Unido",
          },
          resaltar:false
        }
      ],
      permitirAnadirEntrada: false,
      verEntrada: false,
      campoFiltro: "",
      texto: "",
      mostrarResultados: false
    }
  },
  methods:
  {
    muestraNumeroArticulos(){
      return this.entradas.lenght;
    },
    cambiarVisibilidad(){
      this.verEntrada = !this.verEntrada;
    },
    resaltar(entrada){
      entrada.resaltar = !entrada.resaltar;
    },
    nuevaEntrada(){
      console.log(this.texto);
      this.texto = "";
    }
  },
  computed:
  {
    entradasFiltradas(){
      // return this.entradas.fitler (ent) => ent.titulo.includes(this.campoFiltro) );
      if (this.mostrarResultados)
        return this.entradas.filter( (ent) => ent.resaltar)
      else
        return this.entradas;
    }
  }
})
app.mount('#app')
