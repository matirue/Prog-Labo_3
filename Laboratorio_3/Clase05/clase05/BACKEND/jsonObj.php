<?php
	header("charset: ISO-8859-1");
	/* si lo q retorna es una cadena directo la respuesta sera un string
	echo '[{"nombre": "Susana","Edad":36,"Peso": null },
		  {"nombre": "Andrea","Edad":25,"Peso": 72 }] ';
	*/

	//genero el objeto con stdClass = es una clase estandar que no tiene metodos pero se le perimite agregar atributos
	$persona = new stdClass();
	$persona->nombre = "Juan";//le agrego los atributos
	$persona->edad = 66;
	//retorna el obj como string para mostrarlo en el front
	$objJson = json_encode($persona);

	var_dump($objJson);


	///vvvvv MIRA LO DE ABAJO POR AHI QUIERE ESTO vvvvv
?>
<br/>
<a href="../Json/index.html"  class="btn btn-info">Volver</a>