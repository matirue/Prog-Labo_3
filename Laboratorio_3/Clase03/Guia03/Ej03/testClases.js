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
/// <reference path="./Persona.ts" />
var Entidades;
(function (Entidades) {
    var Empleados = /** @class */ (function (_super) {
        __extends(Empleados, _super);
        function Empleados(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Object.defineProperty(Empleados.prototype, "GetLegajo", {
            get: function () {
                return this._legajo;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Empleados.prototype, "GetSueldo", {
            get: function () {
                return this._sueldo;
            },
            enumerable: false,
            configurable: true
        });
        Empleados.prototype.Hablar = function (idioma) {
            return "\n >>El empleado habla: " + idioma;
        };
        Empleados.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + "                          - " + this._legajo + " - $" + this._sueldo;
        };
        return Empleados;
    }(Entidades.Persona));
    Entidades.Empleados = Empleados;
})(Entidades || (Entidades = {}));
/// <reference path="./Empleados.ts" />
var e = new Entidades.Empleados("pepe", "pepon", 12345678, "m", 111, 4321);
console.log(e.ToString());
console.log(e.Hablar("Español"));
