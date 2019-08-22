const Sequelize = require('../config/db')
// article schema
const articleSchema = Sequelize.import('../schemas/article')
// 自动创建表
articleSchema.sync({
    force: true
})

/* 
    创建文章模型
 */

class articleModule {
    // 新增文章
    static async createArticle(data) {
        return await articleSchema.create({
            art_title: data.title,
            author: data.author,
            content: data.content,
            category: data.category
        })
    }

    // 根据文章 id 查询文章
    static async getArticle(id) {
        return await articleSchema.findOne({
            where: {
                art_id: id
            }
        });
    }
}

module.exports = articleModule