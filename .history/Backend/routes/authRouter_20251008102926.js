const express = require("express");
const { loginUsers } = require("../controller/authController/login");
const { default: authMiddleware } = require("../middleware/authMiddleware");
authMiddleware
const authRouter = express.Router();

authRouter.post("/login", loginUsers);
authRouter.get("/hello", )
module.exports = authRouter;
