const sequelize = require('sequelize');
const connection = require('../connection');
const Categories = require('./Category');

const Products = connection.define('Products',{
    image:{
        type: sequelize.TEXT,
        allowNull: false
    },
    name: {
        type:sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false
    },
    price:{
        type: sequelize.FLOAT,
        allowNull: false
    },
});

Products.belongsTo(Categories);
Categories.hasMany(Products);
//Products.sync({force: true})

module.exports = Products;