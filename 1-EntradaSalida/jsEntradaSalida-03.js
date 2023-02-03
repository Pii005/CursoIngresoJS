/* Pilar Flores 
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
//function mostrar()
{
	//txtIdNombre"
	//let nombreIngresado;
	// dice anda al decumente HTML agarra el ID y ponele en el alert
	//nombreIngresado = document.getElementById("txtIdNombre").value;

	//alert(nombreIngresado);

}

/*ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo.*/
//pedir un producto por prompt, tomar el precio por id y por alert mostar todo con 30%
function mostrar() 
{
	let descripción;
	let precio; 
	let aumento;
	let aumentoFinal; 

	aumento = 30
	descripción = prompt ("descripcion");

	precio = document.getElementById("txtIdNombre").value;

	precio = parseInt (precio);

	aumentoFinal = precio + precio * aumento/100;

	alert ("el producto " + descripción + "da: " + aumentoFinal  );



}