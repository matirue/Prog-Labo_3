function MostrarEmails() : void
{
    let variable;
    for (let i = 0; i <= 3; i++) 
    {
        variable = (<HTMLInputElement>document.getElementById(i.toString()));
        if (variable.checked) 
        {
            variable = (<HTMLInputElement>document.getElementById(i.toString())).value;
            //console.log("Selecciono: " + variable);
            alert("Selecciono: " + variable);
        }
    }
}