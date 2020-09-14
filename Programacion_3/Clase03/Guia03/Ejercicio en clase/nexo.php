<?php


$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$legajo = $_POST["legajo"];

if(isset($_POST["accion"]))
{
    $accion = $_POST["accion"];    
} 
else if(isset($_GET["accion"]))
{
    $accion = $_GET["accion"];
}   
else
    $accion = null;   
    
switch($accion)
{
    case "alta":
        $archivo = fopen("./archivos/alumnos.txt", "a");//a - write si no existe lo crea, si existe  agrega 
        $cargar = "Legajo: " . $legajo . " - Persona: " . $apellido . ", " . $nombre;
        
        if(fwrite($archivo, $cargar . "\r\n") > 0)//retorna la cant de bytes escrito
        {
            echo "Se creo correctamente!!!!";
        }
        fclose($archivo);
        break;

    case "listado":
        $archivo = fopen("./archivos/alumnos.txt", "r");
        while(!feof($archivo))
            echo fgets($archivo);         
        
        fclose($archivo);
        break;

    default:
        break;    
}

?>