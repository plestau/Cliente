document.querySelector('body').addEventListener('load', mostrarDigidex());

document.querySelector('#buscar').addEventListener('click', obtenerDatos);

document.querySelector('#search').addEventListener('keyup', function(){
    if(document.querySelector('#search').value == ''){
        mostrarDigidex();
    }
});


function mostrarDigidex(){
    const api = new XMLHttpRequest();
    api.open('GET', 'https://digimon-api.vercel.app/api/digimon', true);
    api.send();
    
    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
            for(let digimon of datos){
                resultado.innerHTML += `
                    <div class="card">
                        <td><img class="digimon__img" src="${digimon.img}"</td><br>
                        <td><h4 id="card__title">${digimon.name}</td></h4>
                        <td><p>${digimon.level}</p></td>
                    </div>
                `
            }
        }
    }
}

function obtenerDatos(){
    digimon = document.querySelector('#search').value;
    let url = "https://digimon-api.vercel.app/api/digimon/name/"+digimon;
    
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
            for(let digimon of datos){
                resultado.innerHTML += `
                <center>
                    <tr>
                        <h1>${digimon.name}</h1><br>
                        <td><img src='${digimon.img}' style='height:200px; width:200px'</td><br>
                        <td>${digimon.level}</td><br>
                    </tr>
                </center>
                `;
            }
        }
    }
}