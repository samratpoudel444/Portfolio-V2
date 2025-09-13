const {createClient} = require("redis") ;

const client = createClient({
  username: process.env.RedisUserName,
  password: process.env.RedisUserPassword,
  socket: {
    host: RedisHost,
    port: 15602,
  },
});

//console.log(client)
module.exports=  client;