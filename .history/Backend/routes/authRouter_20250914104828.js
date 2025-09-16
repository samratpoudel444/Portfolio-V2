import { loginUsers } from "../controller/authController/login.js";
const express =require('express');

const authRouter= express.Router();

authRouter.route("/login").post(loginUsers);

export default authRouter;