import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./lib/db.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log("Server is running on Port",PORT)
    connectDB()
})