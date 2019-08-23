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
        let req = ctx.request.body
        if(!req.username || !req.password) {
            errorMsg(ctx, 412, "-1", "请输入用户名或密码", null)
            return
        }

        try {
            let authLog = await userModule.userLogin(req);
            
            if(!authLog) {
                errorMsg(ctx, 412, "-1", "用户不存在或密码错误，请确认后重试", null);
                return
            }
            errorMsg(ctx, 200, "0", "登录成功", authLog)
            
        } catch (error) {
            errorMsg(ctx, 412, '-1', "登录失败", error)
        }
    }

    /* 
        用户注销
     */
    static async logout(ctx) {
        
    }
}

module.exports = userController