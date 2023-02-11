class Ingeniero{
    constructor(profesion,nombre){
        // Se coloca un guión al piso para que las propiedades no se llamen igual que los métodos
        this._profesion = profesion;
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    nombreCompleto(){
        return this._profesion + ' ' + this._nombre;
    }
}


let inge1 = new Ingeniero('Ing','Andrés Fernández');
console.log(inge1);

inge1.nombre = 'Silvio';
console.log(inge1);

let inge2 = new Ingeniero('Lic','Álvaro Perez');
console.log(inge2);


// Herencia

class Tecnico extends Ingeniero{
    constructor(profesion,nombre,departamento){
        super(profesion,nombre);
        this._departamento = departamento;
    }

    get departamento(){
        return this.departamento;
    }

    set departamento(departamento){
        this.departamento = departamento;
    }

    // sobreescritura del método de la clase padre
    nombreCompleto(){
        return super.nombreCompleto() + ',' + this._departamento;
    }
}

let tec1 = new Tecnico('Tec','Javier Velásquez','Empleados');
console.log(tec1);
tec1.nombre = "Fernando Velásquez";
console.log(tec1.nombreCompleto());