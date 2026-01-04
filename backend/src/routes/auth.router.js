import express from "express";
import { logInController, logOutController, registerController } from "../controllers/auth.controller.js";

const authRouter = express.Router();
authRouter.post("/register", registerController);
authRouter.post("/login", logInController);
authRouter.post("/logout", logOutController);

export default authRouter;
