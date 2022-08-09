import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, index: true },
    password: { type: String, required: true }
})

export const usuarios = mongoose.model('usuarios', userSchema)
