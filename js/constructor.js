// Construyendo objetos
function Ingeniero(nombre,apellido,email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let inge1 = new Ingeniero('Silvio','Jaramillo','elingesilvio@gmail.com');
let inge2 = new Ingeniero('Alex','Jaramillo','ingealex@gmail.com');


// Formas de crear objetos
let ejempplo1 = new Object();

let ejemplo2 = {};


//Esto se emplea para agregar nuevas propiedades a un objeto

Ingeniero.prototype.tel = 0;

