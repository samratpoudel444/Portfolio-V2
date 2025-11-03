const createExperince= async(req, res, next)=>
{
    try{
        const{ CompanyName,WorkedYear,Position}= req.body;
        if(!CompanyName | !WorkedYear || !Position)
        {
            return next({code:400, message:"Please provide necesary information"})
        }
    }
    catch(err)
    {

    }
}