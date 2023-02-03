/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro variables
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;

    //resumo (de donde saco los numero y los parseo)
    precioUno = parseInt (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);
//SUMO
    sumaPrecios = precioUno + precioDos + precioTres;
//comentario a la consola q anda
    console.log ("La suma total de precio es "+ sumaPrecios);
    
    alert("la suma es "+sumaPrecios);
 //listo :)
}
function Promedio () 
{
    //B.Ingresar tres precios de productos y mostrar el promedio de los mismos.
	let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let promedio;

    precioUno = parseInt (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);

    sumaPrecios = precioUno + precioDos + precioTres;
//copio lo de arriba y pego aca perfecto
//saco promedio, divido por los 3 precios
    promedio = sumaPrecios / 3;
//pruebo
    alert("El promedio de los precios es "+ promedio);

    console.log ("El promedio de los precios es "+ promedio);
//perfecto :)
}
function PrecioFinal () 
{
    //C.ingresar tres precios de productos y mostrar precio final (más IVA 21%)
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let precioConIVA;
    let final;
    let IVA;
//marco cuanto vale el IVA
    IVA = 21;

    precioUno = parseInt (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);

    sumaPrecios = precioUno + precioDos + precioTres;
//copio saco la variable de promedio
//saco IVA
//   21                precios      precios con IVA
    precioConIVA = sumaPrecios + (sumaPrecios * IVA/100);
    

    alert("El precio final es "+ precioConIVA);
    
    console.log ("El precio final es "+ precioConIVA);
//pruebo, prefecto :)
}