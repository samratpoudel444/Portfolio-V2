const bcrypt= require("bcrypt");

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword= await()
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
