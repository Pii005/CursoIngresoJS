/*Pilar Flores 
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//tomar el ID ponerle un 10% y mandarlo a resultado
	//declaro varibles
	let numero;
	let porcentajeAplicado;
	let porcentaje;
	let resultado;
	//pongo el porcentaje
	porcentaje = 10;
	//tomo Id para el numero
	numero = document.getElementById("txtIdSueldo").value;
	//parseo el numero
	numero = parseInt (numero);
	//hago el porcentaje al numero
	porcentajeAplicado= numero * porcentaje /100;
	//sumo ese porcentaje
	resultado= numero + porcentajeAplicado;
	//hago el mensaje con el porcentaje 
	 resultado = "Resultado " + resultado + "%";
	//marco donde tiene que salir el resultado
	document.getElementById("txtIdResultado").value = resultado;

	
}
