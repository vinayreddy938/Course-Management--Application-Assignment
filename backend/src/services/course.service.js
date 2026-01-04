import {
  courseReadRepository,
  courseReadByIdRepository,
  createCourseRepository,
  editCourseRepository,
  deleteCourseRepository
} from "../repository/course.repository.js";
import { CustomError } from "../utils/CustomError.js";

export const courseReadService = async () => {
  return await courseReadRepository();
};

export const courseReadByIdService = async (id) => {
  const course = await courseReadByIdRepository(id);

  if (!course || !course.isActive) {
    throw new CustomError("course not found", 404);
  }

  return course;
};

export const courseCreateService = async (data) => {
  return await createCourseRepository(data);
};

export const courseEditService = async (id, data) => {
  if (!id) {
    throw new CustomError("course id required", 400);
  }
  return await editCourseRepository(id, data);
};

export const courseDeleteService = async (id) => {
  if (!id) {
    throw new CustomError("course id required", 400);
  }
  return await deleteCourseRepository(id);
};
