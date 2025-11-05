const logout= (req, res,next)=>
{
    try{
        res.clearCookie("accessToken",{

        }).status(200).json({message:"Logged "})
    }
    catch(err)
    {
        console.log(err)
        return next({})
    }
}