<?php

require_once __DIR__ . '/vendor/autoload.php';

header('content-type:application/pdf');

//le paso orientacion, numero de paginas(genera el numero de pagina segun la cantidad de paginas q se formen),
//subfijo de separacion, aca seria -
//todo esto pone el mensje de "Pagina nro. X - XX paginas" arriba de todo 
$mpdf = new \Mpdf\Mpdf(['orientation' => 'P', 
                        'pagenumPrefix' => 'Página nro. ',
                        'pagenumSuffix' => ' - ',
                        'nbpgPrefix' => ' de ',
                        'nbpgSuffix' => ' páginas']);


$mpdf->SetHeader('{PAGENO}{nbpg}');
$mpdf->setFooter('{PAGENO}');


$mpdf->WriteHTML('<h1>Hola mundo!</h1>');

$mpdf->WriteText(70, 50, "Texto a 70 horizontal y 50 vertical");
//void WriteText( float $horizontal, float $vertical, string $text)

//agrego otra pagiana para ver los valores numericos de la pagina
$mpdf->AddPage();//agrega pagina
$mpdf->AddPage();//agrega pagina

$mpdf->Output('mi_pdf.pdf', 'I');//D->down-load; I->in-line; F->file; S->string-return