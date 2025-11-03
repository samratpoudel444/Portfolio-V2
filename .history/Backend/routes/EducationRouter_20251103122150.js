const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const educationRouter = express.Router();

blogRouter.post(
  "/createEducation",
  authMiddleware,
 
);

module.exports = educationRouter;
