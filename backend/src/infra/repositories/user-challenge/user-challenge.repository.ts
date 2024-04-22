import { BaseRepository } from '@core';
import { Prisma, UserChallenge } from '@prisma/client';

export class UserChallengeRepository extends BaseRepository<UserChallenge> {
    protected get select(): { select: Prisma.UserChallengeSelect } {
        const select: Prisma.UserChallengeSelect = {
            challengeId: false,
            userId: false,
            completedAt: true,
            challenge: true,
        };

        return { select };
    }

    public async listChallengeByUser(userId: number) {
        return super.find<Prisma.UserChallengeFindFirstArgs>({
            ...this.select,
            where: { userId },
        });
    }

    public async findChallengeByUserId(userId: number, challengeId: number) {
        return super.findOne<Prisma.UserChallengeFindFirstArgs>({
            where: { userId, challengeId },
        });
    }
}
