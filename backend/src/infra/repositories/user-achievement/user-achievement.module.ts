import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserAchievementRepository } from './user-achievement.repository';

@Module({
    providers: [UserAchievementRepository, PrismaClient],
    exports: [UserAchievementRepository],
})
export class UserAchievementRepositoryModule {}
