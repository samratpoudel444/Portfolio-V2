const sequelize = require("../../helper/sequelizeHelper");

const showAllEducation= async(req, res, next)=>
{
    try{
       const query = `select "EducationInstitute","EducationYear","EducationFaculty" from "educationTable"`;
       const data= await sequelize.query(query, {
        raw:true,
       })

       if(!data)
       {
        return next({
            code:404,
            message:"No Data Found"
        })
       }

       return res.status(200).json({data:data})
    }
    catch(err)
    {
       return next({
         code: err.code|| "Internal Server Error",
         message: "No Data Found",
       });   
    }
}