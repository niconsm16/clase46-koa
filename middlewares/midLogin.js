export const login = async (ctx, next) => {
    ctx.isAuthenticated()
        ? next()
        : ctx.redirect('/login')
}

