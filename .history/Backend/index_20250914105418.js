const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRouter");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1", authRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
