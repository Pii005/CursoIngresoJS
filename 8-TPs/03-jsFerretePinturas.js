/* Pilar Flores 
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
/* cambiar de f a c
(x - x) * 5 / 9 = total (32 °F − 32) × 5/9
c a f
(x * 5 / 9) + x = total (32 °C × 9/5) + 32 =  

*/
    let Fahren;
    let centígrados;
    let resultado;
    let temperatura;
    let mensaje;

    temperatura = document.getElementById("txtIdTemperatura").value;

    fahren = 32;
    resultado = (fahren - temperatura) * 5/9;

    mensaje = temperatura +" faherenheit son " + resultado + " centigrados";

      alert (mensaje);




}

function CentigradosFahrenheit () 
{
	let Fahren;
    let centígrados;
    let resultado;
    let temperatura;
    let mensaje;

    temperatura = document.getElementById("txtIdTemperatura").value;
//(20 °C × 9/5) + 32 = 
    Fahren = 32;
    resultado = (temperatura * 9/5) + fahren;

    mensaje = temperatura +" centigrados son " + resultado + " faherenheit";

      alert (mensaje);
}
