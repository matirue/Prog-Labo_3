"use strict";
/*Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log() */
Farctorial(5);
function Farctorial(numero) {
    var n = 1;
    for (var index = 1; index <= numero; index++) {
        n = n * index;
    }
    console.log("El factorial de " + numero + " es " + n);
}
//# sourceMappingURL=app08.js.map