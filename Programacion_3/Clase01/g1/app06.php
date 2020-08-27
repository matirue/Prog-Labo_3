<?php
/* Escribir un programa que use la variable $operador que pueda almacenar los símbolos
matemáticos: ‘+’, ‘-’, ‘/’ y ‘*’; y definir dos variables enteras $op1 y $op2. De acuerdo al
símbolo que tenga la variable $operador, deberá realizarse la operación indicada y mostrarse el
resultado por pantalla.
*/

$operador = array("+", "-", "/", "*");
$op1 = rand();
$op2 = rand();
$indice = rand(0, 3);

echo "<br/> Calculando: <br/>";
echo "<br/> Por Switch: ";
switch($operador[$indice])
{
    case '+':
        echo "<br/> Suma:   " . ($op1 . " + " . $op2 . " = " . ($op1 + $op2) );
        break;
    case '-':
        echo "<br/> Resta:   " . ($op1 . " - " . $op2 . " = " . ($op1 - $op2) );
        break;
    case '/':
        echo "<br/> Division:   " . ($op1 . " / " . $op2 . " = " . ($op1 / $op2) );
        break;
    case '*':
        echo "<br/> Multiplicacion:   " . ($op1 . " * " . $op2 . " = " . ($op1 * $op2) );
        break;    
}

echo "<br/><br/> Por For: ";
for ($i=0; $i < 4; $i++) 
{ 
    switch($operador[$i])
    {
        case '+':
            echo "<br/> Suma:   " . ($op1 . " + " . $op2 . " = " . ($op1 + $op2) );
            break;
        case '-':
            echo "<br/> Resta:   " . ($op1 . " - " . $op2 . " = " . ($op1 - $op2) );
            break;
        case '/':
            echo "<br/> Division:   " . ($op1 . " / " . $op2 . " = " . ($op1 / $op2) );
            break;
        case '*':
            echo "<br/> Multiplicacion:   " . ($op1 . " * " . $op2 . " = " . ($op1 * $op2) );
            break;    
    }
}
?>