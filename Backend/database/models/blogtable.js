'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blogTable.init({
    blogTitle: DataTypes.STRING,
    Description: DataTypes.STRING,
    Content: DataTypes.STRING,
    AddImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blogTable',
  });
  return blogTable;
};