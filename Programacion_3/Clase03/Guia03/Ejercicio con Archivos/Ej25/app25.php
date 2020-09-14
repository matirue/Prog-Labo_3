<?php
/*Se quiere realizar una aplicación que lea un archivo (../misArchivos/palabras.txt) y ofrezca
estadísticas sobre cuantas palabras de 1, 2, 3, 4 y más de 4 letras hay en el texto. No tener en
cuenta los espacios en blanco ni saltos de líneas como palabras.
Los resultados mostrarlos en una tabla. */

$archivo = fopen("./misArchivos/palabras.txt", "r");

$unaLetra = 0;
$dosLetras = 0;
$tresLetras = 0;
$cuatroLetras = 0;
$masLetras = 0;

while(!feof($archivo))
{     
    $linea = fgets($archivo);

    if($linea == "")
        continue;  
            
    $palabra = array();
    $palabra = explode(" ", $linea);            

    for($i=0; $i<count($palabra); $i++)
    {
        switch(strlen($palabra[$i]))
        {
            case 1:
                $unaLetra += 1;
                break;
            case 2:
                $dosLetras += 1;
                break;
            case 3:                    
                $tresLetras+=1;
                break;
            case 4:
                $cuatroLetras+=1;
                break;

            default:
                $masLetras+=1;
                break;
            }
        }      
}

echo "<br> Palabras de 1 letra: " . $unaLetra;
echo "<br> Palabras de 2 letras: " . $dosLetras;
echo "<br> Palabras de 3 letras: " . $tresLetras;
echo "<br> Palabras de 4 letras: " . $cuatroLetras;
echo "<br> Palabras mas de 4 letras: " . $masLetras;

fclose($archivo);
?>