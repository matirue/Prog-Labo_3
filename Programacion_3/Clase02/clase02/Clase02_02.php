<?php 
//el include al no existir el archivo tira un warning pero el script continua 
	include "no_existe.php"; 

//el require al no existir el archivo tira un warning y el script frena 
//		require "no_existe.php";

echo "<br>". "... continual el script";

