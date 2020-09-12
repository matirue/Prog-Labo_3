var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Test;
(function (Test) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca) {
            this._marca = marca;
        }
        Vehiculo.prototype.Mostrar = function () {
            return this._marca;
        };
        return Vehiculo;
    }());
    Test.Vehiculo = Vehiculo;
})(Test || (Test = {}));
//asi invoco o importo el nameespaces anterior donde esta la class vehiculo
//o sea hago referencia al archivo donde esta el namespace
/// <reference path="./01_vehiculo.ts" />
var Test;
(function (Test) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(color, precio, marca) {
            var _this = _super.call(this, marca) || this;
            _this._precio = precio;
            _this.color = color;
            return _this;
        }
        Auto.prototype.GetPrecio = function () {
            return this._precio;
        };
        Auto.prototype.Mostrar = function () {
            return _super.prototype.Mostrar.call(this) + this._precio + this.color;
        };
        Auto.prototype.Acelerar = function () {
            console.log("Acelerando...");
        };
        return Auto;
    }(Test.Vehiculo));
    Test.Auto = Auto;
})(Test || (Test = {}));
/// <reference path="./02_auto.ts" /> 
//      namespace.clase   => namespace el esl Test y la clase es vheiculo
var vehiculos = [new Test.Auto("ROJO", 125000, "FERRARI"),
    new Test.Auto("AMARILLO", 200000, "SEAT")];
vehiculos.forEach(Mostrar);
function Mostrar(v) {
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
