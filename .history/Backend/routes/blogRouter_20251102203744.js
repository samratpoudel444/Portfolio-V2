const express = require("express");
const upload = require("../helper/multerHelper");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");

const blogRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware, // JWT auth middleware
  upload.single("AddImage"), // Multer middleware for single file upload
  createBlogs // Controller
);

module.exports = blogRouter;
