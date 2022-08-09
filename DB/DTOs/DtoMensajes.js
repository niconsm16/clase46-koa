
export class DtoMensajes {

    constructor(msj) {
        this.id = (() => msj._id ? msj._id : msj.id)();
        this.alias = (() => msj.autor ? msj.autor.alias : msj.alias)();
        this.avatar = (() => msj.autor ? msj.autor.avatar : msj.avatar)();
        this.text = msj.text;
        this.time = msj.time;
    }
}