const {createClient} = require("redis") ;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });

const client = createClient({
  username: process.env.REDIS_USER_NAME,
  password: process.env.REDIS_USER_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

async function test() {
    client.set("1", "1");
    console.log(await client.get("1"));
}

test;

module.exports=  client;
