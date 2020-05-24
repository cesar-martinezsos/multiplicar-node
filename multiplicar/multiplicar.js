const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`==Tabla de ${ base }==`.green);
    console.log('======================='.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${ base } X ${ index } = ${ base * index}`);
    }

}


crearArchivo = async(base, limite) => {
    let data = '';
    let archivo = `tabla-${ base }-al-${ limite }.txt`;

    if (!Number(base)) {
        throw new Error(`La base ${ base } no es un número.`);
    }

    if (!Number(limite)) {
        throw new Error(`El limite ${ limite } no es un número.`);
    }

    for (let i = 1; i <= limite; i++) {
        data += `${ base } X ${ i } = ${ base * i }\n`;
    }

    fs.writeFile(`tablas/${archivo}`, data, (err) => {
        if (err)
            throw err;
    });

    return archivo;
}

module.exports = {
    crearArchivo,
    listarTabla
}