window.onload = () => {
    document.getElementById("peticion").onclick = lanzaPeticion;
}

var httpRequest;

function lanzaPeticion() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.open("GET", "prueba.xml");
    httpRequest.send();
}

function trataRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            /*let datosUsuario = JSON.parse(httpRequest.responseText);
            document.body.innerHTML += datosUsuario.apellidos;

            let datosUsuario = httpRequest.responseXML;
            document.body.innerHTML += datosUsuario.getElementsByTagName("nombre")[0].innerHTML;
            document.body.innerHTML += datosUsuario.getElementsByTagName("apellidos")[0].innerHTML;*/
        } else {
          alert("No funciona");
        }
    }
}