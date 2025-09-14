const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const app= express();
coPORT= 

app.use(express.json());

app.use(errorHandler)

app