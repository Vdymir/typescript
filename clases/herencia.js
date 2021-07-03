var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(nombre_, apellido_, edad_) {
        this.nombre = nombre_;
        this.apellido = apellido_;
        this.edad = edad_;
    }
    Padre.prototype.presentacion = function () {
        console.log("Mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + "a\u00F1os");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(nombre_, apellido_, edad_, apellidoMaterno_) {
        var _this = _super.call(this, nombre_, apellido_, edad_) || this;
        _this.apellidoMaterno = apellidoMaterno_;
        return _this;
    }
    return Hijo;
}(Padre));
var hijonew = new Hijo('Vladimir', 'Castañeda', 20, 'Sarmiento');
hijonew.presentacion();
