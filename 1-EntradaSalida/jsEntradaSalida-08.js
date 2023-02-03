/*Pilar Flores 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
//function SacarResto()
//{
	//let numeroUno;
   // let numeroDos;
    //let mensaje; 


	//numeroUno = document.getElementById("txtIdNumeroDividendo").value;
    //numeroDos = document.getElementById("txtIdNumeroDivisor").value;

	//numeroUno = parseInt (numeroUno);
	//numeroDos = parseInt (numeroDos);

	//mensaje = "El resto es "+(numeroUno % numeroDos);

	//alert (mensaje);

//}
/*ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El resto de los numeros (el primero en modulo del segundo)*/
function SacarResto()
{
	let numeroUno;
	let numeroUnoTexto;
	let numeroDos;
	let numeroDosTexto;
	let suma;
	let promedio;
	let resto;
	let mensaje;
	let mensaje2;
	let mensaje3;

	numeroUnoTexto = document.getElementById("txtIdNumeroDividendo").value;
	numeroDosTexto = document.getElementById("txtIdNumeroDivisor").value;

	numeroUno = parseInt (numeroUnoTexto);
	numeroDos = parseInt (numeroDosTexto);

	suma = numeroUno + numeroDos;

	mensaje = "La suma es " + suma;

	promedio = suma / 2;

	mensaje2 = "El promedio es " + promedio;

	resto = (numeroUno % numeroDos);

	mensaje3 = "El resto es " + resto;
	
	alert (mensaje + mensaje2 + mensaje3);

}