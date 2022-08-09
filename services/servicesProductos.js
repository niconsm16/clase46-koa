import { RepositoryProductos } from "../DB/Repositories/index.js"

export class ServicesProductos {

    #repository;

    constructor() {
        this.#repository = new RepositoryProductos()
    }

    async getAll() {
        try { return await this.#repository.getAll() }
        catch (err) { throw new Error('Error en los servicios - productos/all') }
    }

    async newItem(prod) {
        try { return await this.#repository.save(prod) }
        catch (err) { console.log('error en servicios - productos/agregar') }
    }

    async updateItem(prod) {
        try { return await this.#repository.modifyById(prod) }
        catch (err) { console.log('error en servicios - productos/modificar') }
    }

    async delItem(id) {
        return await this.#repository.deleteById(id)
    }
}



