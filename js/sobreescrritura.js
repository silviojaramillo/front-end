class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: ${this._nombre} sueldo: ${this._sueldo}`;
    }
}


class Gerente extends Empleado{
    constructor(nombre, sueldo,depto){
        super(nombre,sueldo);
        this._depto = depto;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} departamento: ${this._depto}`
    }
}

let empleado = new Empleado('Carlos',560);

let gerente = new Gerente('James',12,'Ingeniería');




// Aplicando polimorfismo

function show(dato){
    console.log(dato.obtenerDetalles());
}


show(gerente);
show(empleado);
