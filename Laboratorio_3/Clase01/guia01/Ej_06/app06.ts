/*Realizar una función que reciba como parámetro un número y que retorne el cubo del
mismo.
Nota: La función retornará el cubo del parámetro ingresado. Realizar una función que
invoque a esta última y permita mostrar por consola el resultado. */

var n: number = 10;

console.log(n + " al cubo es " + AlCubo(n));

function AlCubo(numero: number) : number
{
    return (numero*numero*numero);
}