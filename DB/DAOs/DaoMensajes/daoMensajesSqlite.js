import { Sqlite } from "./../../../config/connections/databases/index.js"
import { mensajesSchema } from "../../../config/schemas/index.js";

export default class Mensajes extends Sqlite {

    constructor() {
        super()
        const sequelize = this.sequelize;

        this.connect = Sqlite.getInstance();
        this.mensajes = this.sequelize.define(
            'Mensajes',
            mensajesSchema,
            {
                sequelize,
                timestamps: false,
                tableName: 'mensajes',
            }
        )
    }

    async save({ autor, text, time }) {

        await this.mensajes.create({
            alias: autor.alias,
            avatar: autor.avatar,
            text,
            time
        })
    }

    async loadAll() {
        try {
            const result = await this.mensajes.findAll();
            return result.map(msj => msj.dataValues)
        }
        catch (err) { console.log('Error en la carga de Mensajes Sqlite') }
    }
}