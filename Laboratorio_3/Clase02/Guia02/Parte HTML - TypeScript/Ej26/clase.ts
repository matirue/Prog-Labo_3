function Listar():void
{
    let materia:string = (<HTMLInputElement>document.getElementById("agregarMateria")).value;
    let listaMat:string = (<HTMLInputElement>document.getElementById("listaMaterias")).value;
    
    (<HTMLInputElement>document.getElementById("listaMaterias")).value = listaMat  + materia + "\n";
}