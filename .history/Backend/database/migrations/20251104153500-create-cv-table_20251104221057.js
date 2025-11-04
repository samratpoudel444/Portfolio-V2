'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CVTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CVLINK: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        defaultVa
      },
      updatedAt: {
        type: Sequelize.DATE,
        onUpdate:
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CVTables');
  }
};