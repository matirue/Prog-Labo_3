/*Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

CheckCadena("hola");
CheckCadena("HOLA");
CheckCadena("hoLA");


function CheckCadena(cadena:string):void
{
    if(cadena == cadena.toLocaleLowerCase())
       console.log("Cadena de minusculas");
    else if(cadena == cadena.toLocaleUpperCase())
       console.log("Cadena de MAYUSCULAS");
    else
       console.log("Cadena con MAYUSCULAS y minusculas");
}