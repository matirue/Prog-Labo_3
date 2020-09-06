"use strict";
/*Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log() */
NumerosPrimos();
//arreglar
function NumerosPrimos() {
    var contador = 0;
    for (var j = 1; j < 20; j++) {
        contador++;
        for (var i = 1; i <= j; i++) {
            if (i % j == 0)
                contador++;
            if (j == i)
                if (contador == 2)
                    console.log(i + "\n");
        }
    }
}
//# sourceMappingURL=app07.js.map