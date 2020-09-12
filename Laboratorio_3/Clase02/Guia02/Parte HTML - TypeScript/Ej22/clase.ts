function NumMes():void
{
    let indice;
    let valor; 
    let n;
    
    for (let index = 1; index < 13; index++)
    {
        indice = (<HTMLInputElement>document.getElementById(index.toString()));

        if(indice.checked)
        {
            valor = (<HTMLInputElement>document.getElementById(index.toString())).value;   
            n = (<HTMLInputElement>document.getElementById(index.toString())).id;         
            break;
        }
    }

    //console.log(">>>>> " + valor + " - " + n + " <<<<<");
    alert(">>>>> " + valor + " - " + n + " <<<<<");
} 