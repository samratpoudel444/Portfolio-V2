const bcrypt= require('bcrypt');
const sequelize = require('../../helper/sequelizeHelper');


const loginUsers= async(req, res, next)=>
{
    const {email, password}= req.body;
    const query1= `sele` 
    try {
        const data= await sequelize.query(query,{
            raw: true,
            replacements:{

            }
        })
    } catch (error) {
        
    }

    
}