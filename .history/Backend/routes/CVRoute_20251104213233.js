const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const upload = require("../helper/multerHelper");
const UpdateCv = require("../controller/CVController/UpdateCV");


const skillRouter = express.Router();

skillRouter.put("/updateCV", authMiddleware, upload.single("CVPDF"), UpdateCv);



module.exports = skillRouter;
