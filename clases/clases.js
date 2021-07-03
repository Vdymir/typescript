/** Clases en TypeScript */
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, modelo_, year_) {
        this.marca = marca_;
        this.modelo = modelo_;
        this.year = year_;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log('Estoy acelerando');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('Estoy frenando');
    };
    Vehiculo.prototype.velocidadFinal = function () {
        return 'Voy a 20km/h';
    };
    return Vehiculo;
}());
