function Confirmar():void
{
    let nombre :string = (<HTMLInputElement>document.getElementById("nombre")).value;       
    let apellido :string = (<HTMLInputElement>document.getElementById("apellido")).value;
    let dni :string = (<HTMLInputElement>document.getElementById("dni")).value;
    let sexo :string = (<HTMLInputElement>document.getElementById("sexo")).value;

    
    
    if(nombre != "" && apellido != "" && ValidarNUmerico(dni))
    {
        if(sexo == "m")
        {
            
            alert("Datos ok");
            //mostrar en rojo nombre y apellido
            console.log(nombre+" "+ apellido +" "+ dni +" " + sexo);
        }            
        else if(sexo == "f")
        {
            
            alert("Datos ok");
            //mostrar en rojo nombre y apellido
            console.log(nombre+" "+ apellido +" "+ dni +" " + sexo);
        } 
        else if(sexo == "F")
        {
            
            alert("Datos ok");
            //mostrar en rojo nombre y apellido
            console.log(nombre+" "+ apellido +" "+ dni +" " + sexo);
        } 
        else if(sexo == "M")
        {
            
            alert("Datos ok");
            //mostrar en rojo nombre y apellido
            console.log(nombre+" "+ apellido +" "+ dni +" " + sexo);
        } 
        else
            alert("Error en sexo");            
    }
    else
    {
        alert("Error en algun campo");
    }

    
}

//true si es numerico, false no
function ValidarNUmerico(cadena:string)
{
    return !isNaN(parseFloat(cadena)) && isFinite(parseFloat(cadena));
}