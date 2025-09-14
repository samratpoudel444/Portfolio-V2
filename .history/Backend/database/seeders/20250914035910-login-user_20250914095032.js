const bcrypt= require("bcrypt");
const dotenv= require('dotenv');
dotenv.config({path:"../../env"})
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword= await bcrypt.hash(process.env.SYSTEM_PASSWORD,process.env.SALT_ROUND)
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Samrat",
          lastName: "Poudel",
          email: "poudelsamrat444@gmail.com",
          password: "",
          DOB: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
