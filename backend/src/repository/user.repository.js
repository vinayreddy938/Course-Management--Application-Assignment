import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userCreate = async ({email,password,firstName,lastName}) => {
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
