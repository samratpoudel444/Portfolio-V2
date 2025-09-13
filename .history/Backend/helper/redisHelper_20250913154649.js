const {createClient} = require("redis") ;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });

const client = createClient({
  username: process.env.REDIS_USER_NAME,
  password: process.env.RedisUserPassword,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

console.log(process.env.RedisUserName);
module.exports=  client;

REDIS_USER_PASSWORD
REDIS_HOST
REDIS_PORT