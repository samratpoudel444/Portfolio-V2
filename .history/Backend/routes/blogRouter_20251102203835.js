const express = require("express");
const upload = require("../helper/multerHelper");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");

const blogRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs // Controller
);

module.exports = blogRouter;
