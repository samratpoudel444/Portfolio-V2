const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const showAllEducation = require("../controller/EducationAndExperinceController/showAllEducationRecord");
const deleteEducation = require("../controller/EducationAndExperinceController/deleteEducation");
const createExperince = require("../controller/ExperinceController/createExperince");
showA
createExperince


const experinceRouter = express.Router();

experinceRouter.post("/createExperince", authMiddleware, createExperince);
experinceRouter.get("/getExperince", authMiddleware, showAllEducation);
experinceRouter.delete("/deleteExperince/:id", authMiddleware, deleteEducation);

module.exports = experinceRouter;
