'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert(
        "Users",
        [
          {
            firstName: "John Doe",
            lastName:""
      email:"",
      password:"", 
      DOB:"",
          }
        ],
        {}
      );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Users", null, {});

  }
};
