'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("educationTables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      EducationInstitute: {
        type: Sequelize.STRING,
      },
      EducationYear: {
        type: Sequelize.STRING,
      },
      EducationFaculty: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        onUpdate: Sequelize.Now,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('educationTables');
  }
};