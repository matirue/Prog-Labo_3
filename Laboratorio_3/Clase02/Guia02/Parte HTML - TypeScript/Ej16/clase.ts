function Mostrar():void
{
    let nombre:string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
    let email:string = (<HTMLInputElement>document.getElementById("txtEmail")).value;
    let dni:string = (<HTMLInputElement>document.getElementById("txtDNI")).value;
    let cv:string = (<HTMLInputElement>document.getElementById("curriculum")).value;

    alert(" > Nombre: " + nombre + "\n > Dni: " + dni + "\n > Email: " + email + "\n > Cv: " + cv);
    //console.log("Nombre: " + nombre + "\n Dni: " + dni + "\n Email: " + email + "\n Cv: " + cv);
}