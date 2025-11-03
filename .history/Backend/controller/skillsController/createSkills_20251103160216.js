// skillName: "", skillImage;


const sequelize = require("../../helper/sequelizeHelper");
const createExperince = async (req, res, next) => {
  try {
    const { skillName } = req.body;
    if (!skillName) {
      return next({
        code: 400,
        message: "Please provide Skill Name",
      });
    }
    const query = `Insert into "skilltable" ("skillName", "skillImage", "Position") Values (:EducationInstitute,:EducationYear, :EducationFaculty )`;
    const insertEducationInfo = await sequelize.query(query, {
      raw: true,
      replacements: {
        skillName,
        WorkedYear,
        EducationFaculty,
      },
    });
    return res
      .status(201)
      .json({ message: "Education Info Inserted Sucessfully" });
  } catch (err) {
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = createExperince;