/// <reference path="./Empleados.ts" />

let e = new Entidades.Empleados("pepe", "pepon", 12345678, "m", 111, 4321);

console.log(e.ToString());

console.log(e.Hablar("Español"));