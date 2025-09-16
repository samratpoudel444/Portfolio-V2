const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const { authRouter } = require("./routes/authRouter");

const app= express();
const dotenv= require('dotenv');

dotenv.config();
const PORT= process.env.PORT|| 5000; 


app.use(express.json());

app.use(authRouter);
app.use(errorHandler);

app.listen(PORT, ()=>
{
    console.log(`Server started on localhost:${PORT}`)
})