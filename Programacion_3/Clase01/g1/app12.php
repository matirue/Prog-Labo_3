<?php
/* Realizar las líneas de código necesarias para generar un Array asociativo $lapicera, que
contenga como elementos: ‘color’, ‘marca’, ‘trazo’ y ‘precio’. Crear, cargar y mostrar tres
lapiceras. */
$lapicera_1 = array('color' => "negro" , 'marca' => "marcaUno", 'trazo' => "0.5" , 'precio' => 1111);
$lapicera_2 = array('color' => "rojo" , 'marca' => "marcaDos", 'trazo' => "0.6" , 'precio' => 2222);
$lapicera_3 = array('color' => "verde" , 'marca' => "marcaTres", 'trazo' => "0.7" , 'precio' => 3333);

$arrayLapicera = array($lapicera_1, $lapicera_2, $lapicera_3);

echo "Lapiceras: ";

foreach ($arrayLapicera as $lapicera => $campos) 
{
    //echo "<br/><br/>  + " . $lapicera . "  --  " . $campos;
    echo "<br/><br/> Lapicera " . $lapicera;

    foreach ($campos as $info => $aux)
    {        
        echo "<br/> " . $info . ": " . $aux;
    }
}
?>