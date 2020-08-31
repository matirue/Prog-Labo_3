<?php
/* Crear una función llamada EsPar que reciba un valor entero como parámetro y devuelva TRUE si
este número es par ó FALSE si es impar.
Reutilizando el código anterior, crear la función EsImpar.*/
function EsPar($valor)
{
    if($valor %2 == 0)
       return true;
    return false;   
}

function EsImpar($valor)
{
    return !EsPar($valor);
}

if(EsPar(2))
    echo "<br/> Par";
else
    echo"<br/> Impar";

if(EsPar(3))
    echo "<br/> Par";
else
    echo"<br/> Impar";


if(EsImpar(4))
    echo "<br/> Impar";
else
    echo"<br/> Par";    

if(EsImpar(5))
    echo "<br/> Impar";
else
    echo"<br/> Par";    
?>