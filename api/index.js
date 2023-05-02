import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnect", () => {
  console.log("mongoDB disconnect.");
});

app.listen(4000, () => {
  connect();
  console.log("connected to backend.");
});
