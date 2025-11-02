const multer= require("multer");
const {CloudinaryStorage}= require("multer-storage-cloudinary");
const { cloudinary } = require("./cloudinaryHelper");

const storage= new CloudinaryStorage({
    cloudinary:cl
})