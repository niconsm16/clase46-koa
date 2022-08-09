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

            //     {
            //         successRedirect: '/',
            //         failureRedirect: '/login-error'
            //     }
            // )(ctx)
            // }

            async (err, user, info, status) => {
                if (user === false) {
                    ctx.redirect('/login-error')
                }
                else {
                    // console.log(ctx.state)
                    // await ctx.login(user)
                    ctx.redirect('/')
                }
            })(ctx)

    }



    // createUser = passport.authenticate('register', {
    //     successRedirect: '/',
    //     failureRedirect: '/register-error'
    // })


    async logout(ctx, next) {
        return await ctx.render('logout', { user: 'juano' })

        //     try {

        //         res.render('logout', { user: req.session.passport.user })
        //         res.clearCookie('session.with.atlas')
        //         req.session.destroy(err => {
        //             err && res.status(500)
        //                 .send('Hubo un error en su solicitud: Ya está deslogueado')
        //         })
        //     }
        //     catch (err) { console.log('Error en controlador - Login', err) }
    }
}
