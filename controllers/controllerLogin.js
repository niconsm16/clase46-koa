import passport from 'koa-passport'


export class ControllerLogin {

    constructor() { }

    async login(ctx) {
        return await ctx.render(
            'login', {
            title: 'Ingresa!',
            error: false
        })
    }

    async loginError(ctx) {
        return await ctx.render(
            'login', {
            title: 'Ingresa!',
            error: true
        })
    }

    async register(ctx) {
        return await ctx.render(
            'register', {
            title: 'Regístrate!',
            exist: false
        })
    }

    async registerError(ctx) {
        return await ctx.render(
            'register', {
            title: 'Registrate!',
            exist: true
        })
    }

    async verification(ctx) {
        return passport.authenticate('login',
            {
                successRedirect: '/',
                failureRedirect: '/login-error'
            }
        )(ctx)
    }

    async createUser(ctx) {
        return passport.authenticate('register',
            {
                successRedirect: '/',
                failureRedirect: '/register-error'
            }
        )(ctx)
    }

    async logout(ctx) {
        let user = []
        user = [...user, ctx.state.user.email]
        if (ctx.isAuthenticated()) {
            await ctx.logout();
            ctx.render('logout', { user: user[0] })
        } else {
            ctx.redirect('/login')
        }
    }
}
