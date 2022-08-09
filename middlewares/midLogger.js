import { logger } from "../log/logging.js"

export const midLogAll = (ctx, next) => {
    const { originalUrl, method } = ctx
    logger.info(`Ruta: ${originalUrl} - Método: ${method}`)
    // next()
}

export const midLogProductsError = async (ctx, next) => {
    try {
        await Promise.reject('error');
    } catch (err) {
        logger.error(`Error en la api Productos: ${err.message}`)
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit = ('error', err, ctx)
    }

}

export const midLogInvalid = (ctx, next) => {
    const { originalUrl, method } = ctx
    logger.warn(`Ruta: ${originalUrl} - Método: ${method} - Ruta Inexistente.`)
    // next();
}