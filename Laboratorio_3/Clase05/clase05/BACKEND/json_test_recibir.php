<?php

    //genera el obj en php
	$persona = new stdClass();
	$persona->nombre = "Juan";//lo cargo
	$persona->edad = 66;

	$objJson = json_encode($persona);//retorno el string

	echo $objJson;