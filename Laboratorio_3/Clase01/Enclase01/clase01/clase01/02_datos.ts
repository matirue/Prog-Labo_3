//ARRAYS EN TYPESCRIPT
var vec = [1, true, "hola"];//por default es any   O SEA CUALQUIER TIPO DE VALOR

//var numeros : number[] = [1,2,true];
//var numeros : number = [1,2,3];
var numeros : number[] = [1,2,3];    //SOLO ADMITE NUMBER
var otrosNumeros : Array<number> = [1,2,3];   //SON DOS MANERAS DE ESRIBIR LO MISMO

var eliminado : number | undefined = numeros.pop(); //EL PIPE ES PARA QUE LA VARIABLE PUEDA ALMACENAR DOS TIPOS DE DATOS, YA QUE LA FC DEVUELVE 
                                                    //DE DATOS EN CASO DE ERROR 
console.log(eliminado);

numeros.push(5);
console.log(numeros);

//ENUMS EN TYPESCRIPT ---- NO CAMBIAN MUCHO CON C#
enum Ejemplo
{
    Basico,
    Intermedio,
    Avanzado
}

console.log(Ejemplo.Basico);

var e : Ejemplo = Ejemplo.Intermedio;
console.log(e);

//LET vs VAR
var foo : number = 123;
if(true) 
{ 
    var foo : number = 456;  //ACA COMO ES VAR SI LO PISA
}
console.log(foo);

let foo2 : number = 123;
if(true) 
{ 
    let foo2 : number = 456; /// FOO2 SOLOP EXISTE DENTRO DEL IF POR ESO NO PISA AL ANTERIOR
}
console.log(foo2);
