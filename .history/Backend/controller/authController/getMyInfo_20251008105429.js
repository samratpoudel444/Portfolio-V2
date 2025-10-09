seq

const getMyInfo = async (req, res, next) => {
  const query = `SELECT firstName,lastName,email,DOB FROM "Users" WHERE email=:email`;
  try {
    const email = req.user.Email;
    const [data] = await sequelize.query(query, {
      raw: true,
      replacements: { email },
    });
    console.log(data);
    res.json(data); // send response
  } catch (err) {
    next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports= {getMyInfo}