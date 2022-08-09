// Importacion de Express
// import { Server as http } from 'http'
// import { Server as ioServer } from 'socket.io'

// import EventEmitter from 'events'
// import { authentication } from './config/authentication/authentication.js'

// // Middleware Logs
// import { midLogAll } from './middlewares/midLogger.js'

// //Importacion de Routers, Templates y Sockets
// import { motortemplates as templates } from './config/templates/motortemplates.js' //? Motor de Plantillas
// import sockets from './config/connections/sockets.js' //? Sockets IO
import { Apis } from './routes/index.js' //? Router

// Process
import { args } from './config/index.js'
import dotenv from './config/global/dotenv.js'

// Server mode
import Server from './server/server.js'
import koa from 'koa';
import koaBody from 'koa-body';
import serve from 'koa-static'
//? Fin imports =====================================================================================

// export const app = express()
const app = new koa()
app.use(koaBody());
app.use(serve('./public'))

// const httpserver = http(app)
// export const io = new ioServer(httpserver)

// Autenticación
// await authentication(app)

//? AddOns ==========================================================================================

// Plantillas
// templates(app)

Apis.getInstance.api(app)
    .then(apis => {
        const { main, login, productos, invalid, randoms, data, graphql } = apis;

        // Routers
        app.use(
            // midLogAll,
            // productos,
            // main,
            login.routes(),
            // graphql,
            // randoms,
            // data,
            // invalid
        )
    })

// Sockets
// sockets(io)


//? Server ==========================================================================================

// EventEmitter.setMaxListeners(25)

const server = new Server()
server[args.mode](args.port, app)
// server[args.mode](args.port, httpserver)
