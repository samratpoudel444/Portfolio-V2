const express = require("express");
const { loginUsers } = require("../controller/authController/login");
const { default: authMiddleware } = require("../middleware/authMiddleware");
getM


const authRouter = express.Router();

authRouter.post("/login", loginUsers);
authRouter.get("/getMyInfo", authMiddleware);

module.exports = authRouter;
