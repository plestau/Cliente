var circulo, posX, posY, direccionX, direccionY, velocidadX, velocidadY, radio, marcador1, marcador2;

window.onload = () => {
    circulo = document.getElementById("circulo");
    marcador1 = 0;
    marcador2 = 0;
    posX = 750;
    posY = 300;
    direccionX = 1;
    direccionY = 1;
    velocidadX = 5;
    velocidadY = 3;
    radio = 40;
    moverBarras();
    setInterval(dibujaEscenario, 10);
}

function dibujaEscenario(){
    // generar un numero entre 0 y 1
    let random = Math.random();
    // si el numero es menor que 0.5, la direccion es negativa
    if (random < 0.5){
        if((posX + radio) > (1520 - radio) && (posY = parseInt(barra1.getAttribute("y")))||(posX - radio) < (0 + radio) && (posY = parseInt(barra2.getAttribute("y")) + 200)){
            direccionX*=-1;
        }
        posX += direccionX * velocidadX;
        circulo.setAttribute("cx", posX);
    
        if(posY > (650 - radio) ||posY < (0 + radio)){
            direccionY*=-1;
        }
        posY += direccionY * velocidadY;
        circulo.setAttribute("cy", posY);
    }/*else{
        if(posX > (1500 - radio) ||posX < (0 + radio)){
            direccionX*=+1;
        }
        posX -= direccionX * velocidadX;
        circulo.setAttribute("cx", posX);
    
        if(posY > (700 - radio) ||posY < (0 + radio)){
            direccionY*=+1;
        }
        posY -= direccionY * velocidadY;
        circulo.setAttribute("cy", posY);    
    }*/
    else if (posX > (1520 - radio)){
        marcador1++;
        document.getElementById("score").innerHTML = marcador1 + " : " + marcador2;
    }
    else if (posX < (0 + radio)){
        marcador2++;
        document.getElementById("score").innerHTML = marcador1 + " : " + marcador2;
    }
}

function moverBarras(){
    barra1 = document.getElementById("barra1");
    barra2 = document.getElementById("barra2");

    document.addEventListener("keydown", (e) => {
        switch(e.key){
            case "w":
                if(parseInt(barra1.getAttribute("y")) > 0){
                    barra1.setAttribute("y", parseInt(barra1.getAttribute("y")) - 20);
                    break;
                }
            case "s":
                if(parseInt(barra1.getAttribute("y")) < (650 - 150)){
                    barra1.setAttribute("y", parseInt(barra1.getAttribute("y")) + 20);
                    break;
                }
            case "ArrowUp":
                if(parseInt(barra2.getAttribute("y")) > 0){
                    barra2.setAttribute("y", parseInt(barra2.getAttribute("y")) - 20);
                    break;
                }
            case "ArrowDown":
                if(parseInt(barra2.getAttribute("y")) < (650 - 150)){
                    barra2.setAttribute("y", parseInt(barra2.getAttribute("y")) + 20);
                    break;
                }
            }
        }
    );
}
