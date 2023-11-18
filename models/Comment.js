// needs to add comment only and date created..
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        text:{
            type: DataTypes.STRING,
            required:true
        },
    },
    {
        modelName: 'comment',
        freezeTableName: true,
        sequelize
    }
);

module.exports=Comment;