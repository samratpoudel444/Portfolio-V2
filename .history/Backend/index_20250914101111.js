const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const app= express();
const PORT= process.env.PORT; 

app.use(express.json());

app.use(errorHandler)

app.listen(PORT, ()=>
{
    console.log()
})