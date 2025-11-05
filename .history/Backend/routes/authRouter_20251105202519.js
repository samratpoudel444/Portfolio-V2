const express = require("express");
const { loginUsers } = require("../controller/authController/login");
const {authMiddleware } = require("../middleware/authMiddleware");
const { getMyInfo } = require("../controller/authController/getMyInfo");
const { logout } = require("../controller/authController/logout");



const authRouter = express.Router();

authRouter.post("/login", loginUsers);
authRouter.post("/login", authMiddleware, logout);
authRouter.get("/getMyInfo", authMiddleware, getMyInfo);

module.exports = authRouter;
