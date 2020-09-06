"use strict";
/*Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar , siendo 5 el número recibido como parámetro. */
ParImpar(2);
ParImpar(3);
function ParImpar(numero) {
    if (numero % 2 == 0)
        console.log("El numero " + numero + " es par, siendo " + numero + " el numero recibido como parametro.");
    else
        console.log("El numero " + numero + " es impar, siendo " + numero + " el numero recibido como parametro.");
}
//# sourceMappingURL=app04.js.map