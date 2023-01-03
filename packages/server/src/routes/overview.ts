import type Router from '@koa/router'

export default function Overview(router: Router): Router {
    return router.get('/overview', async (ctx) => {
        console.log('overview', ctx.request.query)
    })
}
