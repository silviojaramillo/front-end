// Promesas en JS
let miPromise = new Promise((resolved,rejected) =>{
    let expresion = true;
    if(expresion){
        resolved('Proceso exitoso!');
    }else{
        rejected('Se ha producido un error');
    }
});


/* miPromise
.then(valor => console.log(valor))
.catch(error => console.log(error)); */

let promise = new Promise(resolved =>{
    console.log('Inicio de la promesa');
    setTimeout(()=>resolved('Hola desde promesa setTimeout'),3000);
    console.log('Fin de la promesa');
});

/* promise.then(valor=>console.log(valor)); */
