"use strict";
function MostrarPelicula() {
    var peli_1 = document.getElementById("Peli1");
    var peli_2 = document.getElementById("Peli2");
    var peli_3 = document.getElementById("Peli3");
    var peli_4 = document.getElementById("Peli4");
    if (peli_1.checked)
        alert("Pelicula seleccionada: \n >>> " + peli_1.value + " <<< ");
    else if (peli_2.checked)
        alert("Pelicula seleccionada: \n >>> " + peli_2.value + " <<< ");
    else if (peli_3.checked)
        alert("Pelicula seleccionada: \n >>> " + peli_3.value + " <<< ");
    else if (peli_4.checked)
        alert("Pelicula seleccionada: \n >>> " + peli_4.value + " <<< ");
    else
        alert(" Seleccione una pelicula para mostrar !!! ");
}
//# sourceMappingURL=clase.js.map