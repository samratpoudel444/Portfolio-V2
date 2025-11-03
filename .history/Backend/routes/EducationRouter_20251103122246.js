const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createEducation = require("../controller/EducationAndExperinceController/createEducation");
const showAllEducation = require("../controller/EducationAndExperinceController/showAllEducationRecord");
const deleteEducation = require("../controller/EducationAndExperinceController/deleteEducation");
deleteEducation
const educationRouter = express.Router();

educationRouter.post("/createEducation", authMiddleware, createEducation);
educationRouter.get("/getEducation", authMiddleware, showAllEducation);
educationRouter.post("/createEducation", authMiddleware, createEducation);

module.exports = educationRouter;
