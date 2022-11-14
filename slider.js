const slider = document.querySelector("#slider");/*El query selector es un selector como css */
let sliderSection = document.querySelectorAll(".slider__section");/*Porque voy a estar trabajando tanto con el primer elemento como con el ultimo*/
let sliderSectionLast =  sliderSection[sliderSection.length-1];/*Asi obtenemos a la ultima imagen por que mas sean 3 o 4*/

const btnLeft = document.querySelector("#btn__left");
const btnRigth = document.querySelector("#btn__rigth");

slider.insertAdjacentElement('afterbegin',sliderSectionLast );/*Coloca la imagen al principio del slider*/

function Next (){
let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
slider.style.marginLeft =" -200% ";
slider.style.transition ="all 0.5s";
setTimeout(function(){
slider.style.transition ="none";/*le quitamos la transsicion*/
slider.insertAdjacentElement('beforeend',sliderSectionFirst);/*En el slider antes que termine*/
slider.style.marginLeft="-100%";
},500);
}
function Prev (){
    let sliderSection = document.querySelectorAll(".slider__section")[0];
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft ="0%";
    slider.style.transition =" all 0.5s ";
    setTimeout(function(){
    slider.style.transition ="none";/*le quitamos la transsicion*/
    slider.insertAdjacentElement('afterbegin',sliderSectionLast);
    slider.style.marginLeft="-100%";
    },500);
    }
btnRigth.addEventListener('click',function(){
    Next ();
});
btnLeft.addEventListener('click',function(){
    Prev();
});

setInterval(function(){
    Next();

},5000)
