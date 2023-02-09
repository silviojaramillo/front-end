// Tipo string
var nombre = "Alex Jaramillo";
console.log(nombre)

// Tipo entero
var number = 5;
console.log("🚀 ~ file: tipos_de_datos.js:7 ~ number", number)

// Tipo objeto 
var alex = {
    nombre: "Silvio",
    apellido: "Jaramillo",
    año: 2023
}
console.log("🚀 ~ file: tipos_de_datos.js:15 ~ alex", alex)

// Tipo booleano
var question = true;
console.log(question)

// Tipo fuction
function miFunction(){
}

console.log(typeof miFunction)

// Tipo Symbol
var newSymbol = Symbol("Mi símbolo");
console.log(newSymbol)

// Tipo clase
class Person{
    constructor(name,lastname){
        this.name = "Alex";
        this.lastname = "Jar";
    }
}

console.log(typeof Person)

// Tipo undefined

/* undefined es tanto un tipo de dato como un valor */
var x;
console.log(typeof x);

// Tipo null => ausencia de valor
var y = null;
/* null no es un tipo de dato sino de tipo object */
console.log(y);

// Array
var autos = ['Lucas','Carlos'];
console.log( autos)
