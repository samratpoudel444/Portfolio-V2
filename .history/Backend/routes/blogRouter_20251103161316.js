const express = require("express");
const upload = require("../helper/multerHelper");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");
const deleteBlog = require("../controller/BlogController/deleteBlogs");
const showBlogByID = require("../controller/BlogController/showSingleBlog");


const blogRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs 
);

blogRouter.delete(
  "/deleteBlog",
  authMiddleware,
  deleteBlog
);

blogRouter.get(
  "/getBlogsById",
  authMiddleware,
  createBlogs
);



module.exports = blogRouter;
