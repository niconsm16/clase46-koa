import { RepositoryMensajes } from "./../db/Repositories/index.js";

export class ServicesMensajes {

    #repository;

    constructor() {
        this.#repository = new RepositoryMensajes()
    }

    saveMessage = (msj) => this.#repository.save(msj)

    loadMessages = async () => await this.#repository.loadAll()
}
