"use strict";
function Confirmar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var sexo = document.getElementById("sexo").value;
    if (nombre != "" && apellido != "" && ValidarNUmerico(dni)) {
        if (sexo == "m")
            alert("Datos ok");
        else if (sexo == "f")
            alert("Datos ok");
        else if (sexo == "F")
            alert("Datos ok");
        else if (sexo == "M")
            alert("Datos ok");
        else
            alert("Error en sexo");
    }
    else {
        alert("Error en algun campo");
    }
}
//true si es numerico, false no
function ValidarNUmerico(cadena) {
    return !isNaN(parseFloat(cadena)) && isFinite(parseFloat(cadena));
}
//# sourceMappingURL=clase.js.map