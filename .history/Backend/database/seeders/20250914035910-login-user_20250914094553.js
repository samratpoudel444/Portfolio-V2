'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert(
        "Users",
        [
          {
            firstName: "John Doe",
            lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
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
