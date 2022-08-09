import { MongoDb } from "../connections/databases/index.js";

export default class Cookies extends MongoDb {

    constructor() {

        super()
        this.connect = MongoDb.getInstance();
        // this.cookies = {
        //     store: new MongooseStore()
        //     name: 'sessions',
        //     collection: 'sessions',
        //     expires: 600000,
        // })
    }
    // cookies() {
    //     return {
    //         store: new MongooseStore(),
    //         rolling: true,
    //         overwrite: true,
    //         maxAge: 300000,
    //         key: 'coderhouse'
    //     }
    // }

}