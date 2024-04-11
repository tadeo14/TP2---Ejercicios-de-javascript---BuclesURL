// 1 - Escribir un programa que solicite la edad y si es mayor de 18 años
//     mostrar un mensaje que ya puede conducir, si la edad ingresada no
//     es un número válido indicarlo en un mensaje.

function validarEdad () {
    const edad = parseInt(prompt("Por favor, ingrese su edad:")) ;
    if (!isNaN(edad)) {
        if (edad >= 18) {
            console.log('Eres mayor');
        } else  {
            console.log('Eres menor');
        }    
    } else {
        console.log('pon un numero valido');
    }
    
}

validarEdad();

