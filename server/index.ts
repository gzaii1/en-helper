import Koa from 'koa'
import next from 'next'
import Router from 'koa-router'
import '../db'

const app = next({ dev: true })
const handle = app.getRequestHandler();


// PersonModel.then((Person: any) => {
//     Person.find({ surname: "Doe" }, function (err: any, people: any) {
//         // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
//         if (err) throw err;
//         console.log("People found: %d", people.length);
//         console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

//         people[0].age = 16;
//         people[0].save(function (err: any) {
//             // err.msg == "under-age";
//         });
//     });
// })

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
  