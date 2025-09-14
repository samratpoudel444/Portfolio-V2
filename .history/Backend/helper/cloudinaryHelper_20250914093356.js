const cloudinary= require('cloudinary').v2;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:  process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret:  process.env.CLOUDINARY_CLOUD_API_SECRET,
});

= dsknvp6t6
= 597594377487994
= 5IkIXn4-DCNA-f8z6iac8Qa7byY


console.log(cloudinary)