const userModule = require("../modules/user");
const errorMsg = require('../utils/msg')

class userController {
    /* 
        创建用户
     */
    static async regist(ctx) {
        let req = ctx.request.body
        if(!req.username) {
            errorMsg(ctx, 412, "-1", "用户名不能为空", null);
            return
        }

        try {
            let data = await userModule.createUser(req);
            errorMsg(ctx, 200, '0', '用户创建成功', data)
        } catch (error) {
            errorMsg(ctx, 412, "-1", "创建用户失败", error)
        }
    }

    /* 
        用户登录
     */
    static async login(ctx) {

    }

    /* 
        用户注销
     */
    static async logout(ctx) {
        
    }
}

module.exports = userController