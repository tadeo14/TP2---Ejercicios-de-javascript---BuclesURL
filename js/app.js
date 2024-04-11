// 1 - Escribir un programa que solicite la edad y si es mayor de 18 años
//     mostrar un mensaje que ya puede conducir, si la edad ingresada no
//     es un número válido indicarlo en un mensaje.

// Esta función valida la edad ingresada por el usuario
function validarEdad() {
    // Solicitar al usuario que ingrese su edad y convertir la entrada a un número entero
    const edad = parseInt(prompt("Por favor, ingrese su edad:"));

    // Verificar si la entrada del usuario es un número válido
    if (!isNaN(edad)) {
        // Si la edad es un número válido, verificar si es mayor o igual a 18
        if (edad >= 18) {
            // Si la edad es mayor o igual a 18, mostrar un mensaje indicando que es mayor
            console.log('Eres mayor');
        } else {
            // Si la edad es menor que 18, mostrar un mensaje indicando que es menor
            console.log('Eres menor');
        }    
    } else {
        // Si la entrada del usuario no es un número válido, mostrar un mensaje de error
        console.log('Pon un número válido');
    }
}


