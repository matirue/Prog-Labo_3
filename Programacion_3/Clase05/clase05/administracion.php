<?php

$queHago = isset($_POST['queHago']) ? $_POST['queHago'] : NULL;

$host = "localhost";
$user = "root"; //user y pass depende de como instale el xampp
$pass = "";
$base = "productos";

switch($queHago){

    case "establecerConexion":

        $con = @mysqli_connect($host, $user, $pass);//conexion a db

        echo "<pre>con = mysqli_connect(host, user, pass)</pre>";

        if(!$con)//check si se conecto
        {
            echo "<pre>Error: No se pudo conectar a MySQL." . PHP_EOL;
            echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
            echo "error: " . mysqli_connect_error() . PHP_EOL . "</pre>";
            return;
        }

        echo "<pre>Éxito: Se realizó una conexión a MySQL!!!." . PHP_EOL;
        echo "Información del host: " . mysqli_get_host_info($con) . PHP_EOL . "</pre>";
        
        mysqli_close($con);//cierro la conexion

        echo "<pre>mysqli_close(con);</pre>";

    break;
    
    case "ejecutarConsulta":

        $con = @mysqli_connect($host, $user, $pass, $base);//le paso la base, es  opcional
        
        $sql = "SELECT * FROM producto";//consulta a la tabla de la db

        $rs = $con->query($sql); //ejecuto la consulta $sql
        //query permite ejecutar consultas, retorna la info de la consulta o false en caso de error

        echo "<pre>
            con = mysqli_connect(host, user, pass, base); 
            sql = 'SELECT * FROM producto';
            rs = con->query(sql);
        </pre>";
        
        echo "<pre>";
        var_dump($rs);
        echo "</pre>";

        echo "<pre>Cantidad de filas: " . mysqli_num_rows($rs) . "<br>mysqli_num_rows(rs)</pre>";  
        //mysqli_num_rows retorna la cantidad de filas

        mysqli_close($con);
        
        echo "<pre>mysqli_close(con);</pre>";
        
    break;
   
    case "mostrarConsulta":
    
        $con = @mysqli_connect($host, $user, $pass, $base);
        
        $sql = "SELECT * FROM producto";

        $rs = $con->query($sql);

        echo "<pre>
            con = mysqli_connect(host, user, pass, base); 
            sql = 'SELECT * FROM producto';
            rs = con->query(sql);
            </pre>";
        
        echo "<pre>while(row = rs->fetch_object()){
            while (row = rs->fetch_object()){
                user_arr[] = row;
            }                        
            </pre>";

        //fetch_object() --> tranforma cada fila en objetos de php
        while ($row = $rs->fetch_object()){ //otras opciones de fetch: fetch_all / fetch_assoc / fetch_array([MYSQLI_NUM | MYSQLI_ASSOC | MYSQLI_BOTH])
            $user_arr[] = $row;
        }        
      
        echo "<pre>";
        
        var_dump($user_arr); 
            
        echo "</pre>";

        mysqli_close($con);
        
        echo "<pre>mysqli_close(con);</pre>";
        
    break;

    case "ejecutarInsert":
    
        $con = @mysqli_connect($host, $user, $pass, $base);
        
        //pruebo el insert, todo lo char, string entre ''
        $sql = "INSERT INTO producto (codigo_barra, nombre, path_foto)
                VALUES(1112, 'nombre_producto', 'fake.jpg')";

        $rs = $con->query($sql);

        echo "<pre>
            con = mysqli_connect(host, user, pass, base); 
            sql = 'INSERT INTO producto (codigo_barra, nombre, path_foto)';
            VALUES(1112, 'nombre_producto', 'fake.jpg')'
            row = rs->fetch_object();
        </pre>";
        
        //                             muestra las filas modificadas o agregadas
        echo "<pre>Filas afectadas: " . mysqli_affected_rows($con) . "<br>mysqli_affected_rows(con)</pre>";  

        mysqli_close($con);
        
        echo "<pre>mysqli_close(con);</pre>";

        break;

    case "ejecutarUpdate":
    
        $con = @mysqli_connect($host, $user, $pass, $base);
        
        //actuaizo una fila
        $sql = "UPDATE producto SET codigo_barra=555, nombre='otro_nombre', path_foto='otroFake.jpg'
                WHERE id = 2";

        $rs = $con->query($sql);

        echo "<pre>
            con = mysqli_connect(host, user, pass, base); 
            sql = 'UPDATE producto SET codigo_barra=555, nombre='otro_nombre', path_foto='otroFake.jpg'
            WHERE id = 2';
            row = rs->fetch_object();
        </pre>";
        
        echo "<pre>Filas afectadas: " . mysqli_affected_rows($con) . "<br>mysqli_affected_rows(con)</pre>";  

        mysqli_close($con);
        
        echo "<pre>mysqli_close(con);</pre>";
        
    break;

    case "ejecutarDelete":
    
        $con = @mysqli_connect($host, $user, $pass, $base);
        //borro una fila
        $sql = "DELETE FROM producto WHERE id=2";

        $rs = $con->query($sql);

        echo "<pre>
            con = mysqli_connect(host, user, pass, base); 
            sql = 'DELETE FROM producto WHERE id=2';
            row = rs->fetch_object();
        </pre>";
        
        
        echo "<pre>Filas afectadas: " . mysqli_affected_rows($con) . "<br>mysqli_affected_rows(con)</pre>";  

        mysqli_close($con);
        
        echo "<pre>mysqli_close(con);</pre>";
        
    break;

    default:
        echo ":(";

}