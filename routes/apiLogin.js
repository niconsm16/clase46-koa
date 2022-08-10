import Router from 'koa-router';
import { login, logged } from "../middlewares/midLogin.js";
import { ControllerLogin } from "../controllers/index.js";


const api = new Router()

export class ApiLogin {

    #controller;

    constructor() {
        this.#controller = new ControllerLogin();
    }

    static get getClass() {
        return new ApiLogin();
    }

    get api() {
        // Login      
        api.get('/login', logged, this.#controller.login)
        api.post('/login', this.#controller.verification)
        api.get('/login-error', this.#controller.loginError)
        api.get('/logout', login, this.#controller.logout)

        // Register       
        api.get('/register', logged, this.#controller.register)
        api.post('/register', this.#controller.createUser)
        api.get('/register-error', this.#controller.registerError)

        return api;
    }
}

