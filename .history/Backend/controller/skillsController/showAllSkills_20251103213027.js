const sequelize = require("../../helper/sequelizeHelper");

const showAllSkills = async (req, res, next) => {
  try {
    const query = `select "id", "skillName","skillImage" from "skillTables"`;
    const [data] = await sequelize.query(query, {
      raw: true,
    });

    if (!data) {
      return next({
        code: 404,
        message: "No Data Found",
      });
    }

    return res.status(200).json({ data: data });
  } catch (err) {
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = showAllSkills;
