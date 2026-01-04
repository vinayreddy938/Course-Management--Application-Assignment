import express from "express";
import { PORT } from "./config/server.config.js";
import authRouter from "./routes/auth.router.js";
import courseRouter from "./routes/course.router.js";

const app = express();

app.use("/api/v1/user",authRouter);
app.use("/api/v1/course",courseRouter);

app.listen(PORT,()=>{
    console.log("server started on port",PORT);
})