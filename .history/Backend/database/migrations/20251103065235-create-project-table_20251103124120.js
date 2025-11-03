'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projectTables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ProjectName: {
        type: Sequelize.STRING,
      },
      ProjectImage: {
        type: Sequelize.STRING,
      },
      ProjectLink: {
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
    await queryInterface.dropTable('projectTables');
  }
};