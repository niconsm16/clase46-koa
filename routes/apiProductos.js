import Router from 'koa-router';
import { ControllerProductos } from '../controllers/index.js'
// import { midLogProductsError } from '../middlewares/midLogger.js'


const api = new Router({ prefix: '/api/productos' })

export class ApiProductos {

    #controller;
    // #middleware;

    constructor() {
        this.#controller = new ControllerProductos();
    }

    static get getClass() {
        return new ApiProductos();
    }

    get api() {

        api.get('-test', this.#controller.testFaker)
        api.get('-error', this.#controller.error)

        api.get('/', this.#controller.productosAll)
        api.post('/', this.#controller.productosNew)

        api.put('/:id', this.#controller.productosMod)
        api.delete('/:id', this.#controller.productosDel)

        // Middleware: Error
        // api.use(midLogProductsError)

        return api;
    }
}
