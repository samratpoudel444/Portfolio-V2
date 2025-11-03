const sequelize = require("../../helper/sequelizeHelper");

const deleteEducation=async(req, res, next)=>
{
    try{
        const {id}= req.params;
        const query= `select "EducationInstitute" from "educationTable" where id= :id`

        const checkIfDataExist= await 

        const deleteQuery= `Delete from "eeducationTable" where id= :id`
        
    }
    catch(err)
    {
        
    }
}