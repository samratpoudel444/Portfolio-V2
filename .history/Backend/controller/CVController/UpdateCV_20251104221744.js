const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs = require("fs");
const sequelize = require("../../helper/sequelizeHelper");

const UpdateCv = async (req, res, next) => {
  try {
    if (!req.file) {
      return next({ code: 400, message: "Please provide the Image" });
    }

    const getDataQuery = `SELECT * FROM "CVTables" WHERE id = :id`;
    const [data] = await sequelize.query(getDataQuery, {
      replacements: { id: 1 },
      type: sequelize.QueryTypes.SELECT,
    });

    const filePath = req.file.path;
    const uploadImage = await cloudinary.uploader.upload(filePath, {
      folder: "CV_images",
      resource_type: "raw",
    });

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Error deleting temp file:", err);
      }
    });

    const AddImage = uploadImage.secure_url;
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
