import { PrismaClient } from '@prisma/client';

export const resetTables = async (database: PrismaClient) => {
    await database.$queryRaw`
        DELETE FROM users; 
    `;
};
