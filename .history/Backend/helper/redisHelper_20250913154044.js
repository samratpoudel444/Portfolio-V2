const {createClient} = require("redis") ;



const client = createClient({
  username: process.env.RedisUserName,
  password: process.env.RedisUserPassword,
  socket: {
    host: process.env.RedisHost,
    port: process.env.RedisPort,
  },
});

console.log(client)
module.exports=  client;