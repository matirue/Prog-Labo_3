/*Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log() */

Farctorial(5);

function Farctorial(numero:number):void
{
    let n:number = 1;

    for (let index:number = 1; index <= numero ; index++) 
    {
        n = n*index;        
    }

    console.log("El factorial de " + numero + " es " + n);

}