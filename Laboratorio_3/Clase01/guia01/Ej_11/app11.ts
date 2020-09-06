/*Definir una función que determine si la cadena de texto que se le pasa como parámetro
es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural" . */
function Palíndromo(oracion: string): void 
{
    oracion = oracion.toLocaleLowerCase();
    oracion = oracion.replace(/\s/g, "");
    var bandera: number = 0;
    var i: number = 0;
    
    for (var j: number = (oracion.length - 1); j >= (oracion.length / 2); j--) 
    {
        //console.log(oracion.charAt(i) + oracion.charAt(j));
        if (oracion.charAt(i) == oracion.charAt(j)) 
        {

        } 
        else
        {
            bandera = 1;
            break;
        }
        i++;
    }
    if (bandera == 0)
    {
        console.log("Es un palíndromo");
    } 
    else 
    {
        console.log("NO es un palíndromo");
    }

}

Palíndromo("paap");
Palíndromo("larutanosaportootropasonatural");
Palíndromo("xd");

Palíndromo("Larutanosaportootropasonatural");
Palíndromo("La ruta nos aporto otro paso natural");
