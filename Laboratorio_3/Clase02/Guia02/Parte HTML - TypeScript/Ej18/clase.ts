function Calidad() :void
{
    let nombre: string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
    let variable;
    let estaChequeado;

    for (let i = 0; i < 5; i++)
    {
        variable = (<HTMLInputElement>document.getElementById(i.toString()));
        estaChequeado = variable.checked;
        if (estaChequeado)
        {
            variable = (<HTMLInputElement>document.getElementById(i.toString())).value;
            break;
        }
    }

    alert("Nombre: " + nombre + "\n >>>Calificacion: " + variable);
}