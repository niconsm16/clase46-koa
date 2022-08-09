export * from './DaoLogin/loginMongoDb.js'


export const DAOs = {
    test: {
        productos: () => import('./DaoProductos/daoProductosTest.js'),
        mensajes: () => import('./DaoMensajes')
    },
    mongodb: {
        productos: async () => import('./DaoProductos'),
        mensajes: async () => import('./DaoMensajes/daoMensajesMongoDb.js')
    },
    sqlite3: {
        mensajes: async () => await import('./DaoMensajes/daoMensajesSqlite.js')
    },
    mysql: {
        productos: async () => import('./DaoProductos/daoProductosMySql.js'),
        mensajes: async () => import('./DaoMensajes/daoMensajesMongoDb.js')
    }
}
