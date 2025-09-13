const Sequelize = require('sequelize');

const sequelize= new Sequelize(
    dbname,
    user,
    password,{
        host:
        port:
        dialect
    }
)