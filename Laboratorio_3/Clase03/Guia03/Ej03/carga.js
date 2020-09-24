"use strict";
/// <reference path="./Empleados.ts" />
function Add() {
    var nombre = document.getElementById("nombre").value;
    var apelldio = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var sexo = document.getElementById("sexo").value;
    var legajo = document.getElementById("legajo").value;
    var sueldo = document.getElementById("sueldo").value;
    var auxDni = parseInt(dni);
    var auxLegajo = parseInt(legajo);
    var auxSueldo = parseInt(sueldo);
    alert(nombre + ", " + apelldio + "\n >" + auxDni + "\n >" + sexo + "\n >" + auxLegajo + "\n >" + auxSueldo);
    //alert((new Entidades.Empleados(nombre,apelldio,auxDni,sexo,auxLegajo,auxSueldo)).ToString());
}
function Mostrar() {
    document.getElementById("lista").value = "Empleado: Rodriguez, Ana" + "\n >Dni 12345678" + "\n >Sexo: f" + "\n >Legajo: 1000 " + "\n >Sueldo $100000"
        + "\n\n" + "Empleado: Martinez, Jose" + "\n >Dni 87654321" + "\n >Sexo: m" + "\n >Legajo: 2000 " + "\n >Sueldo $100000";
}
//# sourceMappingURL=carga.js.map