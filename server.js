import Koa from 'koa';
import IO from 'koa-socket-2'
import serve from 'koa-static';
import session from 'koa-session';
import passport from 'koa-passport';
import bodyParser from 'koa-bodyparser'
import MongooseStore from 'koa-session-mongoose';

import { motortemplates } from './config/templates/motortemplates.js';
import { MiddlewareProductos } from './middlewares/midProductos.js';
import * as strategy from './config/authentication/strategies.js';
import sockets from './config/connections/sockets.js';
import { Factory } from './DB/Factories/Factory.js';
import { Apis } from './routes/index.js';


const app = new Koa();

// static urljson
app.use(bodyParser());
app.use(serve('./public'))

// session
await Factory.Cookies()
app.keys = ['coderhouse']
app.use(session({
    store: new MongooseStore({ collection: 'sessions' }),
    rolling: true,
    overwrite: true,
    maxAge: 60000,
    key: 'coderhouse'
}, app))

// Passport Auth
passport.use('register', strategy.register)
passport.use('login', strategy.login)
passport.serializeUser(strategy.serialize)
passport.deserializeUser(strategy.deserialize)
app.use(passport.initialize())
app.use(passport.session())

// pug template engine
motortemplates(app);

// Sockets
export const io = new IO()
io.attach(app)
sockets(io)

// Middleware: Methods
app.use(MiddlewareProductos.getMiddleware.methodConverter)

// routes
Apis.getInstance(app).api();

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Corriendo en ${PORT}: - http://localhost:${PORT}`)
})

