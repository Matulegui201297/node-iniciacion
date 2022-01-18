const colors = require ('colors');
const fs = require('fs');
const {logica} = require('./logica');


const multiplicar = (base, limite, visualizar) => {
    
    const resultado = logica(base, limite);    
    
    if(visualizar){
        console.log('============='.rainbow);
        console.log(`tabla del ${base}`.america);
        console.log('============='.zebra);
        console.log(resultado);
    }
    
    const nombreArchivo = `tabla-del-${base}.txt`
    fs.writeFileSync(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
    });
    console.log(`El archivo ${nombreArchivo} fue creado con Exito!`.random);
}

module.exports = {
    multiplicar
}