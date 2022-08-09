import { Sequelize } from 'sequelize';

let instance = null;

export class Sqlite {

    constructor() {

        this.sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'DB/Sqlite/db.db',
        })
    }

    static async getInstance() {
        if (!instance) {
            instance = new Sqlite();
            try {
                await instance.sequelize.authenticate();
                console.log("\x1b[44m\x1b[30m%s\x1b[0m", 'Conexión SQLite realizada');
            }
            catch (err) { console.log('Error en la conexión SQLite', err) }
        }
        return instance;
    }
}
