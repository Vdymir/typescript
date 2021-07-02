/** Funicones en typeScript */


// Funcion que retorna un valor
function sumar(n1:number, n2:number):number {
    return (n1 + n2);
}
const suma:number = sumar(2,2);
console.log(suma);

// Funciones que no retornan nada
function funcion():void {
    console.log('hola mundo');
}
const funcion2 = (msg:string = 'hola mundo 2'):void => {
    console.log(msg)
}
funcion();
funcion2();

// Funcion con el parametro REST
const rest = (lista:string, ...numeros:number[]):void => {
    console.log(`Esta es una lista de ${lista}: ${numeros}`)
}
rest('numero', 1,2,3,4,5);