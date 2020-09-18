/// <reference path="./Persona.ts" />

namespace Prueba
{
    export class Alumno extends Persona
    {
        protected _legajo:number;
        
        public constructor(apellido:string, nombre:string, legajo:number){
            super(apellido,nombre);
            this._legajo=legajo;
        }

        public get Legajo():number{
            return this._legajo;
        }
        public set Legajo(value:number){
            this._legajo=value;
        }

        ToString():string{
            return super.ToString() + "\n >> Legajo: " + this.Legajo;
        }
    }
}