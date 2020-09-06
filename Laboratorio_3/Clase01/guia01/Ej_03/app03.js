"use strict";
/* Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional
de tipo cadena. Si el segundo parámetro es recibido, se mostrará tantas veces por
consola, como lo indique el primer parámetro. En caso de no recibir el segundo
parámetro, se mostrará el valor inverso del primer parámetro.*/
console.log("Le paso el parameto opcional: ");
MiFuncion(4, "hola mundo!!!");
console.log("NO Le paso el parameto opcional: ");
MiFuncion(3);
function MiFuncion(numero, cadena) {
    if (cadena) {
        for (var index = 0; index < numero; index++) {
            console.log(cadena);
        }
    }
    else {
        console.log("El inverso es: " + numero * -1);
    }
}
//# sourceMappingURL=app03.js.map