const express= require("express");
const upload = require("../helper/multerHelper");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");

const blogRouter= express.Router();

blogRouter
  .route("/createBlog")
  .post(authMiddleware,upload.single("AddImage", createBlogs));

module.exports= blogRouter;

