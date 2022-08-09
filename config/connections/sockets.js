import { ControllerMensajes } from '../../controllers/controllerMensajes.js'
import { normalizeMessages } from '../normalizations/normalizerMensajes.js'

const controller = new ControllerMensajes()

async function sockets(io) {

    io.on('connection', async socket => {

        // Registro conexiones
        console.log("un usuario se ha conectao'")

        //? CHAT

        try {
            let messages = await controller.loadAll()
            socket.emit('messages', normalizeMessages(messages))

        } catch (err) { console.log('Error en sockets: Mensajes') }

        socket.on('new-message', controller.newMessage)
    })
}

export default sockets