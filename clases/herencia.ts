class Padre {
    nombre:string
    apellido:string
    edad:number
    constructor(nombre_:string, apellido_:string, edad_:number){
        this.nombre = nombre_
        this.apellido = apellido_
        this.edad = edad_
    }
    presentacion():void {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}años`)
    }
}

class Hijo extends Padre {
    apellidoMaterno:string
    constructor(nombre_:string, apellido_:string, edad_:number, apellidoMaterno_:string){
        super(nombre_, apellido_, edad_)
        this.apellidoMaterno = apellidoMaterno_
    }
}

const hijonew = new Hijo('Vladimir', 'Castañeda', 20, 'Sarmiento');
hijonew.presentacion();