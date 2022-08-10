export const login = async (ctx, next) => {
    ctx.isAuthenticated()
        ? next()
        : ctx.redirect('/login')
}

export const logged = async (ctx, next) => {

    ctx.state.user
        ? ctx.redirect('/')
        : next()
    // await ctx.isAuthenticated()
    //     ? ctx.redirect('/')
    //     : next();
}