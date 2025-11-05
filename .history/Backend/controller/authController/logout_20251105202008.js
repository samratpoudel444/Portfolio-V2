const logout= (req, res,next)=>
{
    try{
        res.clearCookie("accessToke")
    }
    catch(err)
    {
        console.log(err)
        return next({})
    }
}