const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const showAllExperince = require("../controller/ExperinceController/showAllExperince");
const deleteExperince = require("../controller/ExperinceController/deleteExperince");
const createSkills = require("../controller/skillsController/createSkills");
const upload = require("../helper/multerHelper");

const skillRouter = express.Router();

skillRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createSkills
);

skillRouter.get("/getSkills", authMiddleware, showAllExperince);
skillRouter.delete("/deleteExperince/:id", authMiddleware, deleteExperince);

module.exports = skillRouter;
