/** Interfaces TypeScript */

// Las interfaces nos permite definir tipos de datos personalizados los cuales se pueden usar para crear objetos o implementar estos datos en una clase

interface Persona {
    // Declaración de variables
    readonly nombre:string // el parametro 'readonly' nos permite que esta variable no se pueda modifiacar
    apellido:string
    edad:number
}

// Podemos crear un objeto en base a una interfaz
const juan:Persona = {
    nombre: 'Vladimir',
    apellido: 'Castañeda',
    edad: 20
}

