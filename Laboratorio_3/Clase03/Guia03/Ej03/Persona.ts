
namespace Entidades{

    export abstract class Persona {

        private _apellido:string;
        private _dni:number;
        private _nombre:string;
        private _sexo:string;

        public constructor(nombre:string, apellido:string, dni:number, sexo:string) {
            this._apellido=apellido;
            this._dni=dni;
            this._nombre=nombre;
            this._sexo=sexo;
        }
        /*
        public abstract get GetApellido():string;
        public abstract get GetDni():number;
        public abstract get GetNombre():string;
        public abstract get GetSexo():string;
        */
        public get GetApellido():string{
            return this._apellido;
        }
        public get GetDni():number{
            return this._dni;
        }
        public get GetNombre():string{
            return this._nombre;
        }
        public get GetSexo():string{
            return this._sexo;
        }
        
        public abstract Hablar(idioma :string):string;

        public ToString():string{
            return this.GetApellido + ", " + this.GetNombre + " - " + this.GetDni + " - " + this.GetSexo;
        }

    }
}