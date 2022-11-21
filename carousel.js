window.onload= function(){
    /*variables*/
    const IMAGENES = [
        'Imagenes/yoganueva.jpg',
        'Imagenes/folclore.jpg',
        'Imagenes/piano.jpg',
    ];

const TIEMPO_INTERVALO_MILESIMA_SEG = 2000;
let posicionActual =0;
let $botonRetroceder = document.querySelector ('#retroceder');
let $botonAvanzar = document.querySelector ('#avanzar');
let $imagen = document.querySelector ('#imagen');
let $botonPlay = document.querySelector ('#play');
let $botonStop = document.querySelector ('#stop'); 

/*funciones*/
/*Funcion que cambia la imagen a la siguiente posicion*/

function pasarFoto(){
    if(posicionActual >= IMAGENES.length -1 ){
        posicionActual = 0;
    }else{
        posicionActual++;
    }
    renderizarImagen();
}

/*Funcion que cambia la imagen a la posicion anterior */

function retrocederFoto(){
    if(posicionActual <= 0) {
        posicionActual = IMAGENES.length -1 ;
        
    }else{
        posicionActual--;
    }
    renderizarImagen();
}

/*Funcion que actualiza la imagen dependiendo la posicion */

function renderizarImagen() {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}

/*Funcion para activar el autoplay de la imagenes*/

function playIntervalo() {
    intervalo = setInterval(pasarFoto,TIEMPO_INTERVALO_MILESIMA_SEG);
    // Desactivamos los botones de control
    $botonAvanzar.setAttribute('disabled', true);
    $botonRetroceder.setAttribute('disabled', true);
    $botonPlay.setAttribute('disabled', true);
    $botonStop.removeAttribute('disabled');

}
/* Para el autoplay de la imagen*/

function stopIntervalo() {
    clearInterval(intervalo);
    // Activamos los botones de control
    $botonAvanzar.removeAttribute('disabled');
    $botonRetroceder.removeAttribute('disabled');
    $botonPlay.removeAttribute('disabled');
    $botonStop.setAttribute('disabled', true);
}

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
$botonPlay.addEventListener('click', playIntervalo);
$botonStop.addEventListener('click', stopIntervalo);
// Iniciar
renderizarImagen();
} 
