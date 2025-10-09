const sequelize = require("../../helper/sequelizeHelper");

const getMyInfo= async(req, res, next)=>
{
    const query= 
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