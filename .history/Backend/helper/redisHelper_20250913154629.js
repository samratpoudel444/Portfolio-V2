const {createClient} = require("redis") ;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });

const client = createClient({
  username: process.env.REDIS_USER_NAME,
  password: process.env.RedisUserPassword,
  socket: {
    host: process.env.RedisHost,
    port: process.env.RedisPort,
  },
});

console.log(process.env.RedisUserName);
module.exports=  client;

REDIS_USER_PASSWORD
REDIS_HOST= redis-15602.c9.us-east-1-2.ec2.redns.redis-cloud.com
REDIS_PORT=15602