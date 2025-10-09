const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader) {
      return next({ code: 401, message: "Token not Found" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.decode(token, process.env.JWT_PRIVATE_KEY); // decode is synchronous

    if (!decoded) {
      return next({ code: 401, message: "Token Expired or not Found" });
    }

    // Make sure req.user exists
    req.user = req.user || {};
    req.user.Email = decoded.email;

    next();
  } catch (err) {
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server error",
    });
  }
};

module.exports = { authMiddleware };
