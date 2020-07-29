//Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {


    console.log('====================='.green);
    console.log(`Tabla de ${base}`.red);
    console.log('====================='.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${ base } no és un número`);
            return;
        }

        let tabla = '';

        for (let i = 0; i <= limite; i++) {

            tabla += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(tabla));

        fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);


        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}