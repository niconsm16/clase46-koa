import { args } from "../config/index.js"


const graphql = args.graphql

export class ControllerMain {

    constructor() { }

    async mainRender(ctx) {
        return await ctx.render(
            'index',
            {
                graphql,
                title: 'Página principal',
                user: 'Gimeno',
                stat: false,
                error: false
            })
    }


    async form(ctx) {
        const { mode } = ctx.request.query
        if (mode && mode === 'modificar') {
            return await ctx.render('form',
                {
                    ingresar: false,
                    status: false
                })
        } else {
            return await ctx.render('form',
                {
                    ingresar: true,
                    status: false
                })
        }
    }
}

