const sequelize = require('sequelize');
const connection = require('../connection');

const Admin = connection.define('Admins',{
    user_name: {
        type:sequelize.STRING,
        allowNull: false
    },
    user_password: {
        type: sequelize.STRING,
        allowNull: false
    }
});

//Admin.sync({force: true});

module.exports = Admin;