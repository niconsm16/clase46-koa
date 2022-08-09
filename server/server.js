

import child from 'child_process'
import cluster from 'cluster'
import { cpus } from 'os'
// import { config } from './../config/index.js'


export default class Server {

    constructor() { }

    fork = (PORT, app) => {
        try {
            const forkServer = child.fork('./server/fork.js')

            const server = app
                .listen(PORT, () => {
                    forkServer.on('message', () => {
                        forkServer.send({ PORT })
                        console.log(`Oyendo desde ${server.address().port} - http://localhost:${PORT}`)
                    })
                })
                .on('error', error => { console.log('error hubo', error) })
        }
        catch (err) { console.log('Error del fork en server/server.js') }
    }


    cluster = (PORT, app) => {

        const numCPUs = cpus().length

        if (cluster.isPrimary) {

            console.log('Número de clusters(procesadores) posibles:', numCPUs)
            console.log(`Master ${process.pid}: INICIALIZADO`)

            for (let i = 0; i < numCPUs; i++) { cluster.fork() }

            cluster.on('exit', worker => {
                console.log('worker', worker.process.pid, 'caído -', new Date().toLocaleString())
                cluster.fork()
            })

        } else {
            console.log(`Proceso Cluster: Puerto: ${PORT} - pid: ${process.pid}`)
            const server = app
                .listen(PORT, () => { console.log(`Oyendo desde ${server.address().port} - http://localhost:${PORT}`) })
                .on('error', error => console.log('error hubo', error))
        }
    }
}

