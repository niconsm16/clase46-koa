import Cookies from '../../config/authentication/cookies.js'
import { DAOs } from './../DAOs/index.js'


export class Factory {

    static async Cookies() {

        return new Cookies();
    }

    static async daoMensajes(arg) {

        if (arg === 'mongodb') {
            const { default: Mensajes } =
                await DAOs.mongodb.mensajes()
            return new Mensajes()
        }

        if (arg === 'sqlite') {
            const { default: Mensajes } =
                await DAOs.sqlite3.mensajes()
            return new Mensajes()
        }
    }

    static async daoProductos(arg) {

        if (arg === 'test') {
            const { default: Productos } =
                await DAOs.test.productos()
            return new Productos()
        }

        if (arg === 'mysql') {
            const { default: Productos } =
                await DAOs.mysql.productos()
            return new Productos()
        }

        if (arg === 'mongodb') {
            const { default: Productos } =
                await DAOs.mongodb.productos()
            return new Productos()
        }
    }
}