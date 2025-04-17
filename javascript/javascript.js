alert("Hola desde la alerta de Js");
console.log("Hola desde la consola de Js");
document.writeln("Hola Mundo desde el documento de Js");
/*
Tipos de variables en Js
Js me permite declarar variables sin indicar el tipo de variable al cual estamos declarando 
var-Este tipo de variable es global y se puede utilizar en cualquier código
let-Este tipo de variables es más actual y se puede utilizar dentro de un bloque de código, es decir, dentro de una función o 
un bucle, esta variable solo esta disponible dentro de ese bloque de código.
const-Este tipo de variable es una constante, es decir que no se puede cambiar su valor en el código
no se puede volver asignar un valor a esa constante. Ejemplo const pi=3.14;
*/
//Variable de tipo global
var nombre = "Juan";
document.writeln("El nombre del estudiante es:" + nombre + "<br>");
//Variable tippo local o let
function mostrarNombre(){
    let nombre ="Emily";
    document.writeln("El nombre del estudiante es:" + nombre + "<br>");
    var edad = 20;
    document.writeln("La edad del estudiante es:" + edad + "<br>");
    document.writeln("El tipo de variable es:" + typeof edad + "<br>");
    var estatura = 1.75;
    document.writeln("La estatura del estudiante es:" + estatura + "<br>");
    document.writeln("El tipo de variable es:" + typeof estatura + "<br>");
    //Variable de tipo booleano 
    var estudiante = true;
    document.writeln("El estudiante es:" + estudiante + "<br>");
}
    //Variable de tipo constante
    const pi=3.141516;
    document.writeln("El valor de pi es:" + pi + "<br>");
    pi=2.15;
    document.writeln("El valor de pi es:" + pi + "<br>");
    /*
    Operaciones matemáticas
    Suma: +
    Resta: -
    Multiplicación: *
    División: /
    Modulo:% 3/2=1
    */
   var num1=10;
   var num2=40;
   var residuo = num1%num2;
   document.writeln("El residuo de la división es:" + residuo + "<br>");
   /*Operadores de asignación:
   Igualdad: =
   Suma y asignacción: +=
   Resta y asignación: -=
   Multiplicación y asignación: *=
   División y asignación: /=
   no igual: !=
   Mayor que: >
   Menor que: <
   mayor o igual que: >= 
   menor o igual que: <=
   */

  /*
  Operadores lógicos
  AND: && ->El perro tiene cuatro patas y ladra, Para sufragar se necesita ser mayor de edad y ser ciudadano
  OR:|| ->Si el día es soleado puedo tomar un helado o ir a la playa
  NOT: ! 
  */

/*Ingreso de datos por teclado*/
var apellido = prompt("Ingrese su apellido: ");
document.writeln("El apellido es: " + apellido + "<br>");
var nota1 = parseInt(prompt("Ingrese la nota 1: "));
var nota2 = parseInt(prompt("Ingrese la nota 2: "));
var promedio =parseFloat((nota1+nota2)/2);
document.writeln("El promedio es: " + promedio + "<br>");*/
/* Funciones Math- es un objeto incoroporado que tiene propiedades y métodos para constantes y funciones matemáticas*/
Math.(nombre de la función)
Math.PI-Devuelve el valor de pi
Math.abs()-Devuelve el valor absoluto de un número
Math.ceil()-Redondea un número hacia arriba 4.3 = 5
Math.floor()-Redondea un número hacia abajo 4.7 = 4
Math.round()-Redondea un número al entero más cercano 4.5 = 5
Math.sqrt()-Devuelve la raíz cuadrada de un número
Math.pow()-Devuelve la potencia de un número, Math.pow(2,3)=2^3=8

/*Sentecias de control*/
If-else: Esta sentencia de control se utiliza para evaluar una condición, si es verdadero ejecuta un bloque de código
y es falso ejecuta otro bloque de código.
if(condicion){
    //bloque de código a ejecutar si la condición es verdadera}
}else{
    bloque de código a ejecutar si la condición es falsa
}*/


/*Procesamiento de información desde el html mediante js */
function capturaDatos(){
    var nota1=parseInt(document.getElementById("nota1").value);
    var nota2=parseInt(document.getElementById("nota2").value);
    var promedio = parseFloat((nota1+nota2)/2);

    document.writeln("La nota 1 es: " + nota1 + "<br>");
    document.writeln("La nota 2 es: " + nota2 + "<br>");
    document.writeln("El promedio es: " + promedio + "<br>");
}


// Función para verificar y encontrar el mayor número
function verificarMayor() {
    // Obtener valores de los inputs
    const n1 = document.getElementById("num1").value.trim();
    const n2 = document.getElementById("num2").value.trim();
    const n3 = document.getElementById("num3").value.trim();

    // Validar que los campos no estén vacíos
    if (n1 === "" || n2 === "" || n3 === "") {
        alert("Por favor, ingrese los tres números.");
        return;
    }

    // Convertir a números
    const num1 = Number(n1);
    const num2 = Number(n2);
    const num3 = Number(n3);

    // Validar que sean números válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingrese solo valores numéricos válidos.");
        return;
    }

    // Encontrar el mayor sin usar Math.max
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }

    // Mostrar resultado
    document.getElementById("resultado").textContent = "El número mayor es: " + mayor;
}