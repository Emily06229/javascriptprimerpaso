/*alert("Hola desde la alerta de JS");
console.log("Hola desde la consola de JS");
document.writeln("Hola desde el documento de JS");

Tipos de variables en JS
JS me permite declarar variables sin indicar el tipo de variable al cual estamos declarando
var-Este tipo de variable es global y se puede usar en cualquier parte del código
let-Este tipo de variables es más actual y se puede utilizar dentro de un bloque de código, es decir, dentro de una función o 
un bucle, esta variable solo esta disponible dentro de ese bloque de código 
const- Este tipo de variable es una constante, es decir, que no se puede cambiar su valor en el código,
no se puede volver asignar un valor a esa constante. Ejempo const pi=3.14;
*/
//Variable de tipo globar
//var nombre = "Juan";
//document.writeln("<br>"+ "El nombre del estudiante es: " + nombre + "<br>");
//tipo de variable
//document.writeln("El tipo de variable es; " + typeof nombre + "<br>");
// variable tipo local o let
/*function mostrarNombre(){
    let nombre ="Elvis";
    document.writeln("El nombre del estudiante es: " + nombre + "<br>");
}
//Llamo a la función a ejecutar
mostrarNombre();
document.writeln("El nombre del estudiante es: " + nombre + "<br>");
var edad = 20;
document.writeln("La edad del estudiante es: " + edad + "<br>");
document.writeln("El tipo de variable es; " + typeof edad + "<br>");
var estatura = 1.75;
document.writeln("La estatura del estudiante es: " + estatura + "<br>");    
document.writeln("El tipo de variable es; " + typeof estatura + "<br>");
// Variables de tió booleano
var estudiante = true;
document.writeln("El estudiante es: " + estudiante + "<br>");
// variable de tipo constante
const pi=3.141516;
document.writeln("El valor de pi es: " + pi + "<br>");

/*
Operaciones matemáticas
Suma: +
Resta: -
Multiplicación: *
División:/
Modulo:% 3/2=1  
*/
//var num1=10;
//var num2 = 40;
//var residuo = num1%num2;
//document.writeln("El residuo de la división es ; " + residuo + "<br>");
/*Operadores de asignación:
Igualdad:=
Suma y asignación: += 
Resta y asignación: -=
Multiplicación y asignación: *=
División y asignación ; /=
no igual: !=
Mayor que : >
Menor que : <
mayor o igual que: >=
menor o igual que: <=
 */

/*
Operadores lógicos
AND: &&->EL perro tiene cuatro patas y ladra, Para sufraga se necesita ser mayor de edad y ser ciudadano
OR: ||->Si el día es soleado puedo tomar helado o ir a la playa
NOT:!
 */

/*Ingreso de datos por teclado  
var apellido = prompt("Ingrese su apellido: ");
document.writeln("El apellido es: " + apellido + "<br>");
var nota1 = parseInt(prompt("Ingrese la nota 1: "));
var nota2 = parseInt(prompt("Ingrese la nota 2: "));
var promedio =parseFloat((nota1+nota2)/2);
document.writeln("El promedio es: " + promedio + "<br>");*/
/* Funciones Math- es un objeto incoroporado que tiene propiedades y métodos para constantes y funciones matemáticas
Math.(nombre de la función)
Math.PI-Devuelve el valor de pi
Math.abs()-Devuelve el valor absoluto de un número
Math.ceil()-Redondea un número hacia arriba 4.3 = 5
Math.floor()-Redondea un número hacia abajo 4.7 = 4
Math.round()-Redondea un número al entero más cercano 4.5 = 5
Math.sqrt()-Devuelve la raíz cuadrada de un número
Math.pow()-Devuelve la potencia de un número, Math.pow(2,3)=2^3=8
*/
/*Sentecias de control
If-else: Esta sentencia de control se utiliza para evaluar una condición, si es verdadero ejecuta un bloque de código
y es falso ejecuta otro bloque de código.
if(condicion){
    //bloque de código a ejecutar si la condición es verdadera}
}else{
    bloque de código a ejecutar si la condición es falsa
}
*/

/*Procesamiento de información desde el html mediante js */
function capturaDatos(){
    var nota1=parseInt(document.getElementById("nota1").value);
    var nota2=parseInt(document.getElementById("nota2").value);
    var promedio = parseFloat((nota1+nota2)/2);

    document.writeln("La nota 1 es: " + nota1 + "<br>");
    document.writeln("La nota 2 es: " + nota2 + "<br>");
    document.writeln("El promedio es: " + promedio + "<br>");
}


 // Función para validar si un valor es un número
 function esNumero(valor) {
    // Verificar si el valor está vacío
    if (valor.trim() === '') {
        return false;
    }
    
    // Verificar si es un número
    return !isNaN(Number(valor));
}

// Función principal para encontrar el número mayor
function encontrarMayor() {
    // Obtener los valores ingresados
    var valor1 = document.getElementById('numero1').value;
    var valor2 = document.getElementById('numero2').value;
    var valor3 = document.getElementById('numero3').value;
    
    // Resetear mensajes de error
    document.getElementById('error1').style.display = 'none';
    document.getElementById('error2').style.display = 'none';
    document.getElementById('error3').style.display = 'none';
    
    // Ocultar resultado anterior
    document.getElementById('resultado').style.display = 'none';
    
    // Validar cada campo
    var hayError = false;
    
    if (!esNumero(valor1)) {
        document.getElementById('error1').style.display = 'block';
        hayError = true;
    }
    
    if (!esNumero(valor2)) {
        document.getElementById('error2').style.display = 'block';
        hayError = true;
    }
    
    if (!esNumero(valor3)) {
        document.getElementById('error3').style.display = 'block';
        hayError = true;
    }
    
    // Si hay errores, no continuar
    if (hayError) {
        return;
    }
    
    // Convertir a números
    var num1 = Number(valor1);
    var num2 = Number(valor2);
    var num3 = Number(valor3);
    
    // Encontrar el mayor (sin usar Math.max)
    var mayor = num1;
    
    if (num2 > mayor) {
        mayor = num2;
    }
    
    if (num3 > mayor) {
        mayor = num3;
    }
    
    // Mostrar el resultado en un alert
    alert("El número mayor es: " + mayor);
    
    // También mostrar el resultado en la página
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = "El número mayor es: " + mayor;
    resultadoDiv.style.display = 'block';
}