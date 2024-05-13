import { BaseRepository } from '@core';
import { AchievementType } from '@model';
import { Prisma, UserAchievement } from '@prisma/client';

export class UserAchievementRepository extends BaseRepository<UserAchievement> {
    protected get select(): { select: Prisma.UserAchievementSelect } {
        const select: Prisma.UserAchievementSelect = {
            achievementId: false,
            userId: false,
            achievement: true,
        };

        return { select };
    }

    public async listAchievementByUser(userId: number) {
        return super.find<Prisma.UserAchievementFindFirstArgs>({
            ...this.select,
            where: { userId },
        });
    }

    public async findAchievementByUserId(userId: number, achievementId: number) {
        return super.findOne<Prisma.UserAchievementFindFirstArgs>({
            where: { userId, achievementId },
        });
    }
}
