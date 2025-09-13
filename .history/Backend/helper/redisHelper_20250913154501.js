const {createClient} = require("redis") ;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });

const client = createClient({
  username: process.env.REDISUSERedisUserName,
  password: process.env.RedisUserPassword,
  socket: {
    host: process.env.RedisHost,
    port: process.env.RedisPort,
  },
});

console.log(process.env.RedisUserName);
module.exports=  client;