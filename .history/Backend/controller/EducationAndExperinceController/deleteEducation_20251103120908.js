const sequelize = require("../../helper/sequelizeHelper");

const deleteEducation=async(req, res, next)=>
{
    try{
        const {id}= req.params;

        if(!id)
        {
            return next({code:400, message:"Please provide the necessary Id"});
        }
        const query= `select "EducationInstitute" from "educationTable" where id= :id`

        const checkIfDataExist= await sequelize(query, {
            raw:true,
            replacements:{id}
        }) 

        if(!checkIfDataExist || checkIfDataExist.length === 0)
        {
              return next({
                code: 404,
                message: "Please provide the necessary Id",
              });
        }

        const deleteQuery= `Delete from "eeducationTable" where id= :id`
        
    }
    catch(err)
    {
        
    }
}