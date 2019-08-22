const router = require('koa-router')()
const userController = require('../controllers/user')

router
    .prefix("/users")
    // .get('/userinfo/:id')
    .post("/regist", userController.regist)

module.exports = router
