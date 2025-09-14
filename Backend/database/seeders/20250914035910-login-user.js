const bcrypt= require("bcrypt");
const dotenv= require('dotenv');
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    console.log(process.env.SALT_ROUND);
    console.log(process.env.SYSTEM_PASSWORD);
       const saltRounds = parseInt(process.env.SALT_ROUND);
    const hashedPassword = await bcrypt.hash(
      process.env.SYSTEM_PASSWORD,
      saltRounds
    );
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Samrat",
          lastName: "Poudel",
          email: "poudelsamrat444@gmail.com",
          password: hashedPassword,
          DOB: "2003-04-27",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
