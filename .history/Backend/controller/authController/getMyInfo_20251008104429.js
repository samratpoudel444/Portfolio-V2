const sequelize = require("../../helper/sequelizeHelper");

const getMyInfo= async(req, res, next)=>
{
    const query = `SELECT firstName,lastName,email,DOB FROM "Users" WHERE email=:email`;
    try{
        const email= req.user.Email;
        const data= await sequelize.query(query,{
            raw:true,
            replacements:{email}
        })
        console.log(data);
    }
    catch(err)
    {

    }
}

export default get