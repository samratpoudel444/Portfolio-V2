const express = require("express");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");
up

const blogRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs
);

module.exports = blogRouter;
