import { productosSchema } from "../../../config/schemas/index.js";
import { MySQL } from "./../../../config/connections/databases/index.js"


export default class Productos extends MySQL {

    #productos;

    constructor() {

        super()
        const sequelize = this.sequelize;
        this.connect = MySQL.getInstance();
        this.#productos = this.sequelize.define
            ('Productos', productosSchema,
                {
                    sequelize,
                    timestamps: false,
                    modelName: 'Productos'
                }
            );
    }

    async getAll() {
        const query = await this.#productos.findAll()
        return query.map(product => product.dataValues)
    }

    async save(prod) {
        try {
            await this.#productos.create(prod)
            return true
        }
        catch (err) {
            return false
        }
    }

    modifyById = async ({ id, nombre, precio, foto }) => {
        try {
            id = parseInt(id)
            let result = await this.#productos.update({ id, nombre, precio, foto }, { where: { id } })
            if (result[0] === 1) return true
            else return false
        }
        catch (err) {
            return false
        }
    }

    deleteById = async (id) => {
        try {
            id = parseInt(id)
            const result = await this.#productos.findOne({ where: { id } })
            if (result) {
                await result.destroy();
                return true;
            }
            return false
        }
        catch (err) {
            return false
        }
    }
}

