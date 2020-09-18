"use strict";
//Dicho coeficiente lo retornará la función ObtenerCoeficiente (por el momento será siempre 6.88).
function ObtenerCoeficiente() {
    return 6.88;
}
//El salario se calculará por medio de la cantidad de
//horas trabajadas al mes por un coeficiente.
function ObtenerSueldo() {
    var horas = document.getElementById("horas").value;
    var horasTrabajo = parseFloat(horas);
    var salario = 0;
    var retSalario = " ";
    var coeficiente = ObtenerCoeficiente();
    salario = horasTrabajo * coeficiente;
    document.getElementById("salario").value = "$" + (salario.toString());
}
//# sourceMappingURL=clase.js.map