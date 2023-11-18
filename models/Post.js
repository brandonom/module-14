const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            required: true
        },
        text: {
            type: DataTypes.STRING,
            required: true
        }
    },
    {
        modelName: 'post',
        freezeTableName: true,
        sequelize
    }
);

module.exports = Post;