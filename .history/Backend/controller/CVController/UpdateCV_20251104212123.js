const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs = require("fs");
const sequelize = require("../../helper/sequelizeHelper");

const UpdateCv = async (req, res, next) => {
  try {

    if (!req.file) {
      return next({ code: 400, message: "Please provide the Image" });
    }

    const filePath = req.file.path;
    const uploadImage = await cloudinary.uploader.upload(filePath, {
      folder: "blog_images",
    });

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Error");
      }
    });
    const AddImage = uploadImage.secure_url;
    const query = `Insert into "blogTables" ("blogTitle", "Description","Content","AddImage") Values(:blogTitle,:Description, :Content, :AddImage) `;

    const insertBlog = await sequelize.query(query, {
      replacements: {
        blogTitle: BlogTitle,
        Description,
        Content,
        AddImage,
      },
    });
    return res.status(201).json({ message: "Blog Created Sucessfully" });
  } catch (err) {
    console.log(err);
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = UpdateCv;
