<?php
     echo "Hola Mundo!!!";

     $nombre="Juan";
     $edad=27;
     //<br> etiqueta par meter un salto de linea
     //el . se usa para concadenar
     echo "<br><br>" . "Nombre: ", $nombre . "<br>";
     echo "Edad: ",$edad . "<br>";

?>

<br> cualquier cosa suelta <br><br>

<?php
//me permite intercalar cosas en bloques php distintos
echo  "<br>En otro bloque PHP <br>";
echo  "Nombre: ", $nombre . "<br><br>";

$vec = array(1,2,"3",4);
//tiraria error echo $valor;
//var_dump muestra el contenido del array
var_dump($vec);

echo "<br><br> Mustro por for <br>";
//tmb puedo mostrarlo con un for
for ($i=0; $i < count($vec); $i++) { 
    //aca si piedo usar echo
    echo $vec[$i] . "<br>";
}

echo "<br> Mustro por foreach <br>";

//otra forma de mopstrar el array
//el foreach va al reves que en C#
foreach ($vec as $item) {
   echo $item . "<br>";
}

echo "<br><br> Vectores asociativo <br>";

//array asociativo
$vec_asoc = array("uno" => 1, "dos" => 2);
$vec_asoc["tres"] = 3; //tmb es valido par lo anteriores

foreach ($vec_asoc as $item) {
    echo $item . "<br>";
}

//accedo por el nomre del array
echo "<br>" . $vec_asoc["dos"];

//agregar un nuevo dato
array_push($vec, 77);

echo "<br><br> Mustro el array con el nuevo dato <br>";

foreach ($vec as $item) {
   echo $item . "<br>";
}

?>