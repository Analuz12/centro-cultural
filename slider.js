const slider = document.querySelector("#slider");/*El query selector es un selector como css, llamo el id slider con el query selector */
let sliderSection = document.querySelectorAll(".slider__section");/*Let sliderSection= Cada una de las secciones que voy a estar trabajando las voy a ir modificando por aca Porque voy a estar trabajando tanto con el primer elemento como con el ultimo*/
let sliderSectionLast =  sliderSection[sliderSection.length -1 ];/*Asi obtenemos a la ultima imagen por que mas sean 3 o 4*/

const btnLeft = document.querySelector("#btn-left");/* Colocamos selectores para los botones tanto Derecha como izquierda*/
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast );/* Selecciona la ultima imagen y la Coloca al principio del slider*/

/*FUNCION PARA MOVER LA IMAGEN A LA DERECHA*/
function Next (){
let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];/*toma los 4 elementos y solo se queda con el primero [0]*/
slider.style.marginLeft =" -200% ";/*Con estos nos permite avanzar uno mas.*/
slider.style.transition ="all 0.5s";/*va a avanzar a la siguiente imagen en medio segundo*/
setTimeout(function(){
slider.style.transition ="none";/*le quitamos la transsicion que le dimos arriba porque no queremos q se mueva*/
slider.insertAdjacentElement('beforeend',sliderSectionFirst);/*beforeend antes que termine el slider le pongo la imagen del principio*/
slider.style.marginLeft="-100%";
},500);
}

/*FUNCION PARA MOVER LA IMAGEN A LA IZQUIERDA.*/ 
function Prev (){
    let sliderSection = document.querySelectorAll(".slider__section")[0];/*CAMBIA PORQUE YA NO TRABAJAMOS CON EL PRIMERO SI NO CON EL ULTIMO, */
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft ="0%";/*PORQUE SE VA AL PRINCIPIO DE LA IMAGEN*/
    slider.style.transition =" all 0.5s ";
    setTimeout(function(){
    slider.style.transition ="none";
    slider.insertAdjacentElement('afterbegin',sliderSectionLast);/* AFTERBEGIN: ACA SERIA ANTES DE EMPEZAR */
    slider.style.marginLeft="-100%";/*el margin vuelve a ser al 100%*/
    },500);
    }

/*que detecte el evento click y cuando eso ocurra se ejecute la funcion*/
btnRight.addEventListener('click',function(){
    Next ();
});
btnLeft.addEventListener('click',function(){
    Prev();
});

/*SE EJECUTA LA FUNCION EN UN DETERMINADO NUMERO DE SEGUNDOS*/
setInterval(function(){
    /*AVANZA A LA DERECHA AUTOMATICAMENTE*/
    Next();
},5000);/*CADA 5 SEGUNDOS*/
