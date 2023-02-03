/* Pilar Flores 
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
/*saco perimetro area=base x altura
perimero = suma de todos los lados
base+altura+altura+base
para 3 hilos de alambre se tiene que hacer perimetro x3
*/

function Rectangulo () 
{
//variables 
    let largo;
    let ancho;
    let perimetro;
    let perimero;

    //busco los datos html

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
//parseo con float para que tome decimales 
    largo = parseFloat (largo);
    ancho = parseFloat (ancho);
//saco perimetro 
    perimetro = (largo * 2 + ancho * 2);

    alambre = perimetro * 3;
//pruebo
    console.log ("El alambre es" + alambre);

    alert("El alambre es " + alambre); 
//listo
}
function Circulo () 
{
	//longitud = perimetro = 2* pi * R (pi: 3,14)
//variables 
    let largo;
    let ancho;
    let radio;
    let pi;
    let perimetro;

//html y pi
    pi = 3,14;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;

    largo = parseFloat (largo);
    ancho = parseFloat (ancho);
//cuenta
    perimetro = 2 * pi * radio;
// pruebo 
    console.log(perimetro);

    alert ("El radio del terreno es: " + perimetro);
//listo 
}
function Materiales () 
{
    /*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
    debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
    */
    //sacar area largo * ancho.
    //para sacar las bolsas de cemento * metro cuadrado por cemento(2) y luego por cal(3)
//cuantas bolsas se necesitas por las medidas
//variables
    let area;
    let largo;
    let ancho;
    let bolsas;
    let cal;
    let materiales;
    let mensaje;

    bolsas = 2;
    cal = 3;
    //ID
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
//parse
    largo = parseFloat (largo);
    ancho = parseFloat (ancho);
//dato area
    area = largo * ancho; 

   // console.log ("el area es " + area);
    //va :)

    //poner cuanto necesito por 1x1
    materiales = area * bolsas;
    materiales2 = area * cal;

    mensaje = "se necesitan de cemento: " + materiales + " y de cal: " + materiales2;
    
    alert (mensaje);

}