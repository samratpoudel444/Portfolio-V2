const { cloudinary } = require("../../helper/cloudinaryHelper");



const createBlogs = (req, res, next) => {
  try {
    const { BlogTitle, Description, Content } = req.body;
    if(!req)
  } catch (err) {
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = createBlogs;
