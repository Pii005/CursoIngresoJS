/*Pilar Flores 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// tomar los numero id, parseInt y operaciones
	let numeroUno;
	let numeroDos;
	let numeroUnoTexto;
	let numeroDosTexto;
	let mensaje;

	numeroUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numeroDosTexto = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt (numeroUnoTexto);
	numeroDos = parseInt (numeroDosTexto);

	mensaje = "La suma es " + (numeroUno + numeroDos);

	alert(mensaje);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let numeroUnoTexto;
	let numeroDosTexto;
	let mensaje;

	numeroUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numeroDosTexto = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt (numeroUnoTexto);
	numeroDos = parseInt (numeroDosTexto);

	mensaje = "la resta es " + (numeroUno - numeroDos);

	alert(mensaje);


}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let numeroUnoTexto;
	let numeroDosTexto;
	let mensaje;

	numeroUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numeroDosTexto = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt (numeroUnoTexto);
	numeroDos = parseInt (numeroDosTexto);

	mensaje = "La multiplicacion es " + (numeroUno * numeroDos);

	alert (mensaje);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let numeroUnoTexto;
	let numeroDosTexto;
	let mensaje;

	numeroUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numeroDosTexto = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt (numeroUnoTexto);
	numeroDos = parseInt (numeroDosTexto);

	mensaje = "la division es " + (numeroUno / numeroDos);

	alert (mensaje);
	
}

