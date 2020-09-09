<?php
//MUESTRA LA INFO CONTENIDA EN $_GET
echo "GET<br/>";
var_dump($_GET);
echo "<br/>";

//MUESTRA LA INFO CONTENIDA EN $_POST
echo "POST<br/>";
var_dump($_POST);
echo "<br/>";

//MUESTRA LA INFO CONTENIDA EN $_REQUEST
echo "REQUEST<br/>";
var_dump($_REQUEST);

//recupero un valor en este caso de clave, ahora si lo puedo mostrar con echo
echo "<br>" . $_GET["clave"];
echo "<br>" . $_GET["c"];  //esta no existe, tira un warnig/notice

//se recomienda checkear antes de usar el get
if(isset($_GET["c"]))//isset retorna un boleando si esta o no el arg
{
    echo $_GET["c"];
}
else
{
    echo "no esata C";
}
