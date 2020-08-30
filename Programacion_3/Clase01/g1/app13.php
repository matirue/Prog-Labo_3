<?php
/*Cargar los tres arrays con los siguientes valores y luego ‘juntarlos’ en uno. Luego mostrarlo por
pantalla.
“Perro”, “Gato”, “Ratón”, “Araña”, “Mosca”
“1986”, “1996”, “2015”, “78”, “86”
“php”, “mysql”, “html5”, “typescript”, “ajax” 
Para cargar los arrays utilizar la función array_push. Para juntarlos, utilizar la función
array_merge.*/

$animales = array();
$year = array();
$lenguajes = array();

array_push($animales, "Perro", "Gato", "Ratón", "Araña", "Mosca");
array_push($year, "1986", "1996", "2015", "78", "86");
array_push($lengueajes, "php", "mysql", "html5", "typescript", "ajax");

$array = array_merge($animales, $year, $lenguajes);

foreach ($array as $aux)
{        
        echo "<br/> " . $aux;
}
?>