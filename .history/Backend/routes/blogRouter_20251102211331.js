const express = require("express");
up
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");

const blogRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs
);

module.exports = blogRouter;
