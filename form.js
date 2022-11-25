let nameError= document.getElementById('name-error');
let phoneError= document.getElementById('phone-error');
let emailError= document.getElementById('email-error');
let messageError= document.getElementById('message-error');
let submitError= document.getElementById('submit-error');

/*Esta funcion se ejecutara cada ves que empezemos a escribir en los campos*/
function validateName(){
    var name =document.getElementById('contact-name').value;
    if(name.lenght == 0){
        nameError.innerHTML ='Se requiere el nombre';
        return false;
    }
    if(!name.match(/^[A-Za-z]\s{1}[A-Za-z]&/)){
        nameError.innerHTML ='Escriba el Apellido y nombre completo';
        return false;
    }

    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhone(){
    let phone =document.getElementById('contact-phone').value;

    if(phone.lenght == 0){
        phoneError.innerHTML ='Se requiere el telefono'
        return false;
    }
    if(phone.lenght !== 10){
        phoneError.innerHTML= 'El numero ingresado es invalido'

    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML ='Solo ingrese numeros';
        return false;
    }
    phoneError.innerHTML ='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}