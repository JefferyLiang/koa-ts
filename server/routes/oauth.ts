const router = require('koa-router')()
import * as oauth from '../controllers/OAuth.controller'

router.prefix('/api/v1/oauth')

router.post('/', oauth.OAuthRedirect)

export default router