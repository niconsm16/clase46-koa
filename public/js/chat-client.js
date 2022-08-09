//# Chat
import socket from "./socket-client.js";


let mensajes = document.getElementById('mensajes')

const templateMsj = (msj) => {

    return (`<div class="flex items-center py-1">
                <span class="w-auto inline-block mr-0.5"><img src=${msj.avatar || msj.autor.avatar} class="w-8 h-8 object-cover rounded" /></span>
                <b class="text-red-700 mr-1" style="scroll-snap-align: end">${msj.alias || msj.autor.alias}</b>
                <span class="text-green-600">${msj.time} :</span>
                <i class="text-black">${msj.text}</i><br>
                </div>`)
}

//? Socket mensajes =============================================

socket.on('messages', data => render(data))

const render = data => {

    const autoresSchema = new normalizr.schema.Entity('autores')
    const msjsSchema = new normalizr.schema.Entity('mensajes', { autor: autoresSchema }, { idAttribute: 'id' })
    const fileSchema = [msjsSchema]

    const denormalized = normalizr.denormalize(data.normalized.result, fileSchema, data.normalized.entities)

    let chat = denormalized.map(msj => templateMsj(msj)).join(" ")
    mensajes.innerHTML = chat

    document.getElementById('chat-title').append(` (Compresión: ${data.compresion}%)`)
}

//? Nuevos mensajes de otros =====================================

socket.on('new-message', msj => {
    let newmsj = document.createElement('div')
    newmsj.innerHTML = templateMsj(msj)
    mensajes.append(newmsj)
})

//? Submit Action ===============================================

let chat = document.getElementById('chat')
chat.onsubmit = addMessage.bind()

function addMessage(e) {

    e.preventDefault()

    let nickname = document.getElementById('nickname').value
    let avatar = document.getElementById('avatar').value
    let message = document.getElementById('message').value

    if (message !== '') {
        let mensaje = {
            autor: {
                id: nickname,
                alias: nickname,
                avatar: avatar,
            },
            text: message,
            time: `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
        }



        socket.emit('new-message', mensaje)
        document.getElementById('message').value = ''
        document.getElementById('mensajes').scrollTo({ behavior: "smooth", top: 9999999 })
    }
}