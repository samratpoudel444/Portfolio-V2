const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const upload = require("../helper/multerHelper");
const UpdateCv = require("../controller/CVController/UpdateCV");


const skillRouter = express.Router();

skillRouter.put(
  "/updateCV",
  authMiddleware,
  upload.single("CVPDF"),
  createSkills
);

skillRouter.get("/getSkills", authMiddleware, showAllSkills);
skillRouter.delete("/deleteSkill/:id", authMiddleware, deleteSkills);

module.exports = skillRouter;
