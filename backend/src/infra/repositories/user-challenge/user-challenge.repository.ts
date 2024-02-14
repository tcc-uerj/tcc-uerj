import { BaseRepository } from '@core';
import { Prisma, UserChallenge } from '@prisma/client';

export class UserChallengeRepository extends BaseRepository<UserChallenge> {
    private select: Prisma.UserChallengeSelect = {
        challengeId: false,
        userId: false,
        completedAt: true,
        challenge: true,
    };

    public async listChallengeByUser(userId: number) {
        return super.find<Prisma.UserChallengeFindFirstArgs>({
            select: this.select,
            where: { userId },
        });
    }

    public async findChallengeByUserId(userId: number, challengeId: number) {
        return super.findOne<Prisma.UserChallengeFindFirstArgs>({
            where: { userId, challengeId },
        });
    }
}
