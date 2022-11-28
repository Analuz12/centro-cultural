window.onload= function(){
    /*variables*/
    const IMAGENES = [
        'Imagenes/yoganueva.jpg',
        'Imagenes/folclore.jpg',
        'Imagenes/piano.jpg',
    ];
    
let posicionActual =0;
let $botonRetroceder = document.querySelector ('#retroceder');
let $botonAvanzar = document.querySelector ('#avanzar');
let $imagen = document.querySelector ('#imagen');


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

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
// Iniciar
renderizarImagen();
} 
