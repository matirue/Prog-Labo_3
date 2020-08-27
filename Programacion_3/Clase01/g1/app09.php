<?php
/**Definir un Array de 5 elementos enteros y asignar a cada uno de ellos un número (utilizar la
función rand). Mediante una estructura condicional, determinar si el promedio de los números
son mayores, menores o iguales que 6. Mostrar un mensaje por pantalla informando el
resultado. */

$array = array(rand(0,10), rand(0,10), rand(0,10), rand(0,10), rand(0,10));
$numoeroTotal = 0;

for ($i=0; $i < 5; $i++) 
    $numoeroTotal += $array[$i];    
    
$promedio = $numoeroTotal / 5;

if($promedio < 6)
    echo "Promedio menor a 6";
else if($promedio == 6)
    echo "Promedio igual a 6";
else 
    echo "Promedio mayor a 6";

?>