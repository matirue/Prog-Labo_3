"use strict";
var Prueba;
(function (Prueba) {
    var Persona = /** @class */ (function () {
        function Persona(apellido, nombre) {
            this._apellido = apellido;
            this._nombre = nombre;
        }
        Object.defineProperty(Persona.prototype, "Apelldio", {
            get: function () {
                return this._apellido;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Apellido", {
            set: function (value) {
                this._apellido = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Nombre", {
            get: function () {
                return this._nombre;
            },
            set: function (value) {
                this._nombre = value;
            },
            enumerable: false,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return "\n > Persona: " + this.Apelldio + ", " + this.Nombre;
        };
        return Persona;
    }());
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=Persona.js.map