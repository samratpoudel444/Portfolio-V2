const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
createSki
const showAllExperince = require("../controller/ExperinceController/showAllExperince");
const deleteExperince = require("../controller/ExperinceController/deleteExperince");

const skillRouter = express.Router();

skillRouter.post(
  "/createBlog",
  authMiddleware,
  upload.single("AddImage"),
  createBlogs
);


skillRouter.get("/getSkills", authMiddleware, showAllExperince);
skillRouter.delete("/deleteExperince/:id", authMiddleware, deleteExperince);

module.exports = skillRouter;
