<?php
/*Mostrar por pantalla las primeras 4 potencias de los números del uno 1 al 4 (hacer una función que
las calcule invocando la función pow).*/
function Potencia()
{
    for ($i= 1; $i <5 ; $i++)
    { 
        echo " <br/><br/> Potencia de: " . $i . ": ";
        for ($j=0; $j < 4; $j++) 
        { 
            echo "<br> a la " . $j . " es " . pow($i, $j);            
        }
    }
}
 Potencia();

?>