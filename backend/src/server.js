import express from "express";
import { PORT } from "./config/server.config.js";
import authRouter from "./routes/auth.router.js";
import courseRouter from "./routes/course.router.js";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use("/api/v1/user",authRouter);
app.use("/api/v1/course",courseRouter);
async function getConnection() {
     await prisma.$connect(); 
     console.log("db connection successfully");
     app.listen(PORT,()=>{
    console.log("server started on port",PORT);
})
     

    
}
getConnection();
