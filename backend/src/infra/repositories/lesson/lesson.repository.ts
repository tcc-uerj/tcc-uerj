import { BaseRepository } from '@core';
import { SubjectType } from '@model';
import { Lesson, Prisma } from '@prisma/client';

export class LessonRepository extends BaseRepository<Lesson> {
    protected get select(): { select: Prisma.LessonSelect } {
        const select: Prisma.LessonSelect = {
            Challenge: {
                select: {
                    id: true,
                    level: true,
                    points: true,
                    subject: true,
                    ChallengeQuestion: {
                        select: {
                            id: true,
                            challengeId: true,
                            statementCode: true,
                            statementTitle: true,
                            type: true,
                            QuestionOptions: true,
                        },
                    },
                },
            },
            content: true,
            id: true,
            description: true,
            subject: true,
            imageUrl: true,
            LessonLink: true,
        };

        return { select };
    }

    public async findBySubject(subject: SubjectType) {
        return super.findOne<Prisma.LessonFindFirstArgs>({
            ...this.select,
            where: { subject },
        });
    }
}
