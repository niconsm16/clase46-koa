import { MongoDb } from '../../../config/connections/databases/MongoDb.js'
import { msj } from './../../../config/schemas/index.js'

export default class Mensajes extends MongoDb {

    constructor() {
        super()
        this.connect = MongoDb.getInstance();
    }

    async save(message) {
        const msjToSave = new msj(message)
        await msjToSave.save()
    }

    async loadAll() {
        try { return await msj.find({}) ?? "" }
        catch (err) { console.log('error loadAll: No se encuentran cosas') }
    }
}