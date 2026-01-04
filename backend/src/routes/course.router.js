import express from "express";
import { courseCreateController, courseDeleteController, courseEditController, courseReadController } from "../controllers/course.controller.js";

const courseRouter = express.Router();


courseRouter.get("/",courseReadController);
courseRouter.post("/create",courseCreateController);
courseRouter.patch("/:id",courseEditController);
courseRouter.delete("/:id",courseDeleteController);


export default courseRouter;
