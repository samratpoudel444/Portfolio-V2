const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRouter");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const blogRouter = require("./routes/blogRouter");
const educationRouter = require("./routes/EducationRouter");
const experinceRouter = require("./routes/ExperinceRouter");
const skillRouter = require("./routes/skillRouter");


const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://myproductionfrontend.com",
];

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v1", authRouter);
app.use("/api/v1", blogRouter);
app.use("/api/v1", educationRouter);
app.use("/api/v1", educationRouter);
app.use("/api/v1", educationRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
