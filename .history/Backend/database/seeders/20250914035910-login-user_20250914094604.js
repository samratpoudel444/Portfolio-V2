'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert(
        "Users",
        [
          {
            firstName: "John Doe",
            lastName:
      email:
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      DOB= 
        ],
        {}
      );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Users", null, {});

  }
};
