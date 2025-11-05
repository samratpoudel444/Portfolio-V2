const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const createExperince = require("../controller/ExperinceController/createExperince");
const showAllExperince = require("../controller/ExperinceController/showAllExperince");
const deleteExperince = require("../controller/ExperinceController/deleteExperince");


const experinceRouter = express.Router();

experinceRouter.post("/createExperince", authMiddleware, createExperince);
experinceRouter.get("/getExperince", authMiddleware, showAllExperince);
experinceRouter.get("/getExperinceForClient", showAllExperince);
experinceRouter.delete("/deleteExperince/:id", authMiddleware, deleteExperince);


module.exports = experinceRouter;
