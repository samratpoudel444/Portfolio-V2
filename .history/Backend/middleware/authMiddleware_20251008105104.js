import jwt from "jsonwebtoken"
// const dotenv = require("dotenv");
// dotenv.config({ path: "../.env" });

const authMiddleware= async(req, res, next)=>
{
    try{
        const data= req.headers?.authorization;
        if(!data)
        {
            return next({code:401, message:"Token not Found"})
        }
        const token= data.split(" ")[1];
        const decoded = jwt.decode(token, process.env.JWT_PRIVATE_KEY);
        if(!decoded)
        {
            return next({ code: 401, message: "Token Expired or not Found" });
        }
        req.user.Email= decoded.email;
        next();

    }
    catch(err)
    {
        return next({
          code: err.code || 500,
          message: err.message || "Internal Server error",
        });
    }
}


module.exports = { authMiddleware };