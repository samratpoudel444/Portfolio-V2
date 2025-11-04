const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs = require("fs");
const sequelize = require("../../helper/sequelizeHelper");

const showCV = async (req, res, next) => {
  try {

    const query = `SELECT * FROM "CVTables" WHERE id = :id`;
    const [data] = await sequelize.query(getDataQuery, {
      replacements: { id: 1 },
      type: sequelize.QueryTypes.SELECT,
    });


    return res.status(201).json({ message: data });
  } catch (err) {
    console.log(err);
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = UpdateCv;
