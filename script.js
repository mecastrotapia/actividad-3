//let nombre = "Juan";
//const edad = 25;
//console.log (`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

//let suma = 10 + 5
//console.log (`La suma de 10 +5 es ${suma}`);

//if (edad >=18 ){
//    console.log ("Eres mayor de edad");

//}else{

//    console.log ("Eres menor de edad");
//}

 
//let nombre = prompt ("ingresa tu nombre")
//if (nombre === "Mónica")
  //  console.log (`Hola, ${nombre}`)
//else if (nombre === "Juan") {
  //  console.log (`Bienvenido, ${nombre}`)
//}
//else if (nombre === "Carlos") {
  //  console.log (`Hi, ${nombre}`)
//}
//else {
  ///  console.log (`No te conozco, bye`)
//}

//let suma = 50 + 25
 // console.log (`La suma de 50 + 25 es ${suma}`);

//for(let i= i) 

//Escribe un programa que verifique si un número es positivo o negativo.

/*
numero = float(input("Ingresa un número: "))


if (numero > 0)
    console.log ("El número es positivo.")
else if (numero < 0)
    console.log ("El número es negativo.")
else{
     console.log ("El número es cero.")
    }

/*Usa switch para imprimir el día de la semana según un número del 1 al 7.*/


// Solicitar al usuario un número del 1 al 7
//let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

// Usar un switch para imprimir el día de la semana correspondiente
// Solicitar al usuario un número del 1 al 7
//let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

// Usar un switch para imprimir el día de la semana correspondiente
//switch (numero) {
    
//case 1:
    //    alert("Lunes");
    //    break;
   // case 2:
      //  alert("Martes");
        //break;
    //case 3:
      //  alert("Miércoles");
        //break;
    //case 4:
      //  alert("Jueves");
        //break;
    //case 5:
      //  alert("Viernes");
     //   break;
   // case 6:
     //   alert("Sábado");
    //    break;
    //case 7:
     //   alert("Domingo");
     //   break;
    //default:
      //  alert("Número inválido, por favor ingresa un número entre 1 y 7.");
       // break;
//}

/*

Haz un bucle for que imprima los números del 1 al 10.

Bucle for que imprime los números del 1 al 10


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

Crea un programa que calcule el factorial de un número usando while.
Escribe un condicional que determine si una persona puede votar según su edad.
Imprime los números pares entre 1 y 20 con un bucle for.
Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).
Haz un programa que pida dos números y los sume si ambos son positivos.
Escribe un bucle while que cuente de 10 a 1 en orden descendente.
Crea una calculadora básica que permita sumar o restar según el operador ingresado.*/

//for (let i = 1; i <= 10; i++) {
    console.log(i);
//}


// Solicitar al usuario un número
let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));

// Inicializar el resultado como 1 (ya que el factorial de 0 es 1)
let factorial = 1;

// Usar un bucle while para calcular el factorial
let i = numero;
while (i > 1) {
    factorial *= i;  // Multiplica el factorial actual por el valor de i
    i--;  // Decrementa i en cada iteración
}

// Mostrar el resultado
console.log ("El factorial de " + numero + " es " + factorial);



//Crea una calculadora básica que permita sumar o restar según el operador ingresado.*/

// Solicitar al usuario los dos números y el operador
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let operador = prompt("Ingresa el operador (+ o -):");

// Inicializar la variable para almacenar el resultado
let resultado;

// Usar una estructura condicional para realizar la operación según el operador ingresado
if (operador === "+") {
    resultado = num1 + num2;  // Suma
} else if (operador === "-") {
    resultado = num1 - num2;  // Resta
} else {
    console.log("Operador no válido. Usa '+' o '-'.");
}

// Mostrar el resultado
if (resultado !== undefined) {
    console.log("El resultado de " + num1 + " " + operador + " " + num2 + " es: " + resultado);
}

