import { usuarios } from './../../../config/schemas/index.js'


export class Login {


    constructor() { }

    register = async (user) => { new usuarios(user).save() }

    findUser = async (user) => {

        let found = await usuarios.find({ email: user }).limit(1)
        return found.length
            ? { email: found[0].email, password: found[0].password }
            : undefined
    }

    logout = (req, res) => {
        req.session.destroy(err => {
            err && res.status(500)
                .send('Hubo un error en su solicitud: Ya está deslogueado')
        })
        res.clearCookie('session.with.atlas')
    }
}

