<?php
/*Realizar un programa que en base al valor numérico de la variable $num, pueda mostrarse por
pantalla, el nombre del número que tenga dentro escrito con palabras, para los números entre
el 20 y el 60.*/ 
$num = rand(0, 100);
//error en php7
if($num >= 20 && $num <= 60)
{
    echo $num;
    $f = new NumberFormatter('en', NumberFormatter::SPELLOUT);
    //var_dump($f -> format($num));
    echo $f -> number_format($num);          
}
else
    echo $num;

?>