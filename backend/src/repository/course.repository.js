import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const courseReadRepository = async () => {
  try {
    return await prisma.course.findMany({
      where: { isActive: true }
    });
  } catch (err) {
    throw err;
  }
};

export const courseReadByIdRepository = async (id) => {
  try {
    return await prisma.course.findUnique({
      where: { id }
    });
  } catch (err) {
    throw err;
  }
};

export const createCourseRepository = async (data) => {
  try {
    return await prisma.course.create({ data });
  } catch (err) {
    throw err;
  }
};

export const editCourseRepository = async (id, data) => {
  try {
    return await prisma.course.update({
      where: { id },
      data
    });
  } catch (err) {
    throw err;
  }
};

export const deleteCourseRepository = async (id) => {
  try {
    return await prisma.course.update({
      where: { id },
      data: { isActive: false }
    });
  } catch (err) {
    throw err;
  }
};
