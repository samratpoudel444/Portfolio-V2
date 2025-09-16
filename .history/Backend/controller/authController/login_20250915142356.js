const bcrypt = require("bcrypt");
const sequelize = require("../../helper/sequelizeHelper");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });

const loginUsers = async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return next({
      code: 400,
      message: "Please provide the required credentials",
    });
  }

  try {
    const query = `SELECT "firstName", "lastName", "email", "password" FROM "Users" WHERE "email" = :email`;
    const [results] = await sequelize.query(query, {
      replacements: { email },
      type: sequelize.QueryTypes.SELECT,
    });


    if (!results) {
      return next({
        code: 404,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, results.password);
    if (!isMatch) {
      return next({
        code: 401,
        message: "Invalid credentials",
      });
    }

    const accessToken = jwt.sign(
      { email: results.email },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: "7d" }
    );


    res.cookie("accessToken", accessToken, { httpOnly: true }).json({
      message: "User logged in successfully",
      token: accessToken,
      data: {
        firstName: results.firstName, 
        lastName: results.lastName,
        email: results.email
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { loginUsers };
