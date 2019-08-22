const Sequelize = require('../config/db')
const userSchema = Sequelize.import('../schemas/users')

userSchema.sync({
    force: false
})

class userModule {
    static async createUser(req) {
        return await userSchema.create({
            username: req.username,
            nickname: req.nickname,
            password: req.password,
            email: req.email
        })
    }
}

module.exports = userModule