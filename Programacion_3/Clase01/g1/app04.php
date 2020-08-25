<?php
#Confeccionar un programa que sume todos los números enteros desde 1 mientras la suma no
#supere a 1000. Mostrar los números sumados y al finalizar el proceso indicar cuantos números
#se sumaron.
$numero = 0;

for ($i=0; $i < 1000; $i++) { 
    if($numero<1000)
       $numero += $i;
    else
    {
        if($numero>1000)
        {
            $numero-=$i;
            break;
        }
    }       
}

echo "<br/> Suma total: ", $numero . 
     "<br/> Cantidad de numeros sumados: ", $i;    
     
?>