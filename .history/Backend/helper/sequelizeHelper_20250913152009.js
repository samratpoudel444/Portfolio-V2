const Sequelize = require('sequelize');

const sequelize= new Sequelize(
    dbname,
    user,
    password,{
        host:
        port:
        dialect:"postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: console.log,
  }
    }
)