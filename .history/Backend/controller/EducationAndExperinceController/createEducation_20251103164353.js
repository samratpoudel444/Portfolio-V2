const sequelize = require("../../helper/sequelizeHelper");

const createEducation= async(req, res, next)=>
{
    try{
        const { EducationInstitute,EducationYear,EducationFaculty}= req.body;
        if(!EducationInstitute|| !EducationYear || !EducationFaculty)
        {
            return next({code:400, message:"Please Provide data for necessary field"});
        }
        
        const query=`Insert into "educationTables" ("EducationInstitute", "EducationYear", "EducationFaculty") Values (:EducationInstitute,:EducationYear, :EducationFaculty )`
        const insertEducationInfo = await sequelize.query(query, {
          raw: true,
          replacements: { EducationInstitute, EducationYear, EducationFaculty },
        });
        return res.status(201).json({message:"Education Info Inserted Sucessfully"})

    }
    catch(err)
    {
        return next({code:err.code ||500, message:err.message||"Internal Server Error"});
    }
}

module.exports= createEducation;