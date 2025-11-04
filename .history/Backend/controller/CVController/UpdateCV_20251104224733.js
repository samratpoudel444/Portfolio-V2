const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs = require("fs");
const sequelize = require("../../helper/sequelizeHelper");

const UpdateCv = async (req, res, next) => {
  try {

    const getDataQuery = `SELECT * FROM "CVTables" WHERE id = :id`;
    const [data] = await sequelize.query(getDataQuery, {
      replacements: { id: 1 },
      type: sequelize.QueryTypes.SELECT,
    });

    const query = `UPDATE "CVTables" SET "CVLINK" = :AddImage WHERE id = :id`;

    await sequelize.query(query, {
      replacements: {
        AddImage,
        id: 1,
      },
      type: sequelize.QueryTypes.UPDATE,
    });

    console.log('dhas')

    return res.status(201).json({ message: "CV Updated Successfully" });
  } catch (err) {
    console.log(err);
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = UpdateCv;
