import { Sequelize } from 'sequelize';
import dotenv from '../../global/dotenv.js';


let instance = null;

export class MySQL {

    constructor() {

        this.sequelize = new Sequelize(process.env.MYSQL_CONNECT);
    }

    async connect() {
        if (!instance) {
            return new Sequelize(process.env.MYSQL_CONNECT)
        }
    }

    static async getInstance() {

        if (!instance) {
            instance = new MySQL()
            try {
                await instance.sequelize.authenticate();
                console.log("\x1b[46m\x1b[30m%s\x1b[0m", 'Conexión mySQL realizada');
            }
            catch (err) { console.log('Error en la conexión mySQL', err) }

        }
        return instance;
    }
}