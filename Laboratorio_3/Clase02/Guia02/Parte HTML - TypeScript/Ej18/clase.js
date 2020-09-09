"use strict";
function Calidad() {
    var nombre = document.getElementById("txtNombre").value;
    var variable;
    var estaChequeado;
    for (var i = 0; i < 5; i++) {
        variable = document.getElementById(i.toString());
        estaChequeado = variable.checked;
        if (estaChequeado) {
            variable = document.getElementById(i.toString()).value;
            break;
        }
    }
    alert("Nombre: " + nombre + "\n >>>Calificacion: " + variable);
}
//# sourceMappingURL=clase.js.map