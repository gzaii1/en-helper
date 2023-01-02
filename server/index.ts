import Koa from 'koa'
import next from 'next'
import Router from 'koa-router'

const app = next({ dev: true })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const router = new Router()
    
    router.get('/index', async (ctx, next) => {
        console.log('ctx:', ctx)
        const html = app.renderToHTML(ctx.req, ctx.res, '/index',ctx.params)
        ctx.body = html
    })

    const server = new Koa
    server.use(async (ctx, next) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(router.routes()).use(router.allowedMethods())
  
    server.listen(3000, () => {
      console.log('server is running at http://localhost:3000')
    })
  })
  