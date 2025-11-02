const Sequelize = require("sequelize");
const data = require("../database/config/config.json");

const sequelize = new Sequelize(
  data.development.database,
  data.development.username,
  data.development.password,
  {
    host: data.development.host,
    port: data.development.port,
    dialect: data.development.dialect,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      family: 4,
    },
    logging: false,

    retry: {
      max: 5, 
    },

    pool: {
      max: 10,
      min: 0,
      acquire: 30000, 
      idle: 10000,
    },
  }
);

(async () => {
  let connected = false;
  let retryCount = 0;

  while (!connected && retryCount < 5) {
    try {
      await sequelize.authenticate();
      console.log("Connection made successfully.");
      connected = true;
    } catch (error) {
      retryCount++;
      console.log(`Retry ${retryCount}/5 - DB not ready yet...`);
      await new Promise((res) => setTimeout(res, 3000)); 
    }
  }

  if (!connected) {
    console.error(" Unable to connect after retries.");
  }
})();

module.exports = sequelize;
