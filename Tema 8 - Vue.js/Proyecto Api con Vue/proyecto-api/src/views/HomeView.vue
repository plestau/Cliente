<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img src="https://www.formulatv.com/images/series/posters/100/135/dest_1.jpg" alt="Poster Naruto" class="featured-img"/>
        <div class="detalles">
          <h3>Naruto</h3>
          <p>Naruto Uzumaki, el chaval ninja que alcanza el desafío que buscaba, reconocimiento y demás en esta épica aventura</p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="buscarPeliculas()" class="search-box">
      <input type="text" placeholder="¿Que estás buscando?" v-model="buscar"/>
      <input type="submit" value="Buscar"/>
    </form>
    <div class="movies-list">
      <div class="pelicula" v-for="pelicula in peliculas" :key="pelicula.imdbID">
        <router-link :to="'/movie/' + pelicula.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="pelicula.Poster" alt="Poster"/>
            <div class="tipo">{{ pelicula.Type }}</div>
          </div>
          <div class="detalles">
            <h3>{{ pelicula.Title }}</h3>
            <p class="ano">{{ pelicula.Year }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
    const buscar = ref("");
    const peliculas = ref([]);

    const buscarPeliculas = () => {
      if(buscar.value != ""){
        fetch(`http://www.omdbapi.com/?apikey=8ce33902&s=${buscar.value}`)
          .then(response => response.json())
          .then(data => {
            peliculas.value = data.Search;
            buscar.value = "";
          })
      }
    }

    return{
      buscar,
      peliculas,
      buscarPeliculas
    }
  }
}
</script>
<style lang="scss">
.home{
  .feature-card{
    position: relative;

    .featured-img{
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }

    .detalles{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;

      h3{
        color: #FFF;
        margin-bottom: 16px;
      }

      p{
        color: #FFF;
      }
    }
  }

  .search-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input{
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"]{
        width: 100%;
        padding: 10px 16px;
        margin-bottom: 16px;
        border-radius: 8px;
        border: 1px solid #FFF;
        color: #FFF;
        font-size: 16px;
        transition: 0.4s;

        &::placeholder{
          color: #f3f3f3;
        }

        &:focus{
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"]{
        width: 100%;
        max-width: 300px;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #FFF;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        background-color: #42B883;
        transition: 0.4s;

        &:active{
          background-color: #3BB070;
        }
      }
    }
  }
  .movies-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .pelicula{
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link{
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image{
          position: relative;
          display: block;

          img{
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }

          .tipo{
            position: absolute;
            padding: 8px 16px;
            background-color: #42B883;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }

        .detalles{
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .ano{
            color: #AAA;
            font-size: 16px;
          }

          h3{
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}
</style>