import { PrismaClient } from '@prisma/client';

export const resetTables = async (database: PrismaClient) => {
    await database.userAchievement.deleteMany();
    await database.user.deleteMany();
};
