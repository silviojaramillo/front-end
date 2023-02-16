// Promesas en JS
let miPromise = new Promise((resolved,rejected) =>{
    let expresion = true;
    if(expresion){
        resolved('Proceso exitoso!');
    }else{
        rejected('Se ha producido un error');
    }
});


miPromise.then(
    valor => console.log(valor),
    error => console.log(error)
);