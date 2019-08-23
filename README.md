```
    npm install
    npm run dev
    
```

#### 目录结构
    koa-cli-2
    ├── app.js
    ├── bin
    │   └── www
    ├── config
    │   └── db.js   // 数据库配置
    ├── controllers
    │   └── article.js      // 控制器
    ├── modules
    │   └── article.js      // 数据库操作模型
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    ├── README.md
    ├── routes
    │   ├── article.js
    │   ├── index.js
    │   └── users.js
    ├── schemas
    │   └── article.js        // 数据表
    └── views   // 视图
        ├── error.pug
        ├── index.pug
        └── layout.pug


#### devServer.proxy

```
    devServer: {
        port: 8080,
        host: 'localhost',
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }

            /*
                用 `/api` 代替 `http://localhost:3000`，并且重写 `/api` 为空
            */

        /api/user/info => http://localhost:3000/api/user/info => http://localhost:3000/user/info
        
        }
    }
```