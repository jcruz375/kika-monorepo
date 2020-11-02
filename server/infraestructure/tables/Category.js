
const sequelize = require('sequelize');
const connection = require('../connection');

const Category = connection.define('Categories',{
    name: {
        type:sequelize.STRING,
        allowNull: false
    }
});

//Category.sync({force: false})

module.exports = Category;