const express= require("express");
const upload = require("../helper/multerHelper");
const blogRouter= express.Router();
upload


blogRouter.route("/createBlog").post();

module.exports= blogRouter;