import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
// import houseRoute from "./routes/house.js";
// import rentRoute from "./routes/rent.js";

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(express.json());

// Adding routes
// app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
// app.use("/api/house", houseRoute);
// app.use("/api/rent", rentRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});