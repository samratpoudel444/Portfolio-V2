const logout= (req, res,next)=>
{
    try{
        res.clearCookie("accessToken")
    }
    catch(err)
    {
        console.log(err)
        return next({})
    }
}