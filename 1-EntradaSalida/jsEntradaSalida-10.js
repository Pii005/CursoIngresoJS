/*Pilar Flores e
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
function mostrarAumento()
{
	//tomar Id, parseint, importe de descuento %
	//declaro varibles
	let numeroUno;
	let resultado;
	let descuento;
	let porcentajeAplicado;
	//marco el descuento
	descuento = -25;
	//marco de donde saco el dato para mi variable
	numeroUno = document.getElementById("txtIdImporte").value;
	//parseo el numero
	numeroUno = parseInt (numeroUno);
	//hago el decuento
	porcentajeAplicado = numeroUno * descuento /100;
	//agrego el descuento al numero
	resultado = numeroUno + porcentajeAplicado;
	//mensaje
	resultado = "Resultado " + resultado;
	//por donde sale el mensaje 
	document.getElementById("txtIdResultado").value = resultado;


}
*/
/*
Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"
tomo Id, parseo y pedir un descuento, cuadro 
*/

function mostrarAumento()
{
	let importe;
	let descuento;
	let total;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;

	descuento = prompt ("¿cual es tu decuento?");	

	importe = parseInt (importe);
	descuento = parseInt (descuento);

	total = importe + importe * - descuento/100;

	resultado = "Resultado: " + total;

	document.getElementById("txtIdResultado").value = resultado;


}