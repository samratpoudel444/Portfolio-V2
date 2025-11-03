const sequelize = require("../../helper/sequelizeHelper");

const deleteEducation=async(req, res, next)=>
{
    try{
        const {id}= req.params;
        const query= `select "EducationInstitute" from "educationTable" where id= :id`

        const checkIfDataExist= await sequelize(query, {
            raw:true,
            replacements:{id}
        }) 

        if(!checkIfDataExist || checkIfDataExist.length == 0)

        const deleteQuery= `Delete from "eeducationTable" where id= :id`
        
    }
    catch(err)
    {
        
    }
}