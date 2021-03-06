/// <reference path="./Persona.ts" />

namespace Entidades{

    export class Empleados extends Persona{
        protected _legajo:number;
        protected _sueldo:number;

        public constructor(nombre:string, apellido:string, dni:number, sexo:string, legajo:number, sueldo:number){
            super(nombre, apellido, dni, sexo);
            this._legajo=legajo;
            this._sueldo=sueldo;
        }

        public get GetLegajo():number{
            return this._legajo;
        }

        public get GetSueldo():number{
            return this._sueldo;
        }

        public Hablar(idioma:string):string{
            return "\n >>El empleado habla: " + idioma;
        }

        public ToString():string{
            return super.ToString() +" - "+ this._legajo +" - $"+ this._sueldo;
        }
    }

}