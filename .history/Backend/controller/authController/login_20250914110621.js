const bcrypt = require("bcrypt");
const sequelize = require("../../helper/sequelizeHelper");
const jwt= require('jsonwebtoken');
const dotenv= require("dotenv");
dotenv.config({path: '../../.env'})


const loginUsers = async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password)
  {
     return next ({code:400, message: "Please Provide the required credintials"});
  }

  try {
    const query = `SELECT email, password FROM "Users" WHERE email = :email`;
    const [results] = await sequelize.query(query, {
      replacements: { email },
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(results);

    if (!results) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, results.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken= jwt.sign({email: results.email}, process.env.,{expiresIn})


    res.json({ message: "Login successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginUsers };
