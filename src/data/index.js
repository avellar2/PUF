import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

prisma.users.findMany({
  where: {
    email: 'vanderson@gmail.com',
  },
}).then((docs) => console.log(docs)).catch((error) => console.log(error));
