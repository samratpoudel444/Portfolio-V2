const cloudinary= require('cloudinary').v2;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });


console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_CLOUD_API_KEY);
console.log(process.env.CLOUDINARY_CLOUD_API_SECRET);
cloudinary.config({
  cloud_name: dsknvp6t6,
  api_key: 373665318297444,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});


module.exports= {cloudinary};