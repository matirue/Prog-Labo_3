var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/// <reference path="./Persona.ts" />
var Prueba;
(function (Prueba) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(apellido, nombre, legajo) {
            var _this = _super.call(this, apellido, nombre) || this;
            _this._legajo = legajo;
            return _this;
        }
        Object.defineProperty(Alumno.prototype, "Legajo", {
            get: function () {
                return this._legajo;
            },
            set: function (value) {
                this._legajo = value;
            },
            enumerable: false,
            configurable: true
        });
        Alumno.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + "\n >> Legajo: " + this.Legajo;
        };
        return Alumno;
    }(Prueba.Persona));
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
/// <reference path="./Alumno.ts"/>
var alumno = new Prueba.Alumno("Rueda", "Matias", 123);
console.log(alumno.ToString());
