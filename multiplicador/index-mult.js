const fs = require('fs');
const {logica} = require('./logica');

const multiplicar = (base) => {
    console.log(`================== 
    Tabla del ${base}
==================`);
    const resultado = logica(base);    

    console.log(resultado);
    const nombreArchivo = `tabla-del-${base}`
    fs.writeFileSync(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado con Exito!`);
    });

}

module.exports = {
    multiplicar
}