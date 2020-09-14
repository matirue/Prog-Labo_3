<?php

if(isset($_POST["accion"]))
{
    $accion = $_POST["accion"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $legajo = $_POST["legajo"];
    $legBuscar = $_POST["legBuscar"];    
} 
else if(isset($_GET["accion"]))
{
    $accion = $_GET["accion"];
}   
else
{
    $accion = null;    
    $nombre = null;
    $apellido = null;
    $legajo = null;
    $legBuscar = null;
}
       
    
switch($accion)
{
    case "alta":
        $archivo = fopen("./archivos/alumnos.txt", "a");//a - write si no existe lo crea, si existe  agrega 
        //$cargar = "Legajo: " . $legajo . " - Persona: " . $apellido . ", " . $nombre;
        $cargar = $legajo . " " . $apellido . " " . $nombre;
        if(fwrite($archivo, $cargar . "\r\n") > 0)//retorna la cant de bytes escrito
        {
            echo "Se creo correctamente!!!!";
        }
        fclose($archivo);
        break;

    case "listado":
        $archivo = fopen("./archivos/alumnos.txt", "r");//lo abto en lectura
        while(!feof($archivo))
            echo fgets($archivo);         
        
        fclose($archivo);
        break;

    case "buscar":
        $leg =  $_POST["legBuscar"];
        echo BuscarLegajo("./archivos/alumnos.txt", $leg);
        break;

    default:
        break;    
}


/**************************************/

function BuscarLegajo($path, $legajo) 
{
    $arc = fopen($path, "r");

    while(!feof($arc))
    {
        $linea = fgets($arc);

        $array = explode(" ", $linea);
        
        $numLinea = $array[0];

        if($numLinea == $legajo)
            return $linea;
        else
            return "El legajo: " . $legajo . " no se encuentra cargado.";

        fclose($arc);        
    }
}
?>