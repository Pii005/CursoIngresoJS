/*Pilar Flores
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*
	tomar numerosID y ponerlos en enteros (parseInt) y sumar
	sale en ALERT
	*/
	let numeroUnoTexto;
	let numeroDosTexto;
	let numeroUno;
	let numeroDos;
	let mensaje;

	numeroUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numeroDosTexto = document.getElementById("txtIdNumeroDos").value;
	
	numeroUno = parseInt(numeroUnoTexto);
	numeroDos = parseInt(numeroDosTexto);
 
	mensaje = "La suma es " + (numeroUno + numeroDos);

	alert(mensaje);
}

