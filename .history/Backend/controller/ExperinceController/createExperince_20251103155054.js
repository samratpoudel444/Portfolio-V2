const createExperince= async(req, res, next)=>
{
    try{
        const{ CompanyName,WorkedYear,Position}= req.body;
        if(!CompanyName | !WorkedYear || !Position)
        {
            return next({code:400, message:"Please provide necesary information"});
        }
         const query = `Insert into "educationTable" ("EducationInstitute", "EducationYear", "EducationFaculty") Values (:EducationInstitute,:EducationYear, :EducationFaculty )`;
         const insertEducationInfo = await sequelize.query(query, {
           raw: true,
           replacements: {
             EducationInstitute,
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
    return next({
                      code: 400,
                      message: "Please provide necesary information",
                    });
    }
}