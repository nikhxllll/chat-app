import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";
import cookieParse from "cookie-parser";
import messageRoutes from "./routes/message.routes.js";
import cors from "cors";
import {app,server} from "./lib/socket.js"


dotenv.config();

const PORT = process.env.PORT;
app.use(express.json({ limit: "10mb" }));
app.use(cookieParse());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("Server is running on Port", PORT);
  connectDB();
});
