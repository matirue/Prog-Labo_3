<?php
/***-CREAR PAGINA .PHP QUE RECIBA COMO PARAMETROS (POST)
*--OPCION, CORREO Y CLAVE
*---SI OPCION = 'LOGIN' => SE CONECTA CON LA BD Y VERIFICA EXISTENCIA DEL USUARIO.
*--->>>SI USUARIO NO COINCIDE => INFORMARLO, CASO CONTRARIO MOSTRAR: NOMBRE Y PERFIL (DESCRIPCION)
*---SI OPCION = 'MOSTRAR' => MOSTRARA EL LISTADO COMPLETO DE LOS USUARIOS
			(ID, CORREO, CLAVE, NOMBRE, PERFIL (CODIGO) Y PERFIL (DESCRIPCION))

*-UNA VEZ TESTEADO EN EL ENTORNO LOCAL, SUBIR BASE Y PAGINA AL HOST REMOTO.
*-VERIFICAR EL BUEN FUNCIONAMIENTO (RETOCAR DE SER NECESARIO).
*-PUBLICAR LA URL DEL HOST PARA SER TESTEADO POR EL PROFESOR. */

$opcion = isset($_POST["opcion"]) ? $opcion = $_POST["opcion"] : null;
$correo = isset($_POST["correo"]) ? $correo = $_POST["correo"] : null;
$clave = isset($_POST["clave"]) ? $clave = $_POST["clave"] : null;

$host = "localhost";
$user = "root";
$pass = "";
$base = "usuarios_test";

switch ($opcion)
 {
    case 'login':
        # 'LOGIN' => SE CONECTA CON LA BD Y VERIFICA EXISTENCIA DEL USUARIO.
        #--->>>SI USUARIO NO COINCIDE => INFORMARLO, CASO CONTRARIO MOSTRAR: NOMBRE Y PERFIL (DESCRIPCION).
        $con = @mysqli_connect($host, $user, $pass, $base);
        $sql = "SELECT * FROM usuarios WHERE  correo = '$correo' AND clave = '$clave' ";

        if($con)
        {
            $rs = $con -> query($sql);
            echo "<pre>";
            var_dump($rs);
            echo "</pre>";
            
            while ($fila = $rs->fetch_object())
            {
                $user_arr[] = $fila;
            }

            echo "<pre>";
            var_dump($user_arr);
            echo "</pre>";
        } 
        else
        {
            echo mysqli_connect_errno();
        }      
        mysqli_close($con);
        break;
    
    case 'login':
        # 'MOSTRAR' => MOSTRARA EL LISTADO COMPLETO DE LOS USUARIOS
        # (ID, CORREO, CLAVE, NOMBRE, PERFIL (CODIGO) Y PERFIL (DESCRIPCION)) QUE NO SE MUESTE EL PERFIL, SOLO LA DESCRIPCION

        break;
    
    default:
        # code...
        break;
}

?>