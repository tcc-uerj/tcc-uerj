import { BaseRepository } from '@core';
import { Prisma, UserAchievement } from '@prisma/client';

export class UserAchievementRepository extends BaseRepository<UserAchievement> {
    private select: Prisma.UserAchievementSelect = {
        achievementId: false,
        userId: false,
        achievement: true,
    };

    public async listAchievementByUser(userId: number) {
        return super.find<Prisma.UserAchievementFindFirstArgs>({
            select: this.select,
            where: { userId },
        });
    }

    public async findAchievementByUserId(userId: number, achievementId: number) {
        return super.findOne<Prisma.UserAchievementFindFirstArgs>({
            where: { userId, achievementId },
        });
    }
}
