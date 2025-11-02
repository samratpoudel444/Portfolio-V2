const { cloudinary_js_config } = require("../../helper/cloudinaryHelper");

cloudinary_js_config
const createBlogs = (req, res, next) => {
  try {
    const { BlogTitle, Description, Content } = req.body;
    console.log(req.file);
  } catch (err) {
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = createBlogs;
