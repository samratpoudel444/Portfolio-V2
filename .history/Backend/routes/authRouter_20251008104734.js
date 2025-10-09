const express = require("express");
const { loginUsers } = require("../controller/authController/login");
const { authMiddleware } = require("../middleware/authMiddleware");
const { default: getMyInfo } = require("../controller/authController/getMyInfo");



const authRouter = express.Router();

authRouter.post("/login", loginUsers);
authRouter.get("/getMyInfo", authMiddleware, getMyInfo);

module.exports = authRouter;
