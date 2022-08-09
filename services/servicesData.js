import { args } from '../config/index.js'
import { cpus } from 'os'


export class ServicesData {

    #CPUs

    constructor() {
        this.#CPUs = cpus().length;
    }

    sysInfo = () => {
        return {
            'Argumentos de entrada': { 'Puerto usado': args.port },
            'Sistema Operativo': process.platform,
            'Version de Node': process.version,
            'Memoria Reservada': process.memoryUsage().rss,
            'Path de ejecución': process.argv[1],
            'Id del proceso': process.pid,
            'Ruta del proyecto': process.cwd(),
            'numero de CPUs': this.#CPUs
        }
    }
}

