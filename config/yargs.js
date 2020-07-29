const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
    .command('listar', 'Llista la taula de multiplicar', opts)
    .command('crear', 'Crea un fitxer amb la taula de multiplicar', opts)
    .help().argv;

module.exports = {
    argv
}