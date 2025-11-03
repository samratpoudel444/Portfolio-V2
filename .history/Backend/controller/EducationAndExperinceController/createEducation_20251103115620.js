const createEducation= async(req, res, next)=>
{
    try{
        const { EducationInstitute,EducationYear,EducationFaculty}= req.body;
        if(!EducationInstitute|| !EducationYear || !EducationFaculty)
        {
            return next({code:400, message:"Please Provide data for necessary field"});
        }

    }
    catch(err)
    {
        return next({code:err.cde500})
    }
}