const logout= (req, res,next)=>
{
    try{
        res.clearCookie
    }
    catch(err)
    {
        console.log(err)
        return next({})
    }
}