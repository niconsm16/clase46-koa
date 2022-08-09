import mongoose from "mongoose"


const msjSchema = new mongoose.Schema({
    autor: {
        alias: { type: String, required: true, max: 35 },
        avatar: { type: String, required: true, max: 300 }
    },
    text: { type: String, required: true },
    time: { type: String, required: true, max: 20 }
})


export const msj = mongoose.model('mensajes', msjSchema)
