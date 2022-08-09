import express from 'express'
import { ControllerInvalid } from '../controllers/index.js'
import { midLogInvalid } from '../middlewares/midLogger.js'


const api = express.Router()

export class ApiInvalid {

    #controller;

    constructor() {
        this.#controller = new ControllerInvalid();
    }

    static get getClass() {
        return new ApiInvalid();
    }

    get api() {
        api.get('*', midLogInvalid, this.#controller.invalidPath)
        return api;
    }
}