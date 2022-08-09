// import { io } from '../server.js'

export class MiddlewareProductos {
    constructor() { }

    static get getMiddleware() {
        return new MiddlewareProductos()
    }

    async methodConverter(ctx, next) {
        if (ctx.url === '/api/productos/:id' &&
            ctx.method === 'POST') {
            ctx.method = 'PUT'
        }
        await next();
    }
}


// export const selectorBySocket = (ctx, next) => {
//     let option = 'modificar'
//     io.on('connection', socket => {
//         socket.emit('input-res', option)
//         socket.on('input-req', data => {
//             option = data
//         })
//     })
//     // next();
// }