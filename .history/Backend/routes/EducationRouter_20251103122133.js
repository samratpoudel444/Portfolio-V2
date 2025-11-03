const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const educationRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs
);

module.exports = blogRouter;
