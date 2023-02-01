/*Pilar Flores e
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//tomar Id, parseint, importe de descuento %

	let numero;
	let resultado;
	let mensaje;

	numero = document.getElementById("txtIdImporte").value;

	numero = parseInt (numero);
	resultado = parseInt (resultado);

	resultado = numero - 25/100;
 
	document.getElementById("txtIdResultado").value = resultado;

	mensaje = resultado;

	alert(mensaje);
}
