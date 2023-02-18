// Async indica que una función regresa una promesa

async function miFuncion(){
    return 'Saludos con promesa y asiync';
}


async function valor(){
    let miPromesa = new Promise(
        resolver => {resolver('Promesa con await');}
    );

    console.log(await miPromesa);
}
miFuncion().then((valor => console.log(valor)));


valor();


//Async indica que regresa una promesa
// await significa que va a procesar una promesa



// Promesas con async await y timeout

async function prueba(){
    let miPrueba = new Promise(
        resolver => {setTimeout(() => resolver('Promesa con async, await y timeOut'),3000);}
    );
    console.log(await miPrueba);
}


prueba();