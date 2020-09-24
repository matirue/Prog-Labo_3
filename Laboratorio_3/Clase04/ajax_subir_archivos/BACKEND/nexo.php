<?php

$op = isset($_POST["op"]) ? $_POST["op"] : null;


switch ($op) {

    case "subirFoto"://si lo pudo cargar retorna tru

        $Ok = "false";

        $destino = "./fotos/" . date("Ymd_His") . ".jpg";//redirijo ma imageny la renombro añoMesDias_HorasSegundos y lo guarda en Fotos
        
        if(move_uploaded_file($_FILES["foto"]["tmp_name"], $destino) ){
            $Ok = "true" . "-" . $destino;
        }

        echo $Ok;

        break;

    default:
        echo ":(";
        break;
}