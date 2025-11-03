//  ProjectName:"",
//         ProjectImage:null,
//         ProjectLink:""

const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs = require("fs");
const sequelize = require("../../helper/sequelizeHelper");

const createBlogs = async (req, res, next) => {
  try {
    const { ProjectName, ProjectLink } = req.body;

    if (!ProjectName || !ProjectLink || !Content) {
      return next({ code: 400, message: "Please provide necessary data" });
    }

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
    const query = `Insert into "blogTables" ("blogTitle", "ProjectImage","Content") Values(:blogTitle,:ProjectLink, :AddImage) `;

    const insertBlog = await sequelize.query(query, {
      replacements: {
        ProjectName,
        ProjectLink,
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

module.exports = createBlogs;
