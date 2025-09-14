const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const app= express();
const dotenv= req
const PORT= process.env.PORT|| 5000; 

app.use(express.json());

app.use(errorHandler)

app.listen(PORT, ()=>
{
    console.log(`Server started on localhost:${PORT}`)
})