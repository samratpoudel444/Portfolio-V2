const Sequelize = require('sequelize');
const data = require("../database/config/config.json"); ;

console.log(data.development.username)

// const sequelize= new Sequelize(
//     data.development.database,
//     username,
//     password,{
//         host:,
//         port:   ,
//         dialect:"postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//     logging: false,
//   }
    
// )