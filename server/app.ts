import * as Koa from 'koa'
import * as Logger from 'koa-logger'
import * as Json from 'koa-json'
import * as path from 'path'
import bodyparser from './middlewares/bodyparser'
import { onError } from './middlewares/errorCatcher'

const app = new Koa()

// onError
app.use(onError)

// json
app.use(Json())

// logger
app.use(Logger())

// koa-static
app.use(require('koa-static')(path.join(__dirname, '../public')))

// bodyparser
app.use(bodyparser)

// router
app.use(require('./routes/index'))

module.exports = app
