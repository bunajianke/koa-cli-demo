const Sequelize = require('../config/db')
// article schema
const articleSchema = Sequelize.import('../schemas/article')
// 自动创建表
articleSchema.sync({
    force: false
})

/* 
    创建文章模型
 */

class articleModule {
    // 获取全部文章
    static async fetchArtList(currentPage = 1) {
        let pageSize = 10
        return await articleSchema.findAndCountAll({
            limit: pageSize,
            offset: (currentPage - 1) * pageSize
        });
    }

    // 新增文章
    static async createArticle(data) {
        return await articleSchema.create({
            art_title: data.title,
            author: data.author,
            content: data.content,
            category: data.category
        });
    }

    // 根据文章 id 查询文章
    static async getArticle(id) {
        return await articleSchema.findOne({
            where: {
                art_id: id
            }
        });
    }

    // 根据 id 删除文章
    static async deleteArticle(id) {
        return await articleSchema.destroy({
            where: {
                art_id: id
            }
        });
    }
}

module.exports = articleModule