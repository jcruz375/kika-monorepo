const sequelize = require('sequelize');
const connection = require('../connection');

const Promos = connection.define('Promos',{
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

//Promos.sync({force: true})

module.exports = Promos;