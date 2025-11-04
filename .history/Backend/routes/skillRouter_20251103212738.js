const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");


const showAllExperince = require("../controller/ExperinceController/showAllExperince");
const deleteExperince = require("../controller/ExperinceController/deleteExperince");
const createSkills = require("../controller/skillsController/createSkills");
const upload = require("../helper/multerHelper");
const showAllSkills = require("../controller/skillsController/showAllSkills");

const skillRouter = express.Router();

skillRouter.post(
  "/createSkill",
  authMiddleware,
  upload.single("skillImage"),
  createSkills
);


skillRouter.get("/getSkills", authMiddleware, showAllSkills);
skillRouter.delete("/deleteExperince/:id", authMiddleware, deleteExperince);

module.exports = skillRouter;
