let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;

}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); // el ? es el operador ternario de if y el : de else ``es para evaluar un string
        document.getElementById ('reiniciar').removeAttribute('disabled'); //para habilitar el boton luego de acertar

    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor')
        }
        intentos++; //++ es el replicador
        limpiarCaja();
    };
    return;
} 

//para limpiar la caja si no se acierta
function limpiarCaja () {
  document.querySelector ('#valorUsuario').value = '';
}


function generarNumeroSecreto() {   
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

  //si ya se sortearon todos los numeros cerrar el juego
    if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')
    } else {
        // si el numero generado esta incluido en la lista no sale sorteado
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }   
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego() {
    //para reiniciar el juego hay que hacer primero los pasos de abajo
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();