function imagenesAleatorias() {
    let personajes = ["mario","luigi","waluigi","wario","bowser"];
    let posiciones = [0,1,2,3,4,5,6,7,8,9];
    let cartas = document.getElementsByClassName("carta");
    for (let i = 0; i < 5; i++) {
      let numeroRandom = Math.floor(Math.random() * personajes.length);
      let personaje = personajes[numeroRandom];
      for(let j = 0; j < 2; j++) {
        let randonNumeroPosicion = Math.floor(Math.random() * posiciones.length)
        let randomPosicion = posiciones[randonNumeroPosicion];
        posiciones.splice(randonNumeroPosicion, 1);
        cartas[randomPosicion].setAttribute("personaje",personaje);
        let imagen = cartas[randomPosicion].children[0];
        imagen.setAttribute("src",personaje + ".jpg");
        imagen.setAttribute("alt",personaje);
      }
      personajes.splice(numeroRandom,1);
    }
  }

  // carga las imagenes al cargar la página
  window.onload = imagenesAleatorias();
    
  let contador = 0;
  let primeraCarta = "";
  let segundaCarta = "";
  let numeroVidas = 5;
  let numeroPuntos = 0;
  let timerPulsado = false;
  let cartas = document.querySelectorAll(".carta");
  let vidas = document.getElementById("vidas");
  vidas.innerHTML = `You have ${numeroVidas} lifes left`;
  
  function activarTimer() {
    timer = setInterval(() => {
      let time = document.getElementById("seconds");
      let seconds = Number(time.innerHTML);
      seconds++;
      if (time.innerHTML < 9) {
        time.innerHTML = "0" + seconds;
      }else {
        time.innerHTML = seconds;
      }
      if (seconds === 60) {
        let minutes = document.getElementById("minutes");
        let minutesNumber = Number(minutes.innerHTML);
        minutesNumber++;
        if (minutes.innerHTML < 9) {
          minutes.innerHTML = "0" + minutesNumber;
        }else {
          minutes.innerHTML = minutesNumber;
        }
        time.innerHTML = "00";
      }
    },1000);
  }
    
  function pararTimer() {
    clearInterval(timer);
  }
    
  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      if (timerPulsado === false) {
        activarTimer();
        timerPulsado = true;
      }
      if (numeroVidas > 0) {
        carta.classList.add("clicked");
        if (contador == 0) {
          primeraCarta = carta.getAttribute("personaje");
          contador++;
        }else {
          segundaCarta = carta.getAttribute("personaje");
          contador = 0;
          if (primeraCarta == segundaCarta) {
            let cartasIguales = document.querySelectorAll(
              `.carta[personaje="${primeraCarta}"]`
            );
            cartasIguales[0].classList.add("matched");
            cartasIguales[0].classList.remove("clicked");
            cartasIguales[1].classList.add("matched");
            cartasIguales[1].classList.remove("clicked");
            numeroPuntos++;
          }else {
            let cartasDiferentes = document.querySelectorAll(".carta.clicked");
            cartasDiferentes[0].classList.add("wrong");
            cartasDiferentes[1].classList.add("wrong");
            numeroVidas--;
            vidas.innerHTML = `You have ${numeroVidas} tries left`;
            setTimeout(() => {
              cartasDiferentes[0].classList.remove("wrong", "clicked");
              cartasDiferentes[1].classList.remove("wrong", "clicked");
            },800);
          }
        }
      }else {
        vidas.innerHTML = "Try again";
        pararTimer();
        cartas.forEach((carta) => {
          carta.style.opacity = 0.5;
          carta.style.backgroundColor = "black";
        });
      }
      if (numeroPuntos == 5) {
        vidas.innerHTML = "Winner!";
        pararTimer();
      }
    });
  })
    
  restart = document.getElementById("restart");
  restart.addEventListener("click", () => {
    location.reload();
  });
