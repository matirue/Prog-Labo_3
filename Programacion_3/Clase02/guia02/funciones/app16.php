<?php
/*Realizar el desarrollo de una función que reciba un Array de caracteres y que invierta el orden de las
letras del Array.
Ejemplo: Se recibe la palabra “HOLA” y luego queda “ALOH”. */
function InvertirString ($cadena)
{/*
    $tam = strlen($cadena);
    $aux = $cadena;
    for ($i=0; $i < $tam ; $i++)
    { 
        $cadena[$i] = $aux[$tam - $i-1]; 
    }
    echo $cadena;  */

    for ($i = strlen($cadena) - 1; $i >= 0 ; $i--)
    { 
       echo $cadena[$i];
    }
}

InvertirString("palabra");

?>