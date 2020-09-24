/// <reference path="./Empleados.ts" />

    function Add():void{ 
    let nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value;
    let apelldio:string = (<HTMLInputElement>document.getElementById("apellido")).value;
    let dni:string = (<HTMLInputElement>document.getElementById("dni")).value;
    let sexo:string = (<HTMLInputElement>document.getElementById("sexo")).value;
    let legajo:string = (<HTMLInputElement>document.getElementById("legajo")).value;
    let sueldo:string = (<HTMLInputElement>document.getElementById("sueldo")).value;
    
    let auxDni:number= parseInt(dni);
    let auxLegajo:number = parseInt(legajo);
    let auxSueldo:number = parseInt(sueldo);

    alert(nombre + ", " + apelldio  + "\n >" + auxDni  + "\n >" + sexo  + "\n >" + auxLegajo  + "\n >" + auxSueldo);
    //alert((new Entidades.Empleados(nombre,apelldio,auxDni,sexo,auxLegajo,auxSueldo)).ToString());
}


function Mostrar(){

    (<HTMLInputElement>document.getElementById("lista")).value = "Empleado: Rodriguez, Ana" + "\n >Dni 12345678" + "\n >Sexo: f"+ "\n >Legajo: 1000 "+"\n >Sueldo $100000"
    + "\n\n" +"Empleado: Martinez, Jose" + "\n >Dni 87654321" + "\n >Sexo: m"+ "\n >Legajo: 2000 "+"\n >Sueldo $100000";
}


