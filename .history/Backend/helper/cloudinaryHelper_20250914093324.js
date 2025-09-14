const cloudinary= require('cloudinary').v2;
const dotenv= require('dotenv');
dotenv.config({ path: "../.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: "597594377487994",
  api_secret: "5IkIXn4-DCNA-f8z6iac8Qa7byY",
});

= dsknvp6t6
CLOUDINARY_CLOUD_API_KEY= 597594377487994
CLOUDINARY_CLOUD_API_SECRET= 5IkIXn4-DCNA-f8z6iac8Qa7byY


console.log(cloudinary)