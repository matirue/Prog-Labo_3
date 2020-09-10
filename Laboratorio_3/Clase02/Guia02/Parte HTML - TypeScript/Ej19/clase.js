"use strict";
function MostrarEmails() {
    var variable;
    for (var i = 0; i <= 3; i++) {
        variable = document.getElementById(i.toString());
        if (variable.checked) {
            variable = document.getElementById(i.toString()).value;
            //console.log(variable);
            alert("Selecciono: " + variable);
        }
    }
}
//# sourceMappingURL=clase.js.map