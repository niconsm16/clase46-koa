import { Strategy } from 'passport-local'
import { Login } from './../../db/DAOs/index.js'


const db = new Login()

export const register = new Strategy(async (username, password, done) => {
    const user = await db.findUser(username)
    if (user) { return done(null, false) }
    const newUser = { email: username, password }
    db.register(newUser)
    return done(null, newUser)
})

export const login = new Strategy(async (username, password, done) => {
    const user = await db.findUser(username)
    if (!user || user.password !== password) { return done(null, false) }
    return done(null, user)
})

export const serialize = (user, done) => {
    done(null, user.email)
}

export const deserialize = async (username, done) => {
    const user = await db.findUser(username)
    return done(null, user)
}