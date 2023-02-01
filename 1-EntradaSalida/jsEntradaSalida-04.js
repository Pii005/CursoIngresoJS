/* Pilar Flores 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let datoIngresado;
	let cajita;

	datoIngresado = prompt("ingresar dato");

	document.getElementById("txtIdNombre").value = datoIngresado;

	
}

