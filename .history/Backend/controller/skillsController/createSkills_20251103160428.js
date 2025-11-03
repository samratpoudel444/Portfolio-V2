// skillName: "", skillImage;


const { cloudinary } = require("../../helper/cloudinaryHelper");
const sequelize = require("../../helper/sequelizeHelper");
const createExperince = async (req, res, next) => {
  try {
    const { skillName } = req.body;

      if (!req.file) {
        return next({ code: 400, message: "Please provide Skill Image" });
      }

    if (!skillName) {
      return next({
        code: 400,
        message: "Please provide Skill Name",
      });
    }

    const filePath= req.file.path;
    const uploadImage = await cloudinary.uploader.upload(filePath, {
      folder: "Skills_images",
    });
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error");
          }
        });
        const skillImage = uploadImage.secure_url;

    const query = `Insert into "skilltable" ("skillName", "skillImage") Values (:skillName,:EducationYear, :EducationFaculty )`;
    const insertEducationInfo = await sequelize.query(query, {
      raw: true,
      replacements: {
        skillName,
        skillImage,
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