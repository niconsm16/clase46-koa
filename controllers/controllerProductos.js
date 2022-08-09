import { ServicesProductos } from "./../services/index.js"
import fakerGenerator from "./../db/test/fakerGenerator.js"


const services = new ServicesProductos()

export class ControllerProductos {

    constructor() {
        // this.#services = new ServicesProductos()
    }

    testFaker = (req, res) => {
        try { res.json(fakerGenerator()) }
        catch (err) { throw new Error('Faker dañado') }
    }

    error = (req, res) => {
        throw new Error('Error random')
    }

    async productosAll(ctx) {
        try {
            const all = await services.getAll();
            ctx.response.body = { data: all }
        }
        catch (err) { console.log('Error en controlador - productosAll', err) }
    }

    async productosNew(ctx) {
        try {
            const success = await services.newItem(ctx.request.body)
            return await ctx.render('form',
                {
                    ingresar: true,
                    status: true,
                    success
                })
        }
        catch (err) { console.log('Error en controlador - productosNew') }
    }

    async productosMod(ctx) {
        try {
            const success = await services.updateItem(ctx.request.body)
            return await ctx.render('form',
                {
                    ingresar: false,
                    status: true,
                    success
                })
        }
        catch (err) { console.log('Error en controlador - productosNew') }
    }

    async productosDel(ctx) {
        try {
            const confirm = await services.delItem(ctx.request.params.id)
            ctx.response.body = confirm
        }
        catch (err) { console.log('Error en controlador - productosNew') }
    }
}

