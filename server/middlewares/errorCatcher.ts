export const onError = async (ctx, next): Promise<any> => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status
    ctx.body = err
  }
}