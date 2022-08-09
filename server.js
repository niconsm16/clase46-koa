import Koa from 'koa';
import IO from 'koa-socket-2'
// import koaBody from 'koa-body';
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static';

import { Apis } from './routes/index.js';
import sockets from './config/connections/sockets.js'
import { MiddlewareProductos } from './middlewares/midProductos.js';
import { motortemplates } from './config/templates/motortemplates.js';
// import { authentication } from './config/authentication/authentication.js';
import { Factory } from './DB/Factories/Factory.js';
import passport from 'koa-passport';
import * as strategy from './config/authentication/strategies.js'
import MongooseStore from 'koa-session-mongoose';
import session from 'koa-session';


const app = new Koa();

// static urljson
app.use(bodyParser());
app.use(serve('./public'))

// session
// authentication(app)
await Factory.Cookies()

app.use(session({
    store: new MongooseStore({ collection: 'sessions' }),
    rolling: true,
    overwrite: true,
    maxAge: 300000,
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

app.use(function (ctx, next) {
    if (ctx.isAuthenticated()) {
        return next()
    } else {
        ctx.redirect('/')
    }
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Corriendo en ${PORT}: - http://localhost:${PORT}`)
})

