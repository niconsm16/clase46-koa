import session from 'koa-session';
import passport from 'koa-passport';
import MongooseStore from "koa-session-mongoose";
import { Factory } from '../../DB/Factories/index.js';
import * as strategy from './strategies.js';

export const authentication = async (app, next) => {

    // Cookies en Mongo Atlas


    // app.use(async (ctx) => {
    //     ctx.isAuthenticated()
    //     ctx.isUnauthenticated()
    //     await ctx.login()
    //     ctx.state.user
    // })
}
