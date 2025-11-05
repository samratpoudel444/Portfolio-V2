'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blogTitle: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Content: {
        type: Sequelize.TEXT
      },
      AddImage: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        onUpdate: Sequelize.Now,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogTables');
  }
};