import { BaseRepository } from '@core';
import { Level, SubjectType } from '@model';
import { Challenge, Prisma } from '@prisma/client';

export class ChallengeRepository extends BaseRepository<Challenge> {
    protected get select(): { select: Prisma.ChallengeSelect } {
        const select: Prisma.ChallengeSelect = {
            challengeQuestions: {
                select: {
                    id: true,
                    challengeId: true,
                    statementCode: true,
                    statementTitle: true,
                    type: true,
                    questionOptions: true,
                },
            },
            id: true,
            level: true,
            points: true,
            subject: true,
        };

        return { select };
    }

    public async findBySubjectAndLevel(subject: SubjectType, level: Level) {
        return super.find<Prisma.ChallengeFindFirstArgs>({
            ...this.select,
            where: { subject, level },
        });
    }
}
