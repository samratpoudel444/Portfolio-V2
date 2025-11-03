const sequelize = require("../../helper/sequelizeHelper");

const showByID = async (req, res, next) => {
  try {
    const id= req.params.id;
    const query = `select "BlogTitle","Description","Content" from "blogTables" where id= :id`;
    const data = await sequelize.query(query, {
      raw: true,
      replacements:{id}
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

module.exports = showExperinceByID;
