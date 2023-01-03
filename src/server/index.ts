import Koa from 'koa'
import next from 'next'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import statics from 'koa-static'
import path from 'path'
import '../models'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handler = nextApp.getRequestHandler()
const staticPath = '../static';

(async () => {
  try {
    await nextApp.prepare()
    const router = new Router

    router.get('/a/:id',async (ctx)=> {
      const id = ctx.params.id
      console.log('id:', id)
      // @ts-ignore
      await handler(ctx.req, ctx.res, {
          pathname: '/a',
          query: { id }
      })
      ctx.respond = false
    })
    
    const server = new Koa
    server.use(bodyParser())

    server.use(statics(path.join(__dirname, staticPath)))

    server.use(router.routes())

    server.use(async (ctx, next) => {
      await handler(ctx.req, ctx.res)
      ctx.respond = false
    })
  
    server.listen(3000, () => {
      console.log('server is running at http://localhost:3000')
    })
  } catch (e) {
    console.error(e)
  }
})()
