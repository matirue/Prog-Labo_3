<?php
//aca esta el emtodo donde al pulsar letras recorre el archivo de nombres.txt y lee las sulicitud
//donde coinciden los caracteres ingresados

//              palabra que estoy escribiendo
$palabra = isset($_POST["palabra"]) ? $_POST["palabra"] : NULL;

$nombres = "";
$a = fopen("nombres.txt","r");

while(!feof($a)){//lee el archivo
	$nombre = fgets($a); 
	if(strncmp($nombre, $palabra, strlen($palabra)) == 0)
		$nombres .=  $nombre . "<br/>";
}
fclose($a);

echo $nombres;

?>