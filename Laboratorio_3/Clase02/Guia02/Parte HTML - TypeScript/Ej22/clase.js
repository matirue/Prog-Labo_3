"use strict";
function NumMes() {
    var indice;
    var valor;
    var n;
    for (var index = 1; index < 13; index++) {
        indice = document.getElementById(index.toString());
        if (indice.checked) {
            valor = document.getElementById(index.toString()).value;
            n = document.getElementById(index.toString()).id;
            break;
        }
    }
    //console.log(">>>>> " + valor + " - " + n + " <<<<<");
    alert(">>>>> " + valor + " - " + n + " <<<<<");
}
//# sourceMappingURL=clase.js.map