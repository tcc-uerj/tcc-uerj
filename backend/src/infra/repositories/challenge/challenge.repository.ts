import { BaseRepository } from '@core';
import { Level, SubjectType } from '@model';
import { Challenge, Prisma } from '@prisma/client';

export class ChallengeRepository extends BaseRepository<Challenge> {
    private select: Prisma.ChallengeSelect = {
        ChallengeQuestion: true,
        id: true,
        level: true,
        points: true,
        subject: true,
    };

    public async findBySubjectAndLevel(subject: SubjectType, level: Level) {
        return super.find<Prisma.ChallengeFindFirstArgs>({
            select: this.select,
            where: { subject, level },
        });
    }
}
