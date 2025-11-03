const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createEducation = require("../controller/EducationAndExperinceController/createEducation");
const showAllEducation = require("../controller/EducationAndExperinceController/showAllEducationRecord");
const deleteEducation = require("../controller/EducationAndExperinceController/deleteEducation");



const const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createEducation = require("../controller/EducationAndExperinceController/createEducation");
const showAllEducation = require("../controller/EducationAndExperinceController/showAllEducationRecord");
const deleteEducation = require("../controller/EducationAndExperinceController/deleteEducation");

const educationRouter = express.Router();

educationRouter.post("/createEducation", authMiddleware, createEducation);
educationRouter.get("/getEducation", authMiddleware, showAllEducation);
educationRouter.delete("/deleteEducation/:id", authMiddleware, deleteEducation);

module.exports = educationRouter;
Router = express.Router();

educationRouter.post("/createEducation", authMiddleware, createEducation);
educationRouter.get("/getEducation", authMiddleware, showAllEducation);
educationRouter.delete("/deleteEducation/:id", authMiddleware, deleteEducation);

module.exports = educationRouter;
