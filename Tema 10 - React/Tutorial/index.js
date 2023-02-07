const app = document.getElementById('app');

function Cabecera() {
    return( 
    <>
        <h1>Cabecera</h1>
        <h3>Subcabecera</h3>
    </>
    )
}

function trataEvento() {
    console.log("Evento")
}

function Cuerpo() {
    const nombres = [{nombre: "Pepe", edad:33},{nombre: "Pablo", edad:14}]
    const listaNombres = nombres.map((entrada) =>(
        <li key={entrada.nombre}>{entrada.nombre} con {entrada.edad}</li>
    ))
    return(
        <>  
            <Cabecera />
            <ul>
                <p>Modo 1</p>
                {listaNombres}
            </ul>
            <ul>
                <p>Modo 2</p>
                {nombres.map((entrada) =>(
                    <li key={entrada.nombre}>{entrada.nombre} con {entrada.edad}</li>
                ))}
            </ul>
            <button onClick={trataEvento}>Evento</button>
            <h1>Cuerpo</h1>
            <h3>Subcuerpo</h3>
            <Pie desarrollador="Pepe" textoPie="texto1"/>
            <Pie desarrollador="Pablo" textoPie="texto2"/>
        </>
    )
}

var pie = "Pie desde variable"
var nombreDesarrollador = "pablo"
function Pie(props){
    return(
        <>
            <h1>Pie</h1>
            <h3>{pie} - Desarrollado por {props.desarrollador}</h3>
            <p>{props.textoPie}</p>
        </>
    )
}

function Contador(){
    const [contador, incrContador] = React.useState(0)
    function incrementaContador(){
        incrContador(contador + 1)
    }
    return(
        <>
            <button onClick={incrementaContador}>Incrementa</button>
            <p>Contador = {contador}</p>
        </>
    )
}

ReactDOM.render(
    <>
        <Contador />
    </>, app);
