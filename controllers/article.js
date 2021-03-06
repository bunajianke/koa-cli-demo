const articleModule = require('../modules/article')

class articleController {
    /* 
        获取文章列表
    */
    
    static async list(ctx) {
        let page = ctx.params.page
        let artList = await articleModule.fetchArtList(page);
        ctx.body = {
            artList
        };
    }

    /* 
        创建文章
     */

    static async create(ctx) {
        let req = ctx.request.body;
        if(req.title && req.author && req.content && req.category) {
            try {
                const { art_id } = await articleModule.createArticle(req);
                const data = await articleModule.getArticle(art_id);

                ctx.response.status = 200
                ctx.body = {
                    code: '0',
                    msg: '创建文章成功',
                    data
                }
            } catch (error) {
                ctx.response.status = 412
                ctx.body = {
                    code: '-1',
                    msg: '创建文章失败',
                    err: error
                }
            }
        } else {
            ctx.response.status = 416
            ctx.body = {
                code: '-2',
                msg: '参数不齐全'
            }
        }
    }

    /* 
        查询文章
     */

    static async datail(ctx) {
        let id = ctx.params.id
        if(!id) return
        
        try {
            let data = await articleModule.getArticle(id);
            ctx.response.status = 200;
            ctx.body = {
                code: "0",
                msg: "获取详情成功",
                data
            };
        } catch (error) {
            ctx.response.status = 412;
            ctx.body = {
                code: "-1",
                msg: "查询失败",
                error
            };
        }
    }

    /* 
        删除文章
    */
    
    static async delete(ctx) {
        let req = ctx.request.body
        if(!req.art_id) return

        try {
            let data = await articleModule.deleteArticle(req.art_id);
            ctx.response.status = 200;
            ctx.body = {
                code: "0",
                msg: "删除成功",
                data
            };
        } catch (error) {
            ctx.response.status = 412;
            ctx.body = {
                code: "-1",
                msg: "删除失败",
                error
            };
        }
    }
}

module.exports = articleController