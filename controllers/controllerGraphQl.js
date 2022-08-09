import { ServicesProductos } from "./../services/index.js";
import { productosGraphQlSchema } from "../config/schemas/index.js";

export class ControllerGraphQl {

    #services;

    constructor() {
        this.#services = new ServicesProductos();
    }

    static get getClass() {
        return new ControllerGraphQl();
    }

    resolvers() {
        return {
            Query: {
                getAll: async () => await this.#services.getAll(),
            },
            Mutation: {
                newItem: async (_, { prod }) => await this.#services.newItem(prod),
                updateItem: async (_, { prod }) => await this.#services.updateItem(prod),
                delItem: async (_, { id }) => await this.#services.delItem(id)
            }
        }
    }
}