'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experinceTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  experinceTable.init({
    CompanyName: DataTypes.STRING,
    WorkedYear: DataTypes.STRING,
    Position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'experinceTable',
  });
  return experinceTable;
};