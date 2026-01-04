import express from "express";
import { courseCreateController, courseDeleteController, courseEditController, courseReadController } from "../controllers/course.controller.js";
import { createCourseValidator, updateCourseValidator } from "../validations/course.validator.js";

const courseRouter = express.Router();


courseRouter.get("/",courseReadController);
courseRouter.post("/create",createCourseValidator,courseCreateController);
courseRouter.patch("/:id",updateCourseValidator,courseEditController);
courseRouter.delete("/:id",courseDeleteController);


export default courseRouter;
