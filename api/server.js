// import dotenv from "dotenv";
// dotenv.config();

import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
const PORT = 8000;

import { connectMongoDB } from "./src/config/dbConfig.js";
connectMongoDB();
// console.log(process.env); //.DB_Connection

app.use(express.json());
app.use(cors());
// Task api endpoints
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.json({
    message: "You have reached the not to do api server",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on http://localhost:${PORT}`);
});
