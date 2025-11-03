const sequelize = require("../../helper/sequelizeHelper");

const deleteEducation=async(req, res, next)=>
{
    try{
        const id= req.params.id;
        console.log(id);
        if(!id)
        {
            return next({code:400, message:"Please provide the necessary Id"});
        }
        const query = `SELECT "EducationInstitute" FROM "educationTables" WHERE id = :id`;


        const checkIfDataExist= await sequelize.query(query, {
            raw:true,
            replacements:{id: parseInt(id, 10)}
        }) 

        console.log(checkIfDataExist.length)

        if(!checkIfDataExist || checkIfDataExist.length === 0)
        {
              return next({
                code: 404,
                message: "Education data Not found",
              });
        }

        const deleteQuery= `Delete from "educationTables" where id= :id`

        const [_,deletedData]= await sequelize.query(deleteQuery, {
            raw:true,
            replacements:{id:parseInt(id, 10)}
        })



        if(!deletedData.length)
        {

            return next({
                code:400,
                message:"Failed to delete the record"
            })
        }
        
        return res.status(200).json({message:"Record Deleted Sucessfully"});
    }
    catch(err)
    {
        console.log(err)
         return next({
           code: err.code || 500,
           message: err.message || "Internal Server Error",
         });   
    }
}

module.exports= deleteEducation;

//localhost:3000/api/v1/deleteEducation/1