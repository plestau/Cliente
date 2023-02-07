const app = document.getElementById('app');

function Ejercicio1(){
    return(
        <>
            <h1>Ejercicio 1</h1>
            <div id="cuadrado"><p>Hello world</p></div>
        </>
    )
}

function alertaUsuario(){
    alert("Has pulsado el botón del ejercicio 2")
}

function Ejercicio2(){
    return(
        <>
            <h1>Ejercicio 2</h1>
            <button onClick={alertaUsuario}>Alerta</button>
        </>
    )
}

function Ejercicio3(props){
    return(
        <div id="ej3">
            <h1>Ejercicio 3</h1>
            <button onClick={() => alert("Has pulsado el botón: " + props.boton)}>Alerta {props.boton}</button>
        </div>
    )
}

function Ejercicio4(){
    const [contador, setContador] = React.useState(0)
    function incrementaContador(){
        setContador(contador + 1)
    }
    return(
        <>
            <h1>Ejercicio 4</h1>
            <button onClick={incrementaContador}>Incrementa</button>
            <p>El botón se ha pulsado: {contador} veces</p>
        </>
    )
}

function Ejercicio5(){
    const animales = ["perro", "gato", "pollo", "vaca", "oveja", "caballo"]
    const listaAnimales = animales.map((entrada) =>(
        <li key={entrada}>{entrada}</li>
    ))
    return(
        <>
        <h1>Ejercicio 5</h1>
        {listaAnimales}
        </>
    )
}

function Ejercicio6(){
    const animales = [{nombre: "perro", emote: '🐶'}, {nombre: "gato", emote: '🐱'}, {nombre: "pollo", emote: '🐔'}, {nombre: "vaca", emote: '🐮'}, {nombre: 'oveja', emote: '🐑'}, {nombre: 'caballo', emote: '🐎'}]
    const listaAnimales = animales.map((entrada) =>(
        <li className="animal" key={entrada.nombre}><p>{entrada.emote} {entrada.nombre}</p></li>
    ))
    return(
        <>
        <h1>Ejercicio 6</h1>
        {listaAnimales}
        </>
    )
}

ReactDOM.render(
    <>
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 boton = '1'/>
        <Ejercicio3 boton = '2'/>
        <Ejercicio3 boton = '3'/>
        <Ejercicio4 />
        <Ejercicio5 />
        <Ejercicio6 />
    </>, app);
