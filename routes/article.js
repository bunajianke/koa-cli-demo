const router = require('koa-router')()
const articleController = require('../controllers/article')

router.prefix('/art')
.post('/create', articleController.create)
.get("/detail/:id", articleController.datail)

module.exports = router