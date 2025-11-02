const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs = require("fs");
const sequelize = require("../../helper/sequelizeHelper");

const createBlogs = async (req, res, next) => {
  try {
    const { BlogTitle, Description, Content } = req.body;

    if (!BlogTitle || !Description || !Content) {
      return next({ code: 400, message: "Please provide necessary data" });
    }

    if (!req.file) {
      return next({ code: 400, message: "Please provide the Image" });
    }

    const filePath= req.file.path;
    const uploadImage = await cloudinary.uploader.upload(filePath, {
      folder: "blog_images",
    });

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Error");
      }
    });

    const query = `Insert into blogTable (blogTitle, Description,Content,AddImage) Values(:blogTitle,:Description, :Content, :AddImage) `;
    const AddImage= uploadImage.secure_url);



  } catch (err) {
    console.log(err);
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = createBlogs;
