const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");



const showAllExperince = require("../controller/ExperinceController/showAllExperince");
const deleteExperince = require("../controller/ExperinceController/deleteExperince");
const createSkills = require("../controller/skillsController/createSkills");
const upload = require("../helper/multerHelper");

const projectRouter = express.Router();

projectRouter.post(
  "/createProject",
  authMiddleware,
  upload.single("AddImage"),
  createSkills
);

projectRouter.get("/getProjects", authMiddleware, showAllExperince);
projectRouter.delete("/deleteProject/:id", authMiddleware, deleteExperince);

module.exports = skillRouter;
