const express= require("express");
const blogRouter= express.Router();

blogRouter.route("/createBlog").post();

module.exports= blogRouter;