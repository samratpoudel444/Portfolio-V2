const {createClient} = require("redis") ;

const client = createClient({
  username: "default",
  password: "7HccCphDJxFKzt7KmX3qiHLFhm92Fkor",
  socket: {
    host: "redis-15602.c9.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 15602,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

await client.set("foo", "bar");
const result = await client.get("foo");
console.log(result);
