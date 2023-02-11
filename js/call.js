let inge1 = {
    nombre: "Alex",
    apellido: "Jaramillo",
    nombreCompleto: function (titulo,tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }

}

let inge2 = {
    nombre: "Andrés",
    apellido: "Pérez",
}

console.log(inge1.nombreCompleto.call(inge2,'Ing',324541454));


// Aply permite llamar a un método que no está definido en cierto objeto
// Para pasar argumentos se tienen que enviar en un array

let array = ['Lic','6545415'];
console.log(inge1.nombreCompleto.apply(inge2, array));


