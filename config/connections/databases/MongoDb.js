import mongoose from "mongoose";
import dotenv from './../../global/dotenv.js'

let instance = null;

export class MongoDb {

    constructor() { }

    static async getInstance() {

        if (!instance) {

            instance = new MongoDb()
            try {
                console.log('Conectando a MongoDb...')
                mongoose.connect(process.env.MONGODB_COLLECT, {
                    useUnifiedTopology: true,
                    useNewUrlParser: true
                })
                console.log('\x1b[30m\x1b[42m%s\x1b[0m', 'MongoDB Conectado')
            }
            catch (err) { console.log('MongoDb connection error:', err) }
        }
        return instance
    }
}