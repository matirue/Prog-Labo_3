<?php
/**Generar una aplicación que permita cargar los primeros 10 números impares en un Array.
Luego imprimir (utilizando la estructura for) cada uno en una línea distinta (recordar que el
salto de línea en HTML es la etiqueta <br/>). Repetir la impresión de los números utilizando
las estructuras while y foreach. */

$lista = array();

$a = 0;
$b = 0;

while(count($lista) < 10)
{
    if($a % 2 != 0)
    {
        $lista[$b] = $a;
        $b++;  
    }
    $a++;
}

echo " Lista por FOR: ";
for ($i=0; $i < 10; $i++) 
{ 
    echo "<br/> > " . $lista[$i];
}

echo "<br/><br/> Lista por WHILE: ";

$a = 0;
while($a < 10)
{
    echo "<br/> > " . $lista[$a];
    $a++;
}

echo "<br/><br/> Lista por FOREACH: ";
foreach ($lista as $aux)
{
    echo "<br/> > " . $aux;
}

?>