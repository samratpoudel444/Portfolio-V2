const { createClient } = require("redis");
const dotenv = require("dotenv");
const path = require("path");

// Load .env file (make sure the path is correct)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = createClient({
  username: process.env.REDIS_USER_NAME,
  password: process.env.REDIS_USER_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

async function test() {
  try {
    await client.connect();
    console.log("✅ Connected to Redis");

    await client.set("1", "1");
    const value = await client.get("1");
    console.log("Value from Redis:", value);
  } catch (err) {
    console.error("❌ Redis error:", err);
  }
}

test();

module.exports = client;
