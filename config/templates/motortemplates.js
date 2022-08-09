import Pug from 'koa-pug'


export function motortemplates(app) {

  new Pug({
    app: app,
    viewPath: './config/templates/views/pages',
  })
}
