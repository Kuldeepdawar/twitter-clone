import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDb.js";

dotenv.config();

const app = express();

// middleware
app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  connectMongoDB();
  console.log("Server is running on 8000");
});
