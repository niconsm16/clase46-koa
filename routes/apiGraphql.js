import { ApolloServer } from "apollo-server-express";
import { ControllerGraphQl } from "../controllers/index.js";
import { productosGraphQlSchema } from "../config/schemas/index.js";


export class ApiGraphQl {

    #controller;

    constructor() {
        this.#controller = ControllerGraphQl.getClass
    }

    static get getClass() {
        return new ApiGraphQl();
    }

    async api() {

        const server = new ApolloServer({
            typeDefs: productosGraphQlSchema,
            resolvers: this.#controller.resolvers()
        })

        await server.start();

        return server.getMiddleware();
    }
}
