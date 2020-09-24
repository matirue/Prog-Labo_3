"use strict";
var Entidades;
(function (Entidades) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, sexo) {
            this._apellido = apellido;
            this._dni = dni;
            this._nombre = nombre;
            this._sexo = sexo;
        }
        Object.defineProperty(Persona.prototype, "GetApellido", {
            /*
            public abstract get GetApellido():string;
            public abstract get GetDni():number;
            public abstract get GetNombre():string;
            public abstract get GetSexo():string;
            */
            get: function () {
                return this._apellido;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "GetDni", {
            get: function () {
                return this._dni;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "GetNombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "GetSexo", {
            get: function () {
                return this._sexo;
            },
            enumerable: false,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return this.GetApellido + ", " + this.GetNombre + " - " + this.GetDni + " - " + this.GetSexo;
        };
        return Persona;
    }());
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Persona.js.map