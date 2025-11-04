const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const upload = require("../helper/multerHelper");


const skillRouter = express.Router();

skillRouter.put(
  "/createSkill",
  authMiddleware,
  upload.single("skillImage"),
  createSkills
);

skillRouter.get("/getSkills", authMiddleware, showAllSkills);
skillRouter.delete("/deleteSkill/:id", authMiddleware, deleteSkills);

module.exports = skillRouter;
