const express= require("express");
const upload = require("../helper/multerHelper");
const createBlogs = require("../controller/BlogController/createBlog");

const blogRouter= express.Router();



blogRouter.route("/createBlog").post(upload.single("image", createBlogs));

module.exports= blogRouter;