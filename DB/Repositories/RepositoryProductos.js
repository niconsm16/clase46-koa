import { Factory } from './../Factories/index.js'
import { args } from './../../config/global/index.js'

export class RepositoryProductos {

    constructor() {

        Factory.daoProductos(args.productos)
            .then(dao => {
                this.productos = dao
            });
    }

    async getAll() {
        return await this.productos.getAll()
    }

    async save(prod) {
        return await this.productos.save(prod)
    }

    async modifyById(product) {
        return await this.productos.modifyById(product)
    }

    async deleteById(id) {
        return await this.productos.deleteById(id)
    }
}