const Sequelize = require('sequelize');
const data = require("../database/config/config.json"); ;

console.log(data.development.data)

// const sequelize= new Sequelize(
//     dbname,
//     user,
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