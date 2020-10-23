<?php

require_once __DIR__ . '/vendor/autoload.php';

//la salida del pdp tiene q ser de tipo /pdf para que se visible por el navegador
header('content-type:application/pdf');

//codigo para generar el pfp
$mpdf = new \Mpdf\Mpdf();
//escribe
$mpdf->WriteHTML('<h1>Hola mundo!</h1>');
//OutPut genera el doc
$mpdf->Output();