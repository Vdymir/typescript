/** Clases en TypeScript */

class Vehiculo {
    marca:string
    modelo:string
    year:number

    constructor(marca_:string, modelo_:string, year_:number){
        this.marca = marca_
        this.modelo = modelo_
        this.year = year_
    }

    acelerar():void {
        console.log('Estoy acelerando')
    }

    frenar():void{
        console.log('Estoy frenando')
    }
    velocidadFinal():string{
        return 'Voy a 20km/h';
    }
}