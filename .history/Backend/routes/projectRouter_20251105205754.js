const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const upload = require("../helper/multerHelper");
const createProject = require("../controller/projectController/createProject");
const showAllProjects = require("../controller/projectController/showAllProjects");
const deleteProject = require("../controller/projectController/deleteProject");

const projectRouter = express.Router();

projectRouter.post(
  "/createProject",
  authMiddleware,
  upload.single("ProjectImage"),
  createProject
);

projectRouter.get("/getProjects", authMiddleware, showAllProjects);
projectRouter.get("/getProjectForClien", authMiddleware, showAllProjects);
projectRouter.delete("/deleteProject/:id", authMiddleware, deleteProject);

module.exports = projectRouter;
