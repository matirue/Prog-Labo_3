function Calcular():void
{
    let numero_A:string = (<HTMLInputElement>document.getElementById("num_A")).value;
    let numero_B:string = (<HTMLInputElement>document.getElementById("num_B")).value;

    let x:number = parseInt(numero_A);
    let y:number = parseInt(numero_B);
    let valor;    
    let resultado:number=0;    
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
    for (let index = 0; index < 4; index++)
    {
        valor = (<HTMLInputElement>document.getElementById(index.toString()));
        if(valor.checked)
        {
            valor = (<HTMLInputElement>document.getElementById(index.toString())).value;
            break;
        }
    }

    switch(valor)
    {
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