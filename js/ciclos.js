let edad = 0;
do {
    console.log(edad);
    edad++;
} while (edad<=18);

edad = 0;


for (let index = 0; index <= 18; index++) {
    const element = index;
    if(index<5){
        console.log("Nos vamos");
        continue
    }else if(index >=5 && index < 10){
        console.log("Nos vamos acercando");
    }else{
        console.log(index);
        break;
    }
}


const valores = new Array();
console.log(Array.isArray(valores));


// Declaración de una función de tipo expresión
let sumar = function (a,b){return a+ b}
console.log(sumar(11,89));

const sumar1 = (a,b) => a + b;
console.log(sumar(11,89));

console.log(sumar1(25,89));


let sumandos = plus(4,5,7,8,6,35);

function plus(a,d,e,r,t,y){
    let suma = 0;
    for (let index = 0; index < arguments.length; index++) {
         suma += arguments[index];
    }
    return suma;
}

console.log(sumandos);