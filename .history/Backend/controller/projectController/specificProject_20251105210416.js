const sequelize = require("../../helper/sequelizeHelper");

const showAllProjects = async (req, res, next) => {
  try {
    const query = `select "id","ProjectName","ProjectImage","ProjectLink" from "projectTables" `;
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

module.exports = showAllProjects;
