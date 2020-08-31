<?php
/* Realizar las líneas de código necesarias para generar un Array asociativo y otro indexado que
contengan como elementos tres Arrays del punto anterior cada uno. Crear, cargar y mostrar los
Arrays de Arrays.*/
$animales = array();
$year = array();
$lenguajes = array();

array_push($animales, "Perro", "Gato", "Ratón", "Araña", "Mosca");
array_push($year, "1986", "1996", "2015", "78", "86");
array_push($lenguajes, "php", "mysql", "html5", "typescript", "ajax");

//$array = array_merge($animales, $year, $lenguajes);

$array_asociativo = array('Array animales' => $animales, 'Array años' => $year, 'Array lenguajes' => $lenguajes);

echo "<br/> <h2>Array Asociativo:</h2>";
foreach ($array_asociativo as $array => $campos)
{        
        echo "<br/><br/> " . $array;
        foreach ($campos as $campos => $info) 
        {
            //echo "<br/> " . $campos . ": " . $info;
            echo "<br/> > " . $info;
        }
}
echo "<br/><br/>";
$array_indexeado=array($animales, $year, $lenguajes);
echo "<h2> Array indexeado: </h2>";

for ($i=0; $i < count($array_indexeado); $i++) 
{ 
    echo "<br/>" . $i;
    for ($j=0; $j < count($array_indexeado[$i]); $j++)
    { 
        echo "<br/> > " .$array_indexeado[$i][$j] ;
    }
}
/*
foreach ($array_indexeado as $array => $campos)
{        
        echo "<br/> " . $array;
        foreach ($campos as $campos => $info) 
        {
            //echo "<br/> " . $campos . ": " . $info;
            echo "<br/> > " . $info;
        }
}
*/
?>