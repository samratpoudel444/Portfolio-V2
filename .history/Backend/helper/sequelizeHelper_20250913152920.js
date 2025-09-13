const Sequelize = require('sequelize');
const data = require("../database/config/config.json"); ;

console.log(data.development.password)

// const sequelize= new Sequelize(
//     data.development.database,
//     username,
//     data.development.password,{
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