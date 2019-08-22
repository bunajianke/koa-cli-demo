const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', ctx => {
  console.log(ctx.request.body);
})

router.post('/test', ctx => {
  console.log(ctx.request.body)
  ctx.body = JSON.stringify(ctx.request.body)
})

module.exports = router
