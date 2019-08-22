module.exports = function errorMsg(ctx, status = 200, code, msg, data) {
    ctx.response.status = status
    ctx.body = {
        code,
        msg,
        data
    }
}