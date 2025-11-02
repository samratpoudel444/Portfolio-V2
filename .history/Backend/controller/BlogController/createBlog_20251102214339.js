const { cloudinary } = require("../../helper/cloudinaryHelper");
const fs= require('fs')


const createBlogs = async(req, res, next) => {
  try {
    const { BlogTitle, Description, Content } = req.body;
     console.log(cloudinary);
    if(!req.file)
    {
        return next({code:400, message:"Please provide the Image"})
    }

    const uploadImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "blog_images",
    });

    fs.unlink(req.file())
   

  } catch (err) {
    console.log(err)
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = createBlogs;
