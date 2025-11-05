const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const createSkills = require("../controller/skillsController/createSkills");
const upload = require("../helper/multerHelper");
const showAllSkills = require("../controller/skillsController/showAllSkills");
const deleteSkills = require("../controller/skillsController/deleteSkills");

const skillRouter = express.Router();

skillRouter.post(
  "/createSkill",
  authMiddleware,
  upload.single("skillImage"),
  createSkills
);


skillRouter.get("/getSkills", authMiddleware, showAllSkills);
skillRouter.get("/getSkillsForClient", authMiddleware, showAllSkills);
skillRouter.delete("/deleteSkill/:id", authMiddleware, deleteSkills);

module.exports = skillRouter;
