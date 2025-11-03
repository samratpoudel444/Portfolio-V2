'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skillTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  skillTable.init({
    skillName: DataTypes.STRING,
    skillImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'skillTable',
  });
  return skillTable;
};