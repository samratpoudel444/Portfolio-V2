const sequelize = require("../../helper/sequelizeHelper");

const createEducation= async(req, res, next)=>
{
    try{
        const { EducationInstitute,EducationYear,EducationFaculty}= req.body;
        if(!EducationInstitute|| !EducationYear || !EducationFaculty)
        {
            return next({code:400, message:"Please Provide data for necessary field"});
        }
        
        const query=`Insert into "educationTable" ("EducationInstitute", "EducationYear", "EducationFaculty") Values (:EducationInstitute,:EducationYear, :EducationFaculty )`
    }
    catch(err)
    {
        return next({code:err.code ||500, message:err.message"Internal Server Error"});
    }
}