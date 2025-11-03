const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const deleteEducation = require("../controller/EducationAndExperinceController/deleteEducation");
const createExperince = require("../controller/ExperinceController/createExperince");
const showAllExperince = require("../controller/ExperinceController/showAllExperince");

createExperince


const experinceRouter = express.Router();

experinceRouter.post("/createExperince", authMiddleware, createExperince);
experinceRouter.get("/getExperince", authMiddleware, showAllExperince);
experinceRouter.delete("/deleteExperince/:id", authMiddleware, deleteEducation);

module.exports = experinceRouter;
