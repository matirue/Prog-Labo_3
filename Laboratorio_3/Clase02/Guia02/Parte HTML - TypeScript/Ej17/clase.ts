function MostrarPelicula():void
{                                                //no quiero el valor sino el evencto de seleccion
    let peli_1 = (<HTMLInputElement>document.getElementById("Peli1"));
    let peli_2 = (<HTMLInputElement>document.getElementById("Peli2"));
    let peli_3 = (<HTMLInputElement>document.getElementById("Peli3"));
    let peli_4 = (<HTMLInputElement>document.getElementById("Peli4"));
    
    if(peli_1.checked)
       alert("Pelicula seleccionada: \n >>> " + peli_1.value + " <<< " );
    else if(peli_2.checked)
       alert("Pelicula seleccionada: \n >>> " + peli_2.value + " <<< " );
    else if(peli_3.checked)
       alert("Pelicula seleccionada: \n >>> " + peli_3.value + " <<< " );
    else if(peli_4.checked)
       alert("Pelicula seleccionada: \n >>> " + peli_4.value + " <<< " );
    else
       alert(" Seleccione una pelicula para mostrar !!! " );         
}