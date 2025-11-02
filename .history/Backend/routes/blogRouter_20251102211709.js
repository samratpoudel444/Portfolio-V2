const express = require("express");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");
upl

const blogRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs
);

module.exports = blogRouter;
