export class ControllerInvalid {

    constructor() { }

    invalidPath = (req, res) => {
        res.redirect('/')
    }
}
