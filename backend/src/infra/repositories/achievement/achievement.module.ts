import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AchievementRepository } from './achievement.repository';

@Module({
    providers: [AchievementRepository, PrismaClient],
    exports: [AchievementRepository],
})
export class AchievementRepositoryModule {}
