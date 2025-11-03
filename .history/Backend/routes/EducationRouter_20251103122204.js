const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createEducation = require("../controller/EducationAndExperinceController/createEducation");

const educationRouter = express.Router();

blogRouter.post(
  "/createEducation",
  authMiddleware,
    createEducation
);

module.exports = educationRouter;
