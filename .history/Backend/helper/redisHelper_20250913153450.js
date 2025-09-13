const {createClient} = require("redis") ;

const client = createClient({
  username: "default",
  password: "7HccCphDJxFKzt7KmX3qiHLFhm92Fkor",
  socket: {
    host: "redis-15602.c9.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 15602,
  },
});


export default client;