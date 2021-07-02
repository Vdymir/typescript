/** Funicones en typeScript */
// Funcion que retorna un valor
function sumar(n1, n2) {
    return (n1 + n2);
}
var suma = sumar(2, 2);
console.log(suma);
// Funciones que no retornan nada
function funcion() {
    console.log('hola mundo');
}
var funcion2 = function (msg) {
    if (msg === void 0) { msg = 'hola mundo 2'; }
    console.log(msg);
};
funcion();
funcion2();
// Funcion con el parametro REST
var rest = function (lista) {
    var numeros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numeros[_i - 1] = arguments[_i];
    }
    console.log("Esta es una lista de " + lista + ": " + numeros);
};
rest('numero', 1, 2, 3, 4, 5);
