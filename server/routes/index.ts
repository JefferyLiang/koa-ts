const router = require('koa-router')()
import * as Index from '../controllers/index.controller'

router.prefix('/')

router.get('/', Index.index)

export default router