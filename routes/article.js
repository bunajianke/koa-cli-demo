const router = require('koa-router')()
const articleController = require('../controllers/article')

router
    .prefix('/art')
    .get('/:page', articleController.list)
    .post('/create', articleController.create)
    .post('/delArt', articleController.delete)
    .get("/detail/:id", articleController.datail)

module.exports = router