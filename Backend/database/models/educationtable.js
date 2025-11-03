'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class educationTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  educationTable.init({
    EducationInstitute: DataTypes.STRING,
    EducationYear: DataTypes.STRING,
    EducationFaculty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'educationTable',
  });
  return educationTable;
};