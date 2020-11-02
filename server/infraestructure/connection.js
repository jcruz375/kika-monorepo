
const sequelize = require('sequelize');
const connection = new sequelize('kika_hamburgueria', 'root', '12345*', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
    ports: 3306
});

module.exports = connection;