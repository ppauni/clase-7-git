//Ejercicio: Calculadora de Descuento - 
// Escribe un prog que calcule el precio final de un producto 
//después de aplicar un descuento. Pide al usuario que ingrese el
//precio original del producto y el porcentaje de descuento, y 
//muestra el precio final.

//Procedimiento: 

const prompt = require ("prompt-sync")( );

//1- Pedir el precio original del producto
const precioOriginal = parseFloat(prompt("Ingrese el precio original del producto"));

//2- Pedir el % de descuento
const porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento"));

//3- Calcular el % de descuento
let descuento = precioOriginal * (porcentajeDescuento / 100);

//4- Calcular el precio final
let precioFinal = precioOriginal - descuento;

//5- Mostrar el precio final al usuario
console.log("El precio final con descuento es: $$",(precioFinal.toFixed(2)));

