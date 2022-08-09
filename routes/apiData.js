import express from 'express'
import compression from 'compression'
import { ControllerData } from '../controllers/index.js'


const api = express.Router()

export class ApiData {

    #controller;

    constructor() {
        this.#controller = new ControllerData();
    }

    static get getClass() {
        return new ApiData();
    }

    get api() {
        api.get('/info', this.#controller.recollectData)
        api.get('/info/compresion',
            compression({ level: 9 }),
            this.#controller.recollectData)
        return api;
    }
}