import Koa from 'koa'
import staticFiles from "koa-static"
import BodyParser from "koa-bodyparser";
const port = 3001

const app = new Koa()

app.use(staticFiles("public"))
app.use(BodyParser())

app.use(async ctx => {
    ctx.body = 'just for test222'
})
app.listen(port, function () {
    console.log(`程序运行中, 正在监听${port}端口`)
})