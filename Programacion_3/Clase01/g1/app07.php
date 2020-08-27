 <?php
 /*Obtenga la fecha actual del servidor (función date) y luego imprímala dentro de la página con
distintos formatos (seleccione los formatos que más le guste). Además indicar que estación del
año es. Utilizar una estructura selectiva múltiple.*/
echo "<br/> " . date('d - m - y') .
     "<br/> " . date('D - M - Y') . 
     "<br/> " . date('F d - m - y ') .
     "<br/> " . date('d - m - y') . " ////  " . date('H:i:s');
 ?>