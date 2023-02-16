'use strict'
// Con error
try {
    parament = 15;
    throw `Error en la asignación`;
} catch (error) {
    console.log(error);
}
finally{
    console.log('Finalizado');
}

// Sin error
try {
    let parament = 15;
} catch (error) {
    console.log(error);
}
finally{
    console.log('Finalizado');
}