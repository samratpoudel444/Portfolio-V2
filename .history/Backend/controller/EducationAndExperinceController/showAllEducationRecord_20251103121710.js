const sequelize = require("../../helper/sequelizeHelper");

const showAllEducation= async(req, res, next)=>
{
    try{
       const query = `select "EducationInstitute","EducationYear","EducationFaculty" from "educationTable"`;
       const data= await sequelize.query(query, {
        
       })
    }
    catch(err)
    {

    }
}