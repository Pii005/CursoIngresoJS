/*pilar Flores
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*
function mostrar()
{	
	//agarro de la cajita los datos de n y e y los conca
	let datoNombre;
	let datoEdad;
	let mensaje;

	datoNombre = document.getElementById("txtIdNombre").value;
	datoEdad = document.getElementById("txtIdEdad").value;


	alert(mensaje + mensaje2);
}
*/
/*
Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan
*/

function mostrar()
{
	let nombre;
	let apellido;
	let edad;
	let mensaje;

	apellido = prompt ("¿Cuál es su apellido?");

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	mensaje = apellido + ", usted se llama " + nombre + " y tiene " + edad;

	alert (mensaje);


}