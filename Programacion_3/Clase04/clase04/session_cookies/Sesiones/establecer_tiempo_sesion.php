<?php
session_start();
 
//tiempo que le doy a la sesion antes de cerrarla
    $inactivo = 15;//expresado en segundos
 
    if(isset($_SESSION['tiempo'])) //check si ya tiene una varianle de session
    {
        //tomo el tiempo actual y le resto el tiempo que engo eb la variable de session
		$vida_session = time() - $_SESSION['tiempo'];
        if($vida_session > $inactivo)
        {
            session_destroy();//destruye y redirige
            header("location: ../index.html"); 
        }
		echo "Todav&iacute;a faltan ".($inactivo - $vida_session)." segundos";//muetra el tiempo de vida de la session
    }
	else{
		$ahora = time();//cuenta el tiempo
		echo "Variable de sesi&oacute;n NO establecida...<br/>Se establece en ".$ahora;
		$_SESSION['tiempo'] = $ahora;
	}
?>