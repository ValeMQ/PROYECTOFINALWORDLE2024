
let intentos = 5;

let lista = ["POBRE","COBRE","SOBRE","DOBLE","NOBLE"];

let posicion = Math.floor(Math.random() * lista.length);

let palabra = lista[posicion];

console.log (palabra);
const INPUT = document.getElementById("guess-input");
const BOTON = document.getElementById("guess-button");
console.log (BOTON);

BOTON.addEventListener("click", intentar);

function intentar() {
    const intento = leerIntento();
    const GRID = document.getElementById ("grid");
    const ROW = document.createElement ("div");
    ROW.className = "row";
    console.log("div" , ROW);

    intentos = intentos - 5;
    console.log ("quedan", intentos, "intentos");
    for (pos in palabra) {
        console.log("posicion del elemento", pos);
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.innerHTML = intento [pos];
        if (intento[pos] === palabra[pos]) {
            console.log(intento[pos], "verde");
            SPAN.style.backgroundColor = "green";
            } else if (palabra.includes(intento[pos])) {
                console.log(intento[pos], "amarillo");
                SPAN.style.backgroundColor = "yellow";
            } else {
                console.log(intento[pos], "rojo");
                SPAN.style.backgroundColor = "red"
            }
            ROW.appendChild(SPAN) ;
    }
    GRID.appendChild(ROW) ;
    if (palabra === intento) {
        terminar ("<h1> SIUUU GANHOU!</h1>") ;
    }
    if (intento === 5) {
        terminar("<h1>PERDISTE!</h1>") ;
    }
}
    function leerIntento () {
        return INPUT.value.toUpperCase();
    }
        function terminar(mensaje) {
            let estado = document.getElementById("guesses");
            INPUT.disabled = true;
            BOTON.disabled = true;
            estado.innerHTML = mensaje;
            console.log(estado, mensaje);
    }