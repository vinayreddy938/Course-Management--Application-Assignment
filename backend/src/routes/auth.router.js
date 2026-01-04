import express from "express";
import { logInController, logOutController, registerController } from "../controllers/auth.controller.js";
import { logInValidator, registerValidations } from "../validations/auth.validator.js";

const authRouter = express.Router();
authRouter.post("/register",registerValidations, registerController);
authRouter.post("/login",logInValidator, logInController);
authRouter.post("/logout", logOutController);

export default authRouter;
