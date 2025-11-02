'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("blogTables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      blogTitle: {
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.STRING,
      },
      Content: {
        type: Sequelize.STRING,
      },
      AddImage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.Now,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogTables');
  }
};