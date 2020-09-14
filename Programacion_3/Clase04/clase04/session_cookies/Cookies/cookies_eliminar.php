<?php

setcookie("TestCookie1", "",time()-3600);//con el mismo nombre se le asigna un tiempo negaitvo

echo "<br/>Despu&eacute;s de eliminar...<br/>";

var_dump($_COOKIE);

?>

<a href="../index.html" >Volver al Inicio</a>