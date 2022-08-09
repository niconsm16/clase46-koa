import Yargs from 'yargs'

export const args = Yargs()
    .default({
        port: process.env.PORT || 8080,
        mode: 'fork',
        productos: 'mysql',
        mensajes: 'mongodb',
    })
    .alias({
        p: 'port',
        m: 'mode',
    })
    .parse(process.argv.slice(2))
