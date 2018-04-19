import * as _ from 'lodash'
export const onError = async (ctx, next): Promise<any> => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    if (_.isObject(err.message)) {
      ctx.body = Object.assign(err.message, { code: err.status })
    } else {
      ctx.body = {
        code: ctx.status,
        errMsg: err.message
      }
    }
  }
}
