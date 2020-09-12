/// <reference path="./02_auto.ts" /> 

             //      namespace.clase   => namespace el esl Test y la clase es vheiculo
let vehiculos : Array<Test.Vehiculo> = [new Test.Auto("ROJO",125000,"FERRARI"),
                                        new Test.Auto("AMARILLO",200000,"SEAT")];

vehiculos.forEach(Mostrar);


function Mostrar(v : Test.Vehiculo):void{

    console.log(v.Mostrar());
}

//Para poder debugguear, hay que generar un outFile de la jerarquia de clases en js
//xq solo incluir auto es propio de ts y js no lo sabe ya que lo comenta
/*
en terminal (del raiz, si estoy en namespace me evito el namesapace/) hago
tsc --outfile app.js mamespace/01_vehiculo mamespace/02_auto mamespace/03_main      >> esto mescla los 3 archivos main, auto, vehiculo
                                                                                    >> no importa el orden
esto asi me lo tira en el raiz, debo aclarar la caperta
tsc --outfile mamespace/app.js mamespace/01_vehiculo mamespace/02_auto mamespace/03_main

*/