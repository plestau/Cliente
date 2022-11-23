const PokemonContainer = document.getElementById("pokemon__containerID");
const SearchContainer = document.getElementById("search__containerID");
const SearchElement = document.createElement("input");
SearchElement.setAttribute("type", "text");
SearchElement.setAttribute("name", "searchBar");
SearchElement.setAttribute("placeholder", "Search...");
SearchContainer.appendChild(SearchElement);

const PokemonNumber = 905;

const createPokemonCard = (pokemon) => {
  const PokemonElement = document.createElement("div");
  const PokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  PokemonElement.setAttribute("id", PokemonName);
  const PokemonID = pokemon.id;
  const PokemonType1 = pokemon.types[0].type.name;
  switch (PokemonType1) {
    case "steel": {
      PokemonWeakness1 = [" fuego ", " lucha ", " tierra "];
      PokemonStronger1 = [" veneno ", " acero ", " bicho ", " hada ", " hielo ", " normal ", " planta ", "psíquico", " roca ", " volador "];
      break;
    }
    case "water": {
      PokemonWeakness1 = [" planta ", " electrico "];
      PokemonStronger1 = [" acero ", " agua ", " fuego ", " hielo "];
      break;
    }
    case "bug": {
      PokemonWeakness1 = [" fuego ", " volador ", " roca "];
      PokemonStronger1 = [" planta ", " lucha ", " tierra "];
      break;
    }
    case "dragon": {
      PokemonWeakness1 = [" hielo ", " dragon ", " hada "];
      PokemonStronger1 = [" dragon ", " agua ", " fuego ", " planta "];
      break;
    }
    case "electric": {
      PokemonWeakness1 = [" tierra "];
      PokemonStronger1 = [" volador ", " electrico ", " acero "];
      break;
    }
    case "ghost": {
      PokemonWeakness1 = [" fantasma ", " siniestro "];
      PokemonStronger1 = [" LUCHA ", " NORMAL ", " veneno ", " bicho "];
      break;
    }
    case "fire": {
      PokemonWeakness1 = [" agua ", " tierra ", " roca "];
      PokemonStronger1 = [" planta ", " hada ", " hielo ", " bicho ", " acero ", " fuego "];
      break;
    }
    case "fairy": {
      PokemonWeakness1 = [" veneno ", " acero "];
      PokemonStronger1 = [" lucha ", " DRAGON ", " bicho ", " siniestro "];
      break;
    }
    case "ice": {
      PokemonWeakness1 = [" fuego ", " lucha ", " roca ", " acero "];
      PokemonStronger1 = [" hielo "];
      break;
    }
    case "fighting": {
      PokemonWeakness1 = [" volador ", " psiquico ", " hada "];
      PokemonStronger1 = [" siniestro ", " roca ", " bicho "];
      break;
    }
    case "normal": {
      PokemonWeakness1 = [" lucha "];
      PokemonStronger1 = [" FANTASMA "];
      break;
    }
    case "grass": {
      PokemonWeakness1 = [" fuego ", " hielo ", " veneno ", " volador ", " bicho ",];
      PokemonStronger1 = [" tierra ", " electrico ", " planta ", " agua "];
      break;
    }
    case "psychic": {
      PokemonWeakness1 = [" bicho ", " fantasma ", " siniestro "];
      PokemonStronger1 = [" lucha ", " psiquico "];
      break;
    }
    case "rock": {
      PokemonWeakness1 = [" agua ", " planta ", " lucha ", " tierra ", " acero "];
      PokemonStronger1 = [" volador ", " fuego ", " normal ", " veneno "];
      break;
    }
    case "dark": {
      PokemonWeakness1 = [" lucha ", " hada ", " bicho "];
      PokemonStronger1 = [" fantasma ", " PSIQUICO ", " siniestro "];
      break;
    }
    case "ground": {
      PokemonWeakness1 = [" agua ", " planta ", " hielo "];
      PokemonStronger1 = [" ELECTRICO "," roca ", " veneno "];
      break;
    }
    case "poison": {
      PokemonWeakness1 = [" tierra ", " psiquico "];
      PokemonStronger1 = [" planta ", " lucha ", " bicho ", " hada ", " veneno "];
      break;
    }
    case "flying": {
      PokemonWeakness1 = ["eléctrico", " hielo ", " roca "];
      PokemonStronger1 = [" planta ", " lucha ", " bicho ", " TIERRA "];
      break;
    }
  }
  //si tiene otro tipo, se define como PokemonType2
  if(pokemon.types[1]!= null){
    const PokemonType2 = pokemon.types[1].type.name;
    switch (PokemonType2) {
      case "steel": {
        PokemonWeakness2 = [" fuego ", " lucha ", " tierra "];
        PokemonStronger2 = [" veneno ", " acero ", " bicho ", " hada ", " hielo ", " normal ", " planta ", "psíquico", " roca ", " volador "];
        break;
      }
      case "water": {
        PokemonWeakness2 = [" planta ", " electrico "];
        PokemonStronger2 = [" acero ", " agua ", " fuego ", " hielo "];
        break;
      }
      case "bug": {
        PokemonWeakness2 = [" fuego ", " volador ", " roca "];
        PokemonStronger2 = [" planta ", " lucha ", " tierra "];
        break;
      }
      case "dragon": {
        PokemonWeakness2 = [" hielo ", " dragon ", " hada "];
        PokemonStronger2 = [" dragon ", " agua ", " fuego ", " planta "];
        break;
      }
      case "electric": {
        PokemonWeakness2 = [" tierra "];
        PokemonStronger2 = [" volador ", " electrico ", " acero "];
        break;
      }
      case "ghost": {
        PokemonWeakness2 = [" fantasma ", " siniestro "];
        PokemonStronger2 = [" LUCHA ", " NORMAL ", " veneno ", " bicho "];
        break;
      }
      case "fire": {
        PokemonWeakness2 = [" agua ", " tierra ", " roca "];
        PokemonStronger2 = [" planta ", " hada ", " hielo ", " bicho ", " acero ", " fuego "];
        break;
      }
      case "fairy": {
        PokemonWeakness2 = [" veneno ", " acero "];
        PokemonStronger2 = [" lucha ", "DRAGON", " bicho ", " siniestro "];
        break;
      }
      case "ice": {
        PokemonWeakness2 = [" fuego ", " lucha ", " roca ", " acero "];
        PokemonStronger2 = [" hielo "];
        break;
      }
      case "fighting": {
        PokemonWeakness2 = [" volador ", " psiquico ", " hada "];
        PokemonStronger2 = [" siniestro ", " roca ", " bicho "];
        break;
      }
      case "normal": {
        PokemonWeakness2 = [" lucha "];
        PokemonStronger2 = [" FANTASMA "];
        break;
      }
      case "grass": {
        PokemonWeakness2 = [" fuego ", " hielo ", " veneno ", " volador ", " bicho "];
        PokemonStronger2 = [" tierra ", " electrico ", " planta ", " agua "];
        break;
      }
      case "psychic": {
        PokemonWeakness2 = [" bicho ", " fantasma ", " siniestro "];
        PokemonStronger2 = [" lucha ", " psiquico "];
        break;
      }
      case "rock": {
        PokemonWeakness2 = [" agua ", " planta ", " lucha ", " tierra ", " acero "];
        PokemonStronger2 = [" volador ", " fuego ", " normal ", " veneno "];
        break;
      }
      case "dark": {
        PokemonWeakness2 = [" lucha ", " hada ", " bicho "];
        PokemonStronger2 = [" fantasma ", " PSIQUICO ", " siniestro "];
        break;
      }
      case "ground": {
        PokemonWeakness2 = [" agua ", " planta ", " hielo "];
        PokemonStronger2 = [" ELECTRICO ", " roca ", " veneno "];
        break;
      }
      case "poison": {
        PokemonWeakness2 = [" tierra ", " psiquico "];
        PokemonStronger2 = [" planta ", " lucha ", " bicho ", " hada ", " veneno "];
        break;
      }
      case "flying": {
        PokemonWeakness2 = ["eléctrico", " hielo ", " roca "];
        PokemonStronger2 = [" planta ", " lucha ", " bicho ", " TIERRA "];
        break;
      }
    }
  }
    // funcion que suma dos arrays y elimina palabras enteras duplicadas
    function sumArrays(array1, array2) {
      let array3 = array1.concat(array2);
      let array4 = array3.filter((item, index) => array3.indexOf(item) === index);
      return array4;
    }
    //se suman los arrays de debilidades y se guardan en un nuevo array
    let PokemonWeakness = sumArrays(PokemonWeakness1, PokemonWeakness2);
    //se suman los arrays de fortalezas y se guardan en un nuevo array
    let PokemonStronger = sumArrays(PokemonStronger1, PokemonStronger2);
  
  
  const PokemonTypeColors = {
    fire: "#EE8130",
    grass: "#7AC74C",
    electric: "#FFFF00",
    water: "#6390F0",
    ground: "#E2BF65",
    rock: "#B6A136",
    fairy: "#D685AD",
    poison: "#A33EA1",
    bug: "#A6B91A",
    dragon: "#6F35FC",
    psychic: "#F95587",
    flying: "#A98FF3",
    fighting: "#C22E28",
    normal: "#A8A77A",
    ice: "#96D9D6",
    ghost: "#735797",
    dark: "#705746",
    steel: "#B7B7CE",
  };
  const AddColors = PokemonTypeColors[PokemonType1];
  PokemonElement.style.backgroundColor = AddColors;
  PokemonInnerHTML = `
    <div class="pokemon__imageContainer" id="${PokemonName}">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonID}.png"/>
    </div>
    <div class="pokemon__infomationContainer">
      <span class="pokemon__id">#${PokemonID.toString().padStart(3, "0")}</span>
      <h3 class="pokemon__name">${PokemonName}</h3>
      <small class="pokemon__type">Tipo: <span>${PokemonType1}</span></small><br>
      <small class="pokemon__weakness">Debilidad: <span>${PokemonWeakness}</span></small><br>
      <small class="pokemon__stronger">Fuerte contra: <span>${PokemonStronger}</span></small>
    </div>`;
  if(pokemon.types[1] != null){
    const PokemonType2 = pokemon.types[1].type.name 
    PokemonInnerHTML = `
    <div class="pokemon__imageContainer" id="${PokemonName}">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonID}.png"/>
    </div>
    <div class="pokemon__infomationContainer">
      <span class="pokemon__id">#${PokemonID.toString().padStart(3, "0")}</span>
      <h3 class="pokemon__name">${PokemonName}</h3>
      <small class="pokemon__type">Tipo: <span>${PokemonType1}/${PokemonType2}</span></small><br>
      <small class="pokemon__weakness">Debilidad: <span>${PokemonWeakness}</span></small><br>
      <small class="pokemon__stronger">Fuerte contra: <span>${PokemonStronger}</span></small>
    </div>`;
  }
  PokemonElement.setAttribute("class", "pokemon__card");
  PokemonElement.innerHTML = PokemonInnerHTML;
  PokemonContainer.appendChild(PokemonElement);
    // si el pokemon posee un segundo tipo, se añade
    if (pokemon.types[1]!= null) {
      PokemonType2 = pokemon.types[1].type.name;
      pokemon__type = document.getElementsByClassName("pokemon__type");
      //editamos el html de pokemon__type para añadir el segundo tipo
      pokemon__type.innerHTML += "<span>" + PokemonType2 + "</span>";
    }
};


const getPokemons = async (id) => {
  const api_url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(api_url);
  const data = await response.json();
  createPokemonCard(data);
};

const receivePokemons = async () => {
  for (let item = 1; item <= PokemonNumber; item++) {
    await getPokemons(item);
  }
  createSearchFilter();
};

receivePokemons();

const createSearchFilter = (pokemonData) => {
  const cards = document.querySelectorAll(".pokemon__card");
  SearchElement.addEventListener("keyup", (event) => {
    const val = event.target.value.toLowerCase();
    cards.forEach((card) => {
      if (card.id.toLowerCase().includes(val)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
};