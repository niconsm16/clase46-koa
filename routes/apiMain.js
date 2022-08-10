import Router from 'koa-router'
import { login } from '../middlewares/midLogin.js'
// import * as middleware from '../middlewares/midProductos.js'
// import { midLogProductsError } from '../middlewares/midLogger.js'
import { ControllerMain } from '../controllers/index.js'


const api = new Router({ prefix: '' })

export class ApiMain {

    #controller;

    constructor() {
        this.#controller = new ControllerMain();
    }

    static get getClass() {
        return new ApiMain();
    }

    get api() {

        // Index
        api.get('/', login, this.#controller.mainRender)

        //Form
        api.get('/productos-form', this.#controller.form)

        // Middleware: Error
        // api.use(midLogProductsError)

        return api;
    }
}
