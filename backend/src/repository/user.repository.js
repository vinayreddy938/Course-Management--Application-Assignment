import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userCreate = async ({ email, password, firstName, lastName }) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
    return user;
  } catch (err) {
    throw err;
  }
};
export const logInRepository = async ({ email, password }) => {
  try {
    return await prisma.user.findUnique({
    where: { email }
  });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
