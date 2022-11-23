window.onload = () => {
    document.getElementById("comprobar").onclick = lanzaPeticion;
}

var httpRequest;

function lanzaPeticion() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.open("GET", "arch.xml");
    httpRequest.send();
}

function trataRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let datosUsuario = httpRequest.responseXML;
            for(let i = 0; i < datosUsuario.getElementsByTagName("datosUsuario").length; i++) {
                document.body.innerHTML += datosUsuario.getElementsByTagName("nombre")[i].innerHTML + "<br>";
                document.body.innerHTML += datosUsuario.getElementsByTagName("correo")[i].innerHTML + "<br>";
                document.body.innerHTML += datosUsuario.getElementsByTagName("asunto")[i].innerHTML + "<br>";
                document.body.innerHTML += datosUsuario.getElementsByTagName("fecha")[i].innerHTML + "<br>";
                document.body.innerHTML += datosUsuario.getElementsByTagName("hora")[i].innerHTML + "<br>";
            }
        } else {
          alert("No funciona");
        }
    }
}