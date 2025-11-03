const errorHandler= async(err, req, res, next)=>
{
      if (err.code === "LIMIT_UNEXPECTED_FILE") {
        statusCode = 400;
        message = "Too many files uploaded or field name mismatch";
      }

      if (err.code === "LIMIT_FILE_SIZE") {
        statusCode = 400;
        message = "File too large";
      }

      
    return res.status(err.code|| 500).json({message:err.message || "Internal Server Error"});
}

module.exports= {errorHandler};