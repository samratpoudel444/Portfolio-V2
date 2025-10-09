const sequelize = require("../../helper/sequelizeHelper");


const getMyInfo = async (req, res, next) => {
  const query = `SELECT "firstName","lastName","email","DOB" FROM "Users" WHERE email=:email`;
  try {
    const email = req.user.Email;
    const [data] = await sequelize.query(query, {
      raw: true,
      replacements: { email },
    });
    if(!data)
    {
        return next({code:404, message:"data not found"})
    }
    res.json(data); 
  } catch (err) {
    next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports= {getMyInfo}