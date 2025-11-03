
const sequelize = require("../../helper/sequelizeHelper");
const createExperince= async(req, res, next)=>
{
    try{
        const{ CompanyName,WorkedYear,Position}= req.body;
        if(!CompanyName | !WorkedYear || !Position)
        {
            return next({code:400, message:"Please provide necesary information"});
        }
         const query = `Insert into "experinceable" ("CompanyName", "WorkedYear", "Position") Values (:CompanyName,:WorkedYear, :Position )`;
         const insertEducationInfo = await sequelize.query(query, {
           raw: true,
           replacements: {
             CompanyName,
             WorkedYear,
             Position,
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

module.exports= createExperince;