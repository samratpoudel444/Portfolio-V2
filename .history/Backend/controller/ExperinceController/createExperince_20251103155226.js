const createExperince= async(req, res, next)=>
{
    try{
        const{ CompanyName,WorkedYear,Position}= req.body;
        if(!CompanyName | !WorkedYear || !Position)
        {
            return next({code:400, message:"Please provide necesary information"});
        }
         const query = `Insert into "experincetable" ("CompanyName", "WorkedYear", "EducationFaculty") Values (:EducationInstitute,:EducationYear, :EducationFaculty )`;
         const insertEducationInfo = await sequelize.query(query, {
           raw: true,
           replacements: {
             CompanyName,
             EducationYear,
             EducationFaculty,
           },
         });
         return res
           .status(201)
           .json({ message: "Education Info Inserted Sucessfully" });
    }
    catch(err)
    {
    return next({code:err.code||500, message:err.message || "Internal Server Error"});
    }
}