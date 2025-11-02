const express= require("express");
const upload = require("../helper/multerHelper");
const blogRouter= express.Router();



blogRouter.route("/createBlog").post(upload);

module.exports= blogRouter;