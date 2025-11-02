const cloudinary= require('cloudinary').v2;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });


console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log()\console.log()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:  process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret:  process.env.CLOUDINARY_CLOUD_API_SECRET,
});


module.exports= {cloudinary};