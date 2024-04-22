// 1 - Escribir un programa que solicite la edad y si es mayor de 18 años
//     mostrar un mensaje que ya puede conducir, si la edad ingresada no
//     es un número válido indicarlo en un mensaje.

// // Esta función valida la edad ingresada por el usuario
// function validarEdad() {
//     // Solicitar al usuario que ingrese su edad y convertir la entrada a un número entero
//     const edad = parseInt(prompt("Por favor, ingrese su edad:"));

//     // Verificar si la entrada del usuario es un número válido
//     if (!isNaN(edad)) {
//         // Si la edad es un número válido, verificar si es mayor o igual a 18
//         if (edad >= 18) {
//             // Si la edad es mayor o igual a 18, mostrar un mensaje indicando que es mayor
//             console.log('Eres mayor');
//         } else {
//             // Si la edad es menor que 18, mostrar un mensaje indicando que es menor
//             console.log('Eres menor');
//         }
//     } else {
//         // Si la entrada del usuario no es un número válido, mostrar un mensaje de error
//         console.log('Pon un número válido');
//     }
// }

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:



// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido



// function calificación() {
    
//     const nota = parseInt(prompt('Coloca la nota aqui: '));

//     if (!isNaN(nota)) {
//         if (0 <= nota && nota <= 2) {
//             console.log('muy insuficiente');
//         } else if (nota <= 3 && nota <= 4) {
//             console.log('insuficientemente');
//         } else if (5 <= nota && nota <= 6) {
//             console.log('Suficiente');
//         } else if (nota <= 7) {
//             console.log('Bien');
//         } else if (nota <= 8 && nota <= 9) {
//             console.log('Notable');
//         } else if (nota === 10) {
//             console.log('Sobresaliente')
//         } else {
//             console.log('Número erróneo');
//         }
//     } else {
        
//         console.log('Introduce un número válido');
//     }
// }
// calificación();

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
// let resultado = '';
// do {
// 	let palabra = prompt('Ingresa una palabra');
// 	if (resultado == '') {
// 		//si es la primer palabra, concateno sin usar el guion
// 		resultado = palabra;
// 	} else {
// 		resultado = resultado + '-' + palabra;
// 	}
// } while ( confirm('¿Desea continuar?'));

// document.write(resultado);


// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
// “cancelar” deberá indicarse la suma total de los números introducido

// let numero = 0;
// let suma = 0;

// do {
//     numero = prompt('Ingresa tu numero: ');

//     if (!isNaN(parseInt(numero)) && numero != null) {
//         suma = suma + parseInt(numero);
//         console.log('suma: ' + suma);
//     } else {
//         if (numero != null) {
//             alert(`${numero} no es un numero`);
//         }
//     }
// } while (numero != null);

// document.write(`total: ${suma}`);

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// .......
// Dificultad: 🟢🟡

for (let i=1; i<=30; i++) {
    
    for (let rep=0; rep < i; rep++) {
        document.write(i);
    }
    document.write("<br>");

}
