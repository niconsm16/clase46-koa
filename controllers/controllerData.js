import { ServicesData } from "../services/index.js"


export class ControllerData {

    #services;

    constructor() {
        this.#services = new ServicesData();
    }

    recollectData = (req, res) => {
        try {
            const data = this.#services.sysInfo();
            res.json(data);
        }
        catch (err) {
            console.log('Error en controlador - Data: ', err)
        }
    }
}

