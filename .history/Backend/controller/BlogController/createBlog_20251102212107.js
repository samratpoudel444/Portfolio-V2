const { cloudinary } = require("../../helper/cloudinaryHelper");



const createBlogs = async(req, res, next) => {
  try {
    const { BlogTitle, Description, Content } = req.body;
    if(!req.file)
    {
        return next({code:400, message:"Please provide the Image"})
    }

    const uploadImage= await cloudinary.
  } catch (err) {
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = createBlogs;
