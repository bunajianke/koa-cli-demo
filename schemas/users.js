module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'nickname'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'email'
        },
        createdAt: {
            type: DataTypes.DATE
        }
    })
}