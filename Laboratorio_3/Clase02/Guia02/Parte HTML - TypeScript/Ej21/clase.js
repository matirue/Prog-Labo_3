"use strict";
function Calcular() {
    var numero_A = document.getElementById("num_A").value;
    var numero_B = document.getElementById("num_B").value;
    var x = parseInt(numero_A);
    var y = parseInt(numero_B);
    var valor;
    var resultado = 0;
    /*
    if((<HTMLInputElement>document.getElementById("sumar")).checked)
    {
         alert(">>>>> Resultado: " + (x+y) + " <<<<<");
    }
    if((<HTMLInputElement>document.getElementById("restar")).checked)
    {
         alert(">>>>> Resultado: " + (x-y) + " <<<<<");
    }
    if((<HTMLInputElement>document.getElementById("multiplicar")).checked)
    {
         alert(">>>>> Resultado: " + (x*y) + " <<<<<");
    }
    if((<HTMLInputElement>document.getElementById("dividir")).checked)
    {
         alert(">>>>> Resultado: " + (x/y) + " <<<<<");
    }
    */
    for (var index = 0; index < 4; index++) {
        valor = document.getElementById(index.toString());
        if (valor.checked) {
            valor = document.getElementById(index.toString()).value;
            break;
        }
    }
    switch (valor) {
        case "sumar":
            resultado = x + y;
            break;
        case "restar":
            resultado = x - y;
            break;
        case "multiplicar":
            resultado = x * y;
            break;
        case "dividir":
            resultado = x / y;
            break;
        default:
            alert("ERROR!!!");
    }
    alert(">>>>> Resultado: " + resultado + " <<<<<");
}
//# sourceMappingURL=clase.js.map