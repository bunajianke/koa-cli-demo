module.exports = (sequelize, dataTypes) => {
    return sequelize.define(
        "article",
        {
            art_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            art_title: {
                type: dataTypes.STRING,
                allowNull: false,
                field: "title"
            },
            author: {
                type: dataTypes.STRING,
                allowNull: false,
                field: "author"
            },
            content: {
                type: dataTypes.STRING,
                allowNull: false,
                field: "content"
            },
            category: {
                type: dataTypes.STRING,
                allowNull: false,
                field: "category"
            },
            createdAt: {
                type: dataTypes.DATE
            },
            updatedAt: {
                type: dataTypes.DATE
            }
        },
        {
            /**
             * 如果为true，则表示名称和model相同，即user
             * 如果为fasle，mysql创建的表名称会是复数，即users
             * 如果指定的表名称本身就是复数，则形式不变
             */
            freezeTableName: true
        }
    );
};
