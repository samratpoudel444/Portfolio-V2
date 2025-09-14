const cloudinary= require('cloudinary').v2;
const dotenv= require('dotenv');


cloudinary.config({
  cloud_name: "dsknvp6t6",
  api_key: "597594377487994",
  api_secret: "5IkIXn4-DCNA-f8z6iac8Qa7byY",
});



console.log(cloudinary)