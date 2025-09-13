samrat@samrats-MacBook-Air helper % node sequelizehelper.js
(node:8829) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///Users/samrat/Desktop/Portfolio%20v2/Backend/helper/sequelizehelper.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /Users/samrat/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
node:internal/modules/esm/assert:88
        throw new ERR_IMPORT_ATTRIBUTE_MISSING(url, 'type', validType);
              ^

TypeError [ERR_IMPORT_ATTRIBUTE_MISSING]: Module "file:///Users/samrat/Desktop/Portfolio%20v2/Backend/database/config/config.json" needs an import attribute of "type: json"
    at validateAttributes (node:internal/modules/esm/assert:88:15)
    at defaultLoad (node:internal/modules/esm/load:129:3)
    at async ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:580:32) {
  code: 'ERR_IMPORT_ATTRIBUTE_MISSING'
}

Node.js v23.11.0
samrat@samrats-MacBook-Air helper % 

// const sequelize= new Sequelize(
//     dbname,
//     user,
//     password,{
//         host:   ,
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