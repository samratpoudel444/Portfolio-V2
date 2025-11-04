const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const upload = require("../helper/multerHelper");
const UpdateCv = require("../controller/CVController/UpdateCV");


const CVRouter = express.Router();

CVRouter.put("/updateCV", authMiddleware, upload.single("CVPDF"), UpdateCv);



module.exports = skillRouter;
