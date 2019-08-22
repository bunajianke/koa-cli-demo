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
