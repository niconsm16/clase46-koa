import MongooseStore from "koa-session-mongoose";
import { MongoDb } from "../connections/databases/index.js";

export default class Cookies extends MongoDb {

    constructor(app) {

        super()
        this.connect = MongoDb.getInstance();
    }
}