const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createEducation = require("../controller/EducationAndExperinceController/createEducation");
const showAllEducation = require("../controller/EducationAndExperinceController/showAllEducationRecord");
const deleteEducation = require("../controller/EducationAndExperinceController/deleteEducation");



const experinceRouter = express.Router();

experinceRouter.post("/createEducation", authMiddleware, createEducation);
experinceRouter.get("/getEducation", authMiddleware, showAllEducation);
educationRouter.delete("/deleteEducation/:id", authMiddleware, deleteEducation);

module.exports = educationRouter;
