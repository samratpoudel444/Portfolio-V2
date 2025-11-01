const createBlogs= (req, res, next)=>
{
    try{

    }
    catch(err)
    {
        return next({code: err.code || 500,
      message: err.message || "Internal Server Error"})
    }
}