/**
 * Imprimeix taula de multiplicar amb la base configurada
 */

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${ colors.green(archivo) }`);
        }).catch(err => {
            console.log('Se ha producido un error: ', err);
        });
        break;

    default:
        console.log(`Comando ${comando} no reconocido.`);


}