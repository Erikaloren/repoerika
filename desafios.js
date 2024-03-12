'use strict'

//hacer un programa que salude
/*console.log('hola')*/
//document.write('hola')

/*
const nombreUsuario = prompt('ingrese su nombre')
console.log(nombreUsuario) 

switch (nombreUsuario) {
    case (" "):
        document.write("Hola"); 
        break;
    default:
        document.write("Hola " + nombreUsuario);
        break;
}
*/

//LISTOOOOO JUJUJUJU

/*
let numeroUser = prompt('ingrese un número')
console.log(numeroUser)

let numeroUser1 = prompt('ingrese un número')
console.log(numeroUser1)

numeroUser=Number(numeroUser)
numeroUser1=Number(numeroUser1)

document.write(numeroUser + numeroUser1);

//DESAFÍO COMPLETADO MUAHAHHAHAHA

//Otra forma que se puede usar:

const numeroUno = Number(prompt("ingrese un número"))
const numeroDos = parseInt(prompt("ingrese otro número"))

document.write(`La suma de ${numeroUno} y ${numeroDos} es ${numeroUno+numeroDos}`);

*/

/*
//--> Falta hacer un programa que pida nombre y apellido y dé el nombre completo

const solonombre = prompt ("ingrese su nombre")
console.log (solonombre)

const soloapellido = prompt ("ingrese su apellido")
console.log (soloapellido)

//document.write(solonombre + " " + soloapellido)

//Interpolación de variables

document.write(`${solonombre} ${soloapellido}`)

//Soy una dura JUEPUTAAAA 
*/

//DESAFIO DE HOY <-- Hacer un programa que reciba del usuario un número y muestre si es 0 o si es positivo o si es negativo.

/*let numeroSecreto = prompt("ingrese cualquier número");
console.log(numeroSecreto)

switch(numeroSecreto) {
    case 1 (""):
     document.write("No hay número");
      break;
    case 2 (0):
     document.write("el número ingresado es 0");
      break;
    case 3 (numeroSecreto <=1):
     document.write("el número ingresado es positivo");
      break;
    default (numeroSecreto > "0");
    break;
}*/

// Otra opción

/*

let numeroSorpresa = Number(prompt ('ingrese cualquier número'))
console.log (numeroSorpresa)

if (numeroSorpresa == 0){
    document.write('el número es cero');
    } else if (numeroSorpresa <= 1) {
        document.write('el número es positivo');
    } else (numeroSorpresa > 0) {
        document.write('el número ingresado es negativo');
    }
  
Hacer un prigrama que reciba del usuario dos números y muestre cuál es el número mayor y cuál es el número menor

*/

let tipodeNumero = Number(prompt('ingrese un número'))
console.log (tipodeNumero)

let tipodeNumero1 = Number(prompt('ingrese un número'))
console.log (tipodeNumero1)

if (tipodeNumero < tipodeNumero1) {
    document.write('el número mayor es ' tipodeNumero);
}
else (tipodeNumero1 < tipodeNumero){
    document.write('el número mayor es ' tipodeNumero1);
}







