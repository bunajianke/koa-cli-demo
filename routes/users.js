const router = require('koa-router')()
const userController = require('../controllers/user')

router
    .prefix("/users")
    // .get('/userinfo/:id')
    .post("/regist", userController.regist)
    .post("/login", userController.login)

module.exports = router
