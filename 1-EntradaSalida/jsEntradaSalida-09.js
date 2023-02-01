/*Pilar Flores 
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//toaar el ID ponerle un 10% y mandarlo a resultado

	let numero;
	let resultado;
	let mensaje;

	numero = document.getElementById("txtIdSueldo").value;

	resultado = numero + 10/100;

	resultado = parseInt (resultado);

	document.getElementById("txtIdResultado").value = resultado;

	mensaje = resultado;

	alert (mensaje);
	

}
