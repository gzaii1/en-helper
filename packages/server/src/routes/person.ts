import type Router from '@koa/router'

export default function Person(router: Router): Router {
    return router.get('/person', async (ctx) => {
        console.log('person', ctx.request.query)
    })
}
