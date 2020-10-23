<?php

require_once __DIR__ . '/vendor/autoload.php';

header('content-type:application/pdf');

$mpdf = new \Mpdf\Mpdf(['orientation' => 'L', 
                        'pagenumPrefix' => 'Página nro. ',
                        'pagenumSuffix' => ' - ',
                        'nbpgPrefix' => ' de ',
                        'nbpgSuffix' => ' páginas']);

//en el encabezado la pagina a la izq
$mpdf->SetHeader('{PAGENO}{nbpg}');
//al final de la pgina 
$mpdf->setFooter('{PAGENO}');

//////////////////////////////////////////////////
//esto es una marca de agua
$mpdf->SetWatermarkText('NO COPIAR', 0.1);
//void SetWatermarkText ( [ string $text [, float $alpha ]])

$mpdf->showWatermarkText = true; //lo hago visible 
$mpdf->watermark_font = 'Times New Roman';
/////////////////////////////////////////////////////////////

$mpdf->WriteHTML('<h1>Hola mundo!</h1>');

$mpdf->WriteText(70, 50, "Texto a 70 horizontal y 50 vertical");


$mpdf->AddPage();

$mpdf->Output('mi_pdf.pdf', 'I');