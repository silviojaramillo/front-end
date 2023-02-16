function factor(valor1,valor2,callback){
    let fact = valor1*valor2;

    // La función de callback se usa en la programación asíncrona
    callback(`Resultado: ${fact}`);
}


function mostrar(resultado){
    console.log(resultado);
}


factor(55,48,mostrar);



// Llamadas asíncronas
function esperar(){
    console.log('Saludar después de unos segúndos');
}
