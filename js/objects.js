let inge = {
    abr: "Ing.",
    nombre: "El Inge Silvio",
    profesion: "Ingeniero electricista",
    año: 2023,
    // Agregando un método al objeto
    nombreProfesion: function(){
        return this.nombre + ', ' + this.profesion;
    },
    get abreIng(){
        return this.abr + ', ' + this.nombre;
    },
    // Convirtiendo texto a mayúsculas
    get convertir(){
        return this.profesion.toUpperCase();
    },
    set convertir(convertir){
        this.profesion = convertir.toUpperCase();
    }
}

console.log(inge.nombre);
console.log(inge.profesion);
console.log(inge.año);
console.log(inge.nombreProfesion());


// Creando objetos

let ingeniero = new Object();
ingeniero.abr = "Ing.";
ingeniero.nombre = "Silvio";
ingeniero.apellido = "Jaramillo";
ingeniero.nc = function () {
    return this.abr + ' ' + this.nombre + ' ' + this.apellido;
}

console.log(ingeniero.nc());

// Accediendo a las propiedades del objeto

for(propiedad in ingeniero){
    console.log(propiedad);
    console.log(ingeniero[propiedad]);
}

// Para modificar el valor de una propiedad se accede a ella como si se la fuera a crear
// para remover una propiedad se accede de la siguiente manera

delete ingeniero.apellido;
console.log(ingeniero.nc());

// Formas de imprimir un objeto

let array = Object.values(ingeniero);
console.log(array);


// Con este se convierte el objeto en una cadena
let stringIngeniero = JSON.stringify(ingeniero);
console.log(stringIngeniero);


// Método GET
console.log(inge.abreIng);


console.log(inge.convertir);

inge.convertir = "Ing. electrico";

console.log(inge.profesion);