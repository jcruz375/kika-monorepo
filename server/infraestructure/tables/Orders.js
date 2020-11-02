
const sequelize = require('sequelize');
const connection = require('../connection');

const Order = connection.define('Orders',{
    client:{
        type: sequelize.STRING,
        allowNull: false
    },
    contact:{
        type: sequelize.STRING,
        allowNull: false
    },
    adress: {
        type:sequelize.STRING,
        defaultValue: '',
        allowNull: false
    },
    payment: {
        type: sequelize.STRING,
        allowNull: false
    },
    observations: {
        type: sequelize.TEXT,
        allowNull: false
    },
    products:{
        type: sequelize.JSON,
        allowNull: false
    },
    price:{
        type: sequelize.FLOAT,
        allowNull: false
    },
    Status: {
        type: sequelize.STRING,
        defaultValue: 'Solicitado',
        allowNull: true
    },
    order_id: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: true
    }
});

//Order.sync({force: true});

module.exports = Order;