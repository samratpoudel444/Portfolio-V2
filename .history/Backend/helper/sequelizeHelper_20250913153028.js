const Sequelize = require('sequelize');
const data = require("../database/config/config.json"); ;

// console.log(data.development.password)

const sequelize= new Sequelize(
    data.development.database,
    data.development.username,
    data.development.password,{
        host: data.development.host,
        data.development.port:   ,
        dialect:data.development.dialect,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
    
)