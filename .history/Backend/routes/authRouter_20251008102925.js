const express = require("express");
const { loginUsers } = require("../controller/authController/login");
auth
const authRouter = express.Router();

authRouter.post("/login", loginUsers);
authRouter.get("/hello", )
module.exports = authRouter;
