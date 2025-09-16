const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRouter");
const { errorHandler } = require("./middleware/errorMiddleware");


const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://myproductionfrontend.com",
];

// CORS options
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

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1", authRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
