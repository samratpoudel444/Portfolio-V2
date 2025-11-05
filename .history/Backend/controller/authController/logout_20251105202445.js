
const dotenv = require("dotenv");
dotenv.config();

const logout= (req, res,next)=>
{
    try{
        res
          .clearCookie("accessToken", {
            httpOnly: true,
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

module.exports= logout