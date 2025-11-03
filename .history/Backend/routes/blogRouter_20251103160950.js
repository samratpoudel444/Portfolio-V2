const express = require("express");
const upload = require("../helper/multerHelper");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");
const deleteBlog = require("../controller/BlogController/deleteBlogs");


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
  upload.single("AddImage"),
  deleteBlog
);

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs
);

module.exports = blogRouter;
