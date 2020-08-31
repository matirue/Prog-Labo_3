<?php
/* Crear una función que reciba como parámetro un string ($palabra) y un entero ($max). La función
validará que la cantidad de caracteres que tiene $palabra no supere a $max y además deberá
determinar si ese valor se encuentra dentro del siguiente listado de palabras válidas:
“Recuperatorio”, “Parcial” y “Programacion”. Los valores de retorno serán:
1 si la palabra pertenece a algún elemento del listado.
0 en caso contrario.*/
function ValidarPalabra ($palabra, $max)
{
    if(strlen($palabra) <= $max)
    {
        if($palabra == "Recuperatorio" || $palabra == "Parcial" || $palabra == "Programacion" )
           return  1;
        else
           return  0;
    }
    return -1; 
}

//$dat = ValidarPalabra("Recuperatorio", 15);
$dat = ValidarPalabra("Recuperatorio", 5);
//$dat = ValidarPalabra("bla", 15);
if($dat == 1)
   echo "<h4>La palabra esta en el listado</h4>";
else if($dat == 0)
   echo "<h2>La palabra no esta en el listado</h2>";
else
   echo "<h3>La palabra esta fuera de rango</h3>";   
?>