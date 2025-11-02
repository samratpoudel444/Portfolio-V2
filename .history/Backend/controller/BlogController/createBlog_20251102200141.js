const createBlogs= (req, res, next)=>
{
    try{
        const {}
    }
    catch(err)
    {
        return next({code: err.code || 500,
      message: err.message || "Internal Server Error"})
    }
}

module.exports = createBlogs;
