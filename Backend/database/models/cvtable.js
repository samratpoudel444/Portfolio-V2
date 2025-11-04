'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CVTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CVTable.init({
    CVLINK: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CVTable',
  });
  return CVTable;
};