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
console.log(Array.isArray(valores))