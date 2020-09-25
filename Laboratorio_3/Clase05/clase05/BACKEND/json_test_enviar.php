<?php

	var_dump($_POST);
	//el obj creado sera de tipo php
	$persona = json_decode($_POST["miPersona"]);
	
	var_dump($persona);
	
	
//	echo $persona; //Error! xq el echo nomuetra objetos diractamente
	
//	echo $persona->edad . " - " . $persona->nombre;	//otra forma de mostrarlo