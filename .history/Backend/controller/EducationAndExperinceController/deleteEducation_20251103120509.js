import sequelize = require("../../helper/sequelizeHelper");

const deleteEducation=async(req, res, next)=>
{
    try{
        const {id}= req.params;
        const query= `select "EducationInstitute" from "educationTable" where id= :id`
        const deleteQuery= `Delete from "e`
        sequelize
    }
    catch(err)
    {
        
    }
}