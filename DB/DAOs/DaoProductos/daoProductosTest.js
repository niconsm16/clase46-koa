import fakerGenerator from "./../../test/fakerGenerator.js"
import { v4 as uuid } from "uuid"

export default class productosController {

    #productos

    constructor() {
        this.#productos = fakerGenerator()
    }

    async getAll() {
        return this.#productos
    }
    async save(prod) {
        prod = { ...prod, id: uuid() }
        this.#productos = [...this.#productos, prod]
        return true
    }

    modifyById = async (prod) => {
        let filtered = this.#productos.filter(item => item.id !== prod.id)
        if (filtered.length === this.#productos.length) return false
        this.#productos = [...filtered, prod]
        return true
    }

    deleteById = async (id) => {
        let filtered = this.#productos.filter(item => item.id !== id);
        if (filtered.length === this.#productos.length) return false;
        this.#productos = filtered;
        return true
    }
}
