const Sequelize = require('sequelize')
const seq = new Sequelize(
    "test2", // 数据库
    "root", // 用户名
    "root", // 密码
    {
        host: "localhost",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+08:00"  // 设置时区：东八区
    }
);

module.exports = seq