//Dicho coeficiente lo retornará la función ObtenerCoeficiente (por el momento será siempre 6.88).
function ObtenerCoeficiente():number
{
    return 6.88;
}

//El salario se calculará por medio de la cantidad de
//horas trabajadas al mes por un coeficiente.
function ObtenerSueldo():void
{
    let horas :string = (<HTMLInputElement>document.getElementById("horas")).value;
    let horasTrabajo:number = parseFloat(horas);
    let salario:number = 0;
    let retSalario:string = " ";
    let coeficiente:number = ObtenerCoeficiente();

    salario = horasTrabajo * coeficiente;

    (<HTMLInputElement>document.getElementById("salario")).value = "$" + (salario.toString());
    
}