const authMiddleware= (req, res, next)=>
{
    try{
        const data= req.headers?.authorization;
        if(!data)
        {
            return next({code:401, })
        }

    }
    catch(err)
    {

    }
}