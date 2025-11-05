const express = require("express");
const upload = require("../helper/multerHelper");
const createBlogs = require("../controller/BlogController/createBlog");
const { authMiddleware } = require("../middleware/authMiddleware");
const deleteBlog = require("../controller/BlogController/deleteBlogs");
const showBlogByID = require("../controller/BlogController/showSingleBlog");
const showAllBlogs = require("../controller/BlogController/showAllBlogs");
const showSpeficicBlogs = require("../controller/BlogController/specificBlogs");


const blogRouter = express.Router();

blogRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs 
);

blogRouter.delete(
  "/deleteBlog/:id",
  authMiddleware,
  deleteBlog
);

blogRouter.get("/getBlogsById/:id", authMiddleware, showBlogByID);


blogRouter.get("/getAllBlogs", authMiddleware, showAllBlogs);
blogRouter.get("/getAllBlogs", authMiddleware, showAllBlogs);

blogRouter.get("/getAllBlogsForClient", showAllBlogs);



module.exports = blogRouter;
