import { io } from '../server.js'
import { ServicesMensajes } from '../services/index.js'


export class ControllerMensajes {

    #services;

    constructor() {
        this.#services = new ServicesMensajes()
    }

    newMessage = msj => {
        this.#services.saveMessage(msj)
        io.broadcast('new-message', msj)
    }

    loadAll = async () => await this.#services.loadMessages()
}

