const multer= require("multer");
const {CloudinaryStorage}= require("multer-storage-cloudinary");
const { cloudinary } = require("./cloudinaryHelper");
const { param } = require("../routes/authRouter");

const storage= new CloudinaryStorage({
    cloudinary:cloudinary,
    params
})