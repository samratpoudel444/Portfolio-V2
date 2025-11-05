
const dotenv = require("dotenv");
dotenv.config();

const logout= (req, res,next)=>
{
    try{
        res
          .clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV,
          })
          .status(200)
          .json({ message: "Logged Out Successfull" });
    }
    catch(err)
    {
        console.log(err)
        return next({
            code:err.code || 500,
            message:err.message || "Internal Server Error"
        })
    }
}