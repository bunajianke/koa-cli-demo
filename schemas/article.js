module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "article",
        {
            art_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            art_title: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "title"
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "author"
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "content"
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "category"
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
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
