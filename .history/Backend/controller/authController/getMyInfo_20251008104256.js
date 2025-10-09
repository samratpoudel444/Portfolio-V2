const sequelize = require("../../helper/sequelizeHelper");

const getMyInfo= async(req, res, next)=>
{
    const query = `SELECT firstName, lastName, email,DOB     `;
    try{
        const email= req.user.Email;
        const data= await sequelize.query(query,{
            raw:true,
            replacements:{}
        })
    }
    catch(err)
    {

    }
}