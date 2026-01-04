import express from "express";
import { PORT } from "./config/server.config.js";

const app = express();



app.listen(PORT,()=>{
    console.log("server started on port",PORT);
})