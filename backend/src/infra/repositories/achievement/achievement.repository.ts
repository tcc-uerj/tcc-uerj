import { BaseRepository } from '@core';
import { AchievementType } from '@model';
import { Achievement, Prisma } from '@prisma/client';

export class AchievementRepository extends BaseRepository<Achievement> {
    public async findByType(type: AchievementType) {
        return super.findOne<Prisma.AchievementFindFirstArgs>({
            where: { type },
        });
    }
}
