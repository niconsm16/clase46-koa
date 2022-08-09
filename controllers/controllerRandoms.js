import { fork } from 'child_process'
import { args } from "../config/index.js";


export class ControllerRandoms {

    constructor() { }

    randoms = (req, res) => {
        try {

            const randomFork = fork('./services/servicesRandoms.js')

            randomFork.on('message', result => {
                randomFork.send(req.query)
                result !== 'start' && res.json(result)
            })
        }
        catch (err) { console.log('Error en controlador - Randoms', err) }
    }
}

