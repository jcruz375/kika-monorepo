const sequelize = require('sequelize');
const connection = require('../connection');

const Payments = connection.define('Payments',{
    name: {
        type:sequelize.STRING,
        allowNull: false
    }
});

//Payments.sync({force: false})

module.exports = Payments;