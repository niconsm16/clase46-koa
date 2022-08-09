import { Factory } from "../Factories/index.js";
import { DtoMensajes } from "../DTOs/index.js";
import { args } from '../../config/global/index.js'

export class RepositoryMensajes {

    constructor() {

        Factory.daoMensajes(args.mensajes)
            .then(dao => {
                this.mensajes = dao
            });
    }

    async loadAll() {
        const dao = await this.mensajes.loadAll()
        const dto = dao.map(msj => new DtoMensajes(msj))
        return dto
    }

    async save(msj) {
        this.mensajes.save(msj)
    }
}