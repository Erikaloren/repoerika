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
  
Hacer un programa que reciba del usuario dos números y muestre cuál es el número mayor y cuál es el número menor

*/
/*

let tipodeNumero = Number(prompt('ingrese un número'))
console.log (tipodeNumero)

let tipodeNumero1 = Number(prompt('ingrese un número'))
console.log (tipodeNumero1)

if(isNaN (tipodeNumero,tipodeNumero1)){
    document.write("esto no es un número")
} else {
    if (tipodeNumero > tipodeNumero1) {
        document.write('el número mayor es ' + tipodeNumero);
    } else {
        document.write('el número mayor es ' + tipodeNumero1);
    }
}
/*

if (tipodeNumero > tipodeNumero1) {
    document.write('el número mayor es ' + tipodeNumero);
} else {
    document.write('el número mayor es ' + tipodeNumero1);
}

//DONE MUAHAHAHHAHHAHAHA AAAAAAHAHAHAHHAHA */

/*Hacer un programa que pida un número al usuario y muestre los números pares desde 1 hasta el número ingresado 
Cómo se muestran los números pares? D: 

let Numerito = Number(prompt ('ingrese cualquier número'))
console.log (Numerito)

for (let i = 1; i <=Numerito; i++) {
    if (i % 2 === 0) {
        document.write(i + ", ");
        console.log("blabla", i);
}
}

PUDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

Hacer un programa que solicite al usuario un número de 0 a 6 (manejar errores - es decir, el número no puede ser 
diferente de 0-6). Con ese número, mostrar el día de la semana correspondiente según arreglo "días"

0 - domingo
6 - sábado (and so on)

Yo creo que aquí usaría Array

Hacer un programa que solicite al usuario un día de la semana (string) y le retorne el nombre del día en inglés

Aquí podría asignarle un valor a cada día :thinking:

*/
/*

*/


let Numerito = Number(prompt ('ingrese cualquier número'))
console.log (Numerito)

const Days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
]

if (Numerito <0 ) {
    document.write('El número ingresado no es válido')
} else if (Numerito >6 ) {
    document.write('El número ingresado no es válido')
} else {
    console.log (Days[Numerito]);
    document.write ('El día escogido es: ' + Days[Numerito]);
}

/*
if (Numerito % 2) {
    document.write("xx")
}*/