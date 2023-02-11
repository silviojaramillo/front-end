class Persona{
    static contadorPersonas = 0;
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._id = ++Persona.contadorPersonas;
    }

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this.nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this._id + '. ' + this._nombre + ' ' + this._apellido + ' ' + this.edad;
    }
}


class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return this._idEmpleado + '. ' + this._sueldo;
    }

    
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre,apellido,edad,fecha){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaDeRegistro = fecha;
    }

    get idCliente(){
        return this._idEmpleado;
    }

    get fechaDeRegistro(){
        return this._fechaDeRegistro;
    }

    set fechaDeRegistro(fechaDeRegistro){
        this._fechaDeRegistro = fechaDeRegistro;
    }

    toString(){
        return this._idCliente + '. ' + this._fechaDeRegistro;
    }

    
}


let persona1 = new Persona('Carlos','Primero','24');

console.log(persona1.toString());

let empleado1 = new Empleado('Felipe','Perez','56','5600');
console.log(empleado1.toString());

let cliente1 = new Cliente('Félix','Fernández',45,new Date);
console.log(cliente1.toString());