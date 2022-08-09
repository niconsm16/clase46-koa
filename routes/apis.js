import {
    ApiMain,
    // ApiData, ApiInvalid,
    ApiLogin,
    ApiProductos,
    // ApiRandoms, ApiGraphQl
} from "./index.js";
import { args } from "../config/index.js";

let instance = null;

export class Apis {

    #app;
    #main;
    #login;
    #productos;
    #invalid;
    #randoms;
    #data;
    #graphql;

    constructor(app) {
        this.#app = app;
        this.#main = ApiMain.getClass.api;
        this.#login = ApiLogin.getClass.api;
        // this.#invalid = ApiInvalid.getClass.api;
        // this.#randoms = ApiRandoms.getClass.api;
        // this.#data = ApiData.getClass.api;
        this.#productos = ApiProductos.getClass.api;
    }

    static getInstance(app) {
        if (!instance) {
            instance = new Apis(app);
            return instance;
        }
    }

    async api() {

        // this.#graphql = await ApiGraphQl.getClass.api()
        this.#app.use(this.#login.routes())
        this.#app.use(this.#main.routes())
        this.#app.use(this.#productos.routes())
        // return {
        // main: this.#main,
        // graphql: this.#graphql,
        // productos: this.#productos,
        // invalid: this.#invalid,
        // randoms: this.#randoms,
        // login: this.#login,
        // data: this.#data
        // }
    }
}

