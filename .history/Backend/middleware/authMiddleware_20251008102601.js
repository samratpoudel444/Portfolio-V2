const authMiddleware= (req, res, next)=>
{
    try{
        const data= req.headers?.authorization;
        if(!data)
        {
            return next({code:401, message:"Token not Found"})
        }
        consr token= data.split(" ")[1];
    }
    catch(err)
    {

    }
}