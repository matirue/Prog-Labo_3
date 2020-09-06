<?php

include "Ej19\Rectangulo.php";
include "Ej19\Triangulo.php";

$triangulo=new Triangulo(4,4);
$rectamgulo=new Rectangulo(4,5);


echo "Rectangulo: ";
echo $rectamgulo->ToString() . "<br><br>" . $rectamgulo->Dibujar();

echo "<br><br> Triangulo: "." <br>";
echo $triangulo->ToString() . "<br><br>" . $triangulo->Dibujar();

?>