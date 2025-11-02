const createBlogs= (req, res, next)=>
{
    try{
        const { BlogTitle,Description,Content,
    AddImage:null}= req.body;

    }
    catch(err)
    {
        return next({code: err.code || 500,
      message: err.message || "Internal Server Error"})
    }
}

module.exports = createBlogs;
