const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const app= express();
PORT= 

app.use(express.json());

app.use(errorHandler)

app