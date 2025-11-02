const multer= require("multer");
const {CloudinaryStorage}= require("multer-storage-cloudinary");
const { cloudinary } = require("./cloudinaryHelper");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 800, crop: "limit" }],
  },
});

const upload = multer({ storage });
module.exports = upload;