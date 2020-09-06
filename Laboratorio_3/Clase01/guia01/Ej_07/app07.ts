/*Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log() */

NumerosPrimos();
//arreglar
function NumerosPrimos(): void
{
    let contador: number = 0;
    for (var j:number = 1; j < 20; j++) 
    {
        contador++;
        for (var i: number = 1; i <= j; i++)
        {
            if(i % j == 0)
               contador++;
            if(j == i)
               if(contador == 2)
                  console.log(i + "\n");               
        }        
    }
}
