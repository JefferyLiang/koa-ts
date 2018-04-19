import * as Router from 'koa-router'
import * as Index from '../controllers/index.controller'
const router = new Router()

router.prefix('/')

router.get('/', Index.index)

module.exports = router.routes()
