const Sequelize = require('../config/db')
const userSchema = Sequelize.import('../schemas/users')

userSchema.sync({
    force: false
})

class userModule {
    // 创建
    static async createUser(req) {
        return await userSchema.create({
            username: req.username,
            nickname: req.nickname,
            password: req.password,
            email: req.email
        })
    }

    // 登录
    static async userLogin(req) {
        return await userSchema.findOne({
            where: {
                name: req.username,
                password: req.password
            }
        })
    }
}

module.exports = userModule