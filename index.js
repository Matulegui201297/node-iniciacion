const fs = require('fs');

const base = 2;

console.log(`================== 
    Tabla del ${base}
==================`);
let resultado = ' ';
for (let i = 1; i <= 10; i++) {
    resultado += `${base} * ${i} = ${base * i}\n`
}

console.log(resultado);

fs.writeFileSync(`tablas/tabla-del-${base}`, resultado)