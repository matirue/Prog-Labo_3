<?php
/**Imprima los valores del vector asociativo siguiente usando la estructura de control foreach:
$v[1]=90; $v[30]=7; $v['e']=99; $v['hola']= 'mundo'; */
$v[1]=90; 
$v[30]=7;
$v['e']=99; 
$v['hola']= 'mundo';

echo " Solo valores ";
foreach($v as $valor)
{
    echo "<br> Valor: " . $valor;
}

echo "<br/><br/> Indice -- Valor ";
foreach($v as $valorAsociado => $valor)
{
    echo " <br/> " . $valorAsociado . " -- " . $valor;
}
?>