const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createExperince = require("../controller/ExperinceController/createExperince");
const showAllExperince = require("../controller/ExperinceController/showAllExperince");
const deleteExperince = require("../controller/ExperinceController/deleteExperince");

const skillRouter = express.Router();

skillRouter.post("/createExperince", authMiddleware, createExperince);
skillRouter.get("/getExperince", authMiddleware, showAllExperince);
skillRouter.delete("/deleteExperince/:id", authMiddleware, deleteExperince);

module.exports = skillRouter;
