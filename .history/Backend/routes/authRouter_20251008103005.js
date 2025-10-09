const express = require("express");
const { loginUsers } = require("../controller/authController/login");
const {  authMiddleware } = require("../middleware/authMiddleware");

const authRouter = express.Router();

authRouter.post("/login", loginUsers);
authRouter.get("/hello", authMiddleware);

module.exports = authRouter;
