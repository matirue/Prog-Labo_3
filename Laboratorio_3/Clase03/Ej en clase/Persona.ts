
namespace Prueba
{
    export class Persona
    {
        protected _apellido :string;
        protected _nombre :string;

        public constructor(apellido:string, nombre:string)//no usar las propiedades dentro del const
        {
            this._apellido = apellido;
            this._nombre = nombre;
        }

        public get Apelldio():string{
            return this._apellido;
        }
        public set Apellido(value:string){
            this._apellido = value;
        }
        
        public get Nombre():string{
            return this._nombre;
        }
        public set Nombre(value:string){
            this._nombre = value;
        }

        ToString():string{
            return "\n > Persona: " + this.Apelldio + ", " + this.Nombre;
        }

    }
}