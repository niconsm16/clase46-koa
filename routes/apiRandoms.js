import express from "express";
import { ControllerRandoms } from "../controllers/index.js";


const api = express.Router()

export class ApiRandoms {

    #controller;

    constructor() {
        this.#controller = new ControllerRandoms();
    }

    static get getClass() {
        return new ApiRandoms();
    }

    get api() {
        api.get('/api/randoms', this.#controller.randoms)
        return api;
    }
}
