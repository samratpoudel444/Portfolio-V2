const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs = require("fs");
const sequelize = require("../../helper/sequelizeHelper");

const UpdateCv = async (req, res, next) => {
  try {
    if (!req.file) {
      return next({ code: 400, message: "Please provide the Image" });
    }

    const id= 1;

    const querys = `select "CVLInk" from CVTable where id=:id`;
    


    const [data]= await sequelize.query({})

    const filePath = req.file.path;
    const uploadImage = await cloudinary.uploader.upload(filePath, {
      folder: "CV_images",
    });

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Error");
      }
    });
    const AddImage = uploadImage.secure_url;
    const query = `Update "CVLInk" set "CVLink": AddImage where id:id `;

    const insertBlog = await sequelize.query(query, {
      replacements: {
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
