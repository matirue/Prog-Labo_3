<?php
//no olvidar
require_once __DIR__ . '/vendor/autoload.php';

header('content-type:application/pdf');

//le paso un array con parametros donde le cambio el sentido de la pagina
$mpdf = new \Mpdf\Mpdf(['orientation' => 'P']);//P-> vertical; L-> horizontal

//escritoura en formato html
$mpdf->WriteHTML('<h1>Hola mundo!</h1>');

//escritura en formato de texto
//horizontal izq = 0 
//vertical arriba = 0
$mpdf->WriteText(70, 50, "Texto a 70 horizontal y 50 vertical");
//void WriteText( float $horizontal, float $vertical, string $text)

//Output primer parametro sera el nombre del documento, segundo param como se vera el arch o q se hace con el
$mpdf->Output('mi_pdf.pdf', 'D');
//D->down-load; I->in-line; F->file; S->string-return