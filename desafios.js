'use strict'

//hacer un programa que salude
/*console.log('hola')*/
//document.write('hola')


const nombreUsuario = prompt('ingrese su nombre')
console.log(nombreUsuario) //siempre se pone esto?

switch (nombreUsuario) {
    case (" "):
        document.write("Hola"); //será mejor con document.write?
        break;
    default:
        document.write("Hola" + nombreUsuario);
        break;
}


/*const numerosUser = prompt('ingrese un número')
console.log(numerosUser)

const numeroUser1 = prompt('ingrese un número')
console.log(numeroUser1)

TERMINAR DESAFIO*/


