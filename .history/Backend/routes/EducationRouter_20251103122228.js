const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createEducation = require("../controller/EducationAndExperinceController/createEducation");
g
const educationRouter = express.Router();

educationRouter.post("/createEducation", authMiddleware, createEducation);
educationRouter.get("/getEducation", authMiddleware, createEducation);
educationRouter.post("/createEducation", authMiddleware, createEducation);

module.exports = educationRouter;
