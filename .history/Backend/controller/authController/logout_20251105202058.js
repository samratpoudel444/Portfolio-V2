const logout= (req, res,next)=>
{
    try{
        res.clearCookie("accessToken",{

        }).status(200).json({message:""})
    }
    catch(err)
    {
        console.log(err)
        return next({})
    }
}