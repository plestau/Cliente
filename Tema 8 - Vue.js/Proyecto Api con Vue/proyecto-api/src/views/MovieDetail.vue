<template>
    <div class="movie-detail">
        <h2>{{ pelicula.Title }}</h2>
        <p>{{ pelicula.Year }}</p>
        <img :src="pelicula.Poster" alt="Poster de la película" class="featured-img"/>
        <p>{{ pelicula.Plot }}</p>
        <br>
        <p>Nota: {{ pelicula.imdbRating }}</p>
    </div>
</template>
<script>
import {ref, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';

export default{
    setup(){
        const pelicula = ref({});
        const ruta = useRoute();

        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=8ce33902&i=${ruta.params.id}&plot=full`)
                .then(response => response.json())
                .then(data => {pelicula.value = data;});
        });

        return{
            pelicula
        }
    }
}
</script>
<style lang="scss">
.movie-detail{
    padding: 16px;

    h2{
        color: #FFF;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .featured-img{
        display: block;
        max-width: 200px;
        margin-bottom: 16px;
    }

    p{
        color: #FFF;
        font-size: 16px;
        line-height: 1.4;
    }
}
</style>