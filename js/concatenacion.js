// Concatenación
var firstName = "Alex";
var lastname = " Jaramillo";

var fullname = firstName + lastname;
console.log(fullname)


// En js las cosas se evaluan de izquierda a derecha y por esta razón se puede hacer lo siguiente
var edad = 415;
var edad1 = 45;

var conca = fullname + edad;
console.log(conca);


// En caso de necesitar que respete una opración se debe hacer entre paréntesis
var conca1 = fullname + ' ' + (edad + edad1);
console.log(conca1);

// En caso contrario si se pone los números adelante
/* Esto se conoce como contexto de cadena */
var conca2 = edad + edad1 + fullname;
console.log(conca2)

