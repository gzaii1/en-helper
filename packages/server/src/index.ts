import Koa from 'koa'
// import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import statics from 'koa-static'
import path from 'path'
import './models'

const staticPath = '../static';

const app = new Koa
app.use(bodyParser())

app.use(statics(path.join(__dirname, staticPath)))

app.listen(3001, () => {
  console.log('app is running at http://localhost:3001')
})