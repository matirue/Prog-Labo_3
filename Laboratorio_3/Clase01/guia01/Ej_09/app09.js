"use strict";
/*Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota: Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número. */
/*
import {Ej_08} from "../Ej_08/app08.js";
import {Ej_06} from "../Ej_06/app06.js";
*/
Numero(-3);
Numero(4);
function Numero(numero) {
    if (numero > 0)
        console.log("El numero " + numero + " es positivo y su factorial es " + Farctorial(numero));
    else
        console.log("El numero " + numero + " es negativo y al cubo da " + AlCubo(numero));
}
function Farctorial(numero) {
    var n = 1;
    for (var index = 1; index <= numero; index++) {
        n = n * index;
    }
    //console.log("El factorial de " + numero + " es " + n);
    return n;
}
function AlCubo(numero) {
    return (numero * numero * numero);
}
//# sourceMappingURL=app09.js.map